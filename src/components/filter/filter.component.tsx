'use client'
import { cn } from '@/utils/classes'
import { IFilter } from './interface'

export const Filter = ({ listItems, className, placeholder, label, onChange, ...props }: IFilter) => {
  return (
    <div className={cn('w-full  py-6 border-t border-b border-grayStarWars-50')}>
      <div className="container md:px-6 flex items-center gap-x-3">
        <span className="text-lg leading-5 text-200 text-regular">{label}</span>
      </div>
    </div>
  )
}
