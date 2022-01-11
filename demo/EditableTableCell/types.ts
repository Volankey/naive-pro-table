export interface InputProps {
  setEditStatus: (editable: boolean) => void
  value: string
  updateValue: (v: any) => void
  editing: boolean
}
export type Validator = (value: string | number) => boolean

export type FieldRule = {
  validator: Validator
  message: string
  type: typeof Number | typeof String
}
