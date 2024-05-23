'use client'
import { Button } from '@/components/button'
import { cn } from '@/utils/classes'
import { IFilter } from './interface'

export const Filter = ({ listItems, className, placeholder, label, onChange, ...props }: IFilter) => {
  return (
    <div
      className={cn(
        'w-full  pt-6 pb-[1.688rem] border-t border-b border-grayStarWars-50 xs:pt-[0.625rem] xs:pb-6 xs:border-b-0'
      )}
    >
      <div className="container lg:px-6 flex items-center gap-x-3 justify-between">
        <div className="flex-auto">
          <span className="text-lg leading-5 text-200 text-regular tracking-[0.054rem]">{label}</span>
        </div>
        <div className="flex-0 xs:hidden">
          <Button text="Clear All" disabled={true} className="min-w-[10rem] h-[2.375rem]" />
        </div>
      </div>
    </div>
  )
}
