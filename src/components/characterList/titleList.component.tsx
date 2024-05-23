import { cn } from '@/utils/classes'
import { IListTitle } from './interface'

export const TitleCharactersList = ({ children, className, ...props }: IListTitle) => {
  const responsiveClasses = 'md:mt-7 md:mb-7 md:text-2xl md:leading-8'
  return (
    <h2
      className={cn(
        'text-grayStarWars-300 text-3xl leading-10 font-light mt-[3.125rem] mb-[2.625rem] sm:mb-9',
        responsiveClasses,
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}
