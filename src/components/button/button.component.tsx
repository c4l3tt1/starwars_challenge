'use client'
import { cn } from '@/utils/classes'
import { IButton } from './interface'

export const Button = ({ className, loading, text, onClick, ...props }: IButton) => {
  return (
    <div className={cn('w-full flex justify-center items-center mt-[6.875rem]')}>
      <button
        className={cn(
          'flex justify-center h-12 items-center border bg-transparent border-blueStarWars text-blueStarWars w-full uppercase max-w-[30.375rem] leading-[46px] text-base transition-all duration-[0.4s] hover:text-white hover:bg-blueStarWars'
        )}
        onClick={onClick}
        {...props}
      >
        <span>{text}</span>
      </button>
    </div>
  )
}
