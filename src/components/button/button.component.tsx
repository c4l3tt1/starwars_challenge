'use client'
import { cn } from '@/utils/classes'
import Image from 'next/image'
import loadingSvg from '../../../public/loading.svg'
import { IButton } from './interface'

export const Button = ({ className, loading, text, onClick, disabled, ...props }: IButton) => {
  const disabledClasses =
    disabled && 'disabled:text-grayStarWars-80 disabled:border-grayStarWars-80 disabled:pointer-events-none'

  return (
    <button
      className={cn(
        'flex justify-center h-12 items-center border bg-transparent border-blueStarWars text-blueStarWars w-full uppercase max-w-[30.375rem] leading-[2.875rem] text-base transition-all duration-[0.4s] hover:text-white hover:bg-blueStarWars',
        disabledClasses,
        className
      )}
      onClick={onClick}
      {...props}
      disabled={disabled}
    >
      <span>{text}</span>
      {loading && <Image src={loadingSvg} width={20} height={20} alt="loading button" className="ml-2" />}
    </button>
  )
}
