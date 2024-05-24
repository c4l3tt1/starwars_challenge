export interface IFilter {
  className?: string
  label?: string
  onChange: (value: string) => void
  disabledFilter?: boolean
  selectedValue?: string
}
