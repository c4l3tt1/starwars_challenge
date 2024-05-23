export interface IFilterItem {
  label: string
  value: string
}

export interface IFilter {
  className?: string
  placeholder?: string
  label?: string
  listItems?: IFilterItem[]
  onChange?: () => void
}
