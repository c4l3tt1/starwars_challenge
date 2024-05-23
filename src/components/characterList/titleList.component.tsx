import { cn } from '@/utils/classes'
import { IListTitle } from './interface'

export const TitleCharactersList = ({ children, className, ...props }: IListTitle) => {
  return (
    <h2
      className={cn('text-grayStarWars-300 text-3xl leading-10 font-light mt-[3.125rem] mb-10', className)}
      {...props}
    >
      {children}
    </h2>
  )
}
