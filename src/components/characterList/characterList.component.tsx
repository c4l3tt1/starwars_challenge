'use client'
import { cn } from '@/utils/classes'
import { CharacterBox } from '../characterBox/characterBox.component'
import { ICharacterList } from './interface'

export const CharactersList = ({ listItems, className, ...props }: ICharacterList) => {
  const hasList = listItems && listItems.length > 0

  return (
    <div
      className={cn('grid grid-cols-4 gap-y-[6.875rem] gap-x-[1.875rem] lg:grid-cols-3 sm:grid-cols-2', className)}
      {...props}
    >
      {hasList && listItems.map((item, index) => <CharacterBox character={item} key={index} />)}
    </div>
  )
}
