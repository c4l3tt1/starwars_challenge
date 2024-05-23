import { CharacterBox } from '@/components/characterBox'
import { TitleCharactersList } from '@/components/characterList'
import { cn } from '@/utils/classes'
import { ICharacterList } from './interface'

export const CharactersList = ({ listTitle, listItems, className, ...props }: ICharacterList) => {
  const hasList = listItems && listItems.length > 0
  const responsiveClasses =
    'xxs:flex xxs:flex-col xxs:gap-x-0 xxs:gap-y-[2.875rem] lg:grid-cols-3 sm:grid-cols-2 gap-y-[6.875rem] gap-x-8'
  return (
    <section className={cn('w-full')}>
      <TitleCharactersList>{listTitle}</TitleCharactersList>
      <div
        className={cn('grid grid-cols-4 gap-y-[6.875rem] gap-x-[1.875rem]', responsiveClasses, className)}
        {...props}
      >
        {hasList &&
          listItems.map((item, index) => (
            <CharacterBox className="xxs:flex xxs:flex-nowrap xxs:gap-x-3" character={item} key={index} />
          ))}
      </div>
    </section>
  )
}
