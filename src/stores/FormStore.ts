import { defineStore } from 'pinia'
import { ref } from 'vue'

type RowForm = {
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

  return {
    form,
    setForm,
    addRow,
    deleteRow,
    changeType,
  }
})
