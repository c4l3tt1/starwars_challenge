import { cn } from '@/utils/classes'
import { ICharacterName } from './interface'

export const CharacterName = ({ children, className, ...props }: ICharacterName) => {
  return (
    <h3
      className={cn(
        'text-black text-xl leading-7 font-regular mt-4 mb-[0.375rem] tracking-[0.056rem] xxs:m-0',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}
