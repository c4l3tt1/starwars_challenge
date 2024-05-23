import { cn } from '@/utils/classes'
import { ICharacterHomeWorld } from './interface'

export const CharacterHomeWorld = ({ children, className, ...props }: ICharacterHomeWorld) => {
  return (
    <h4 className={cn('text-black text-lg leading-7 font-regular mt-0 mb-1', className)} {...props}>
      {children}
    </h4>
  )
}
