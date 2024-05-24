'use client'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ISelect } from './interface'

export const SelectCustom = ({ className, placeholder, listItems, onChange, value, ...props }: ISelect) => {
  const hasPlaceHolder = placeholder && placeholder !== ''

  return (
    <Select onValueChange={onChange} value={value}>
      {placeholder && (
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      )}
      <SelectContent>
        <SelectGroup>
          {hasPlaceHolder && (
            <SelectItem key={placeholder} value={placeholder}>
              {placeholder}
            </SelectItem>
          )}
          {listItems && listItems.length > 0 && (
            <>
              {listItems.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
