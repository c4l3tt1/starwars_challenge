'use client'
import { cn } from '@/utils/classes'
import { ICharacterName } from './interface'

export const CharacterName = ({ children, className, ...props }: ICharacterName) => {
  return (
    <h3 className={cn('text-black text-xl leading-7 font-regular mt-4 mb-1', className)} {...props}>
      {children}
    </h3>
  )
}
