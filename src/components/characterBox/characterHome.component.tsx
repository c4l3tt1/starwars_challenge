'use client'
import { cn } from '@/utils/classes'
import { ICharacterHome } from './interface'

export const CharacterHome = ({ children, className, ...props }: ICharacterHome) => {
  return (
    <h4 className={cn('text-black text-lg leading-7 font-regular mt-0 mb-1', className)} {...props}>
      {children}
    </h4>
  )
}
