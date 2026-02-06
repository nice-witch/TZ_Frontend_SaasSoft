import { defineStore } from 'pinia'
import { ref } from 'vue'
import { normalizeRow, getLKForm, setLKForm } from '@/components/Form/scripts.ts'

export type RowForm = {
  mark: string
  selectType: 'LDAP' | 'Локальная' | ''
  login: string
  password: string | null
  id: number
  errors: {
    selectType?: boolean
    login?: boolean
    password?: boolean
  }
}

export const useFormStore = defineStore('Form', () => {
  const form = ref<RowForm[]>([])

  const addRow = () => {
    form.value.push({
      mark: '',
      selectType: '',
      login: '',
      password: '',
      id: Date.now(),
      errors: {},
    })
  }
  const deleteRow = (id: number) => {
    form.value = form.value.filter((item) => item.id !== id)
  }
  const changeType = (val: string, id: number) => {
    const idx = form.value.findIndex((item) => item.id === id)

    form.value[idx].selectType === val
    if (val === 'LDAP') form.value[idx].password = null
    else form.value[idx].password = ''
  }

  const validateRow = (id: number) => {
    const row = form.value.find((r) => r.id === id)
    if (!row) return false

    row.errors = {}

    if (!row.selectType) row.errors.selectType = true
    if (!row.login) row.errors.login = true
    if (row.selectType === 'Локальная' && !row.password) row.errors.password = true

    const isValid = Object.keys(row.errors).length === 0

    if (isValid) saveToLK(row)
  }

  function saveToLK(row: RowForm) {
    const normalizedRow = normalizeRow(row)
    const lkForm = getLKForm()

    const idx = lkForm.findIndex((r) => r.id === row.id)

    if (idx === -1) {
      lkForm.push(normalizedRow)
    } else {
      lkForm[idx] = normalizedRow
    }

    setLKForm(lkForm)
  }

  return {
    form,
    addRow,
    deleteRow,
    changeType,
    validateRow,
  }
})
