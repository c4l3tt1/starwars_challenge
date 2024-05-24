export interface ISelectItem {
  label: string
  value: string
}

export interface ISelect {
  className?: string
  placeholder?: string
  listItems?: ISelectItem[]
  onChange: (value: string) => void
  value?: string
}
