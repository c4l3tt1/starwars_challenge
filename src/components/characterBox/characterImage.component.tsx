'use client'
import { cn } from '@/utils/classes'
import Image from 'next/image'
import { ICharacterImage } from './interface'

export const CharacterImage = ({ children, className, ...props }: ICharacterImage) => {
  return (
    <div className={cn('w-full pb-[56%] max-h-[14.375rem] relative', className)} {...props}>
      <Image
        src="https://picsum.photos/432/230"
        width={432}
        height={230}
        loading="eager"
        alt="Random Pic Character"
        className="absolute h-full w-full left-0 top-0 w-full object-cover"
      />
    </div>
  )
}
