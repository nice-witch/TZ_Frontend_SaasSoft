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

const denormalizeMarks = (marks: { text: string }[]): string => marks.map((m) => m.text).join('; ')

export const getLKForm = () => JSON.parse(localStorage.getItem('lkForm') || '[]')
export const setLKForm = (form) => localStorage.setItem('lkForm', JSON.stringify(form))
export const mapLKRowToFormRow = (row) => ({
  ...row,
  mark: denormalizeMarks(row.mark),
  errors: {},
})
