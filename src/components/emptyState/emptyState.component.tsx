'use client'
import { cn } from '@/utils/classes'
import Image from 'next/image'
import emptyStateImage from '../../../public/empty-state.png'
import { IEmptyState } from './interface'

export const EmptyState = ({ className, description, title, imageUrl, ...props }: IEmptyState) => {
  return (
    <div className={cn('w-full flex flex-col justify-center items-center pt-20 sm:pt-10', className)} {...props}>
      <Image
        src={imageUrl || emptyStateImage}
        width={300}
        height={300}
        loading="eager"
        alt="description"
        className="w-full h-auto max-w-52 mb-8 opacity-40 sm:max-w-40"
      />
      <p className="text-regular text-4xl text-center text-black/40 leading-[3.375rem] sm:text-3xl sm:leading[2.125rem]">
        {title}
      </p>
      <p className="text-light text-2xl text-center text-black/40 sm:text-1xl">{description}</p>
    </div>
  )
}
