import { cn } from '@/utils/classes'
import { ICharacterHomeWorld } from './interface'

export const CharacterHomeWorld = ({ children, className, ...props }: ICharacterHomeWorld) => {
  return (
    <h4
      className={cn(
        'text-black text-lg leading-7 font-regular mt-0 mb-[0.813rem] tracking-[0.056rem] xs:text-sm xs:leading-7 xxs:mb-0 xxs:leading-9',
        className
      )}
      {...props}
    >
      {children}
    </h4>
  )
}
