'use client'
import { Button } from '@/components/button'
import { CharacterBox } from '@/components/characterBox'
import { TitleCharactersList } from '@/components/characterList'
import { cn } from '@/utils/classes'
import { EmptyState } from '../emptyState'
import { ICharacterList } from './interface'

export const CharactersList = ({ listTitle, listItems, className, ...props }: ICharacterList) => {
  const hasList = listItems && listItems.length > 0
  const responsiveClasses =
    'xxs:flex xxs:flex-col xxs:gap-x-0 xxs:gap-y-[2.875rem] lg:grid-cols-3 sm:grid-cols-2 gap-y-[6.875rem] gap-x-8'

  return (
    <>
      {hasList ? (
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

          <div
            className={cn('w-full flex justify-center items-center mt-[6.875rem] lg:mt-[3.438rem] xxs:mt-[2.875rem]')}
          >
            <Button text="Load More" className="xxs:max-w-[12.5rem]" />
          </div>
        </section>
      ) : (
        <EmptyState title="Not Found" description="There's no data to show :(" />
      )}
    </>
  )
}
