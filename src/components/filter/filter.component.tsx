/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Button } from '@/components/button'
import { SelectCustom } from '@/components/select'
import { cn } from '@/utils/classes'
import { IFilter } from './interface'

export const Filter = ({
  className,
  label,
  onChange,
  disabledFilter,
  selectedValue,
  onClearFilter,
  ...props
}: IFilter) => {
  return (
    <div
      className={cn(
        'w-full  pt-7 pb-[22px] border-t border-b border-grayStarWars-50 xs:pt-[0.625rem] xs:pb-6 xs:border-b-0'
      )}
      {...props}
    >
      <div className="container lg:px-6 flex items-center  justify-between">
        <div className="flex-auto flex flex-nowrap items-center gap-x-2">
          <span className="text-lg leading-5 text-200 text-regular tracking-[0.6px]">{label}</span>
          <div className="flex-auto max-w-[190px]">
            <SelectCustom
              listItems={[
                {
                  label: 'Homeworld',
                  value: 'homeworld',
                },
                {
                  label: 'Name',
                  value: 'name',
                },
              ]}
              placeholder="All"
              onChange={onChange}
              value={selectedValue}
            />
          </div>
        </div>
        <div className="flex-0 xs:hidden">
          <Button
            text="Clear All"
            disabled={disabledFilter}
            className="min-w-[10rem] h-[2.375rem]"
            onClick={onClearFilter}
          />
        </div>
      </div>
    </div>
  )
}
