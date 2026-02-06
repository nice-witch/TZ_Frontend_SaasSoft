import type { RowForm } from '@/stores/FormStore.ts'

export const normalizeRow = (row: RowForm) => {
  return {
    ...row,
    mark: normalizeMarks(row.mark),
  }
}

export const normalizeMarks = (mark: string) => {
  return mark
    .split(';')
    .map((m) => m.trim())
    .filter(Boolean)
    .map((text) => ({ text }))
}

export const getLKForm = () => JSON.parse(localStorage.getItem('lkForm') || '[]')
export const setLKForm = (form) => localStorage.setItem('lkForm', JSON.stringify(form))
