'use client'
import { Button } from '@/components/button'
import { CharacterBox } from '@/components/characterBox'
import { TitleCharactersList } from '@/components/characterList'
import { cn } from '@/utils/classes'
import { useEffect, useState } from 'react'
import { ICharacterDetails } from '../characterBox/interface'
import { EmptyState } from '../emptyState'
import { ICharacterList } from './interface'

export const CharactersList = ({ listTitle, listItems, className, ...props }: ICharacterList) => {
  const responsiveClasses =
    'xxs:flex xxs:flex-col xxs:gap-x-0 xxs:gap-y-[2.875rem] lg:grid-cols-3 sm:grid-cols-2 gap-y-[6.875rem] gap-x-8'
  const hasListItems = listItems && listItems.length > 0
  const [visibleItems, setVisibleItems] = useState<ICharacterDetails[]>([])
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [allItemsLoaded, setAllItemsLoaded] = useState<boolean>(false)

  const itemsPerPage = 8

  const loadMoreItems = () => {
    if (hasListItems) {
      setLoading(true)
      setTimeout(() => {
        const newPage = currentPage + 1
        const newItems = listItems.slice(0, newPage * itemsPerPage)
        setVisibleItems(newItems)
        setCurrentPage(newPage)
        setLoading(false)

        if (newItems.length >= listItems.length) {
          setAllItemsLoaded(true)
        }
      }, 500)
    }
  }

  useEffect(() => {
    loadMoreItems()
  }, [])

  return (
    <>
      {/* {hasList ? ( */}
      <section className={cn('w-full')}>
        <TitleCharactersList>{listTitle}</TitleCharactersList>
        <div
          className={cn('grid grid-cols-4 gap-y-[6.875rem] gap-x-[1.875rem]', responsiveClasses, className)}
          {...props}
        >
          {hasListItems ? (
            <>
              {visibleItems.map((item, index) => (
                <CharacterBox className="xxs:flex xxs:flex-nowrap xxs:gap-x-3" character={item} key={index} />
              ))}
            </>
          ) : (
            <EmptyState title="Not Found" description="There's no data to show :(" />
          )}
        </div>

        <div className={cn('w-full flex justify-center items-center mt-[6.875rem] lg:mt-[3.438rem] xxs:mt-[2.875rem]')}>
          <Button
            text="Load More"
            className="xxs:max-w-[12.5rem]"
            onClick={loadMoreItems}
            disabled={allItemsLoaded || loading}
            loading={loading}
          />
        </div>
      </section>
    </>
  )
}
