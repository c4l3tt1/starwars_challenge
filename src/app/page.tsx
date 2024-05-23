import { listPeopleWithHomeworlds } from '@/api/services/people'
import { Button } from '@/components/button'
import { CharactersList } from '@/components/characterList'
import { Filter } from '@/components/filter'
import { PageIntroBox } from '@/components/pageIntro'
import { cn } from '@/utils/classes'

const HomePage = async () => {
  const dataPeople = await listPeopleWithHomeworlds()

  return (
    <main className="min-h-screen bg-white text-grayStarWars-200 py-20 font-light">
      <div className="container lg:px-6">
        <PageIntroBox
          title="Star Wars Characters"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
      </div>
      <Filter label="Filter By" />
      <div className="container lg:px-6">
        <CharactersList listTitle="All Characters" listItems={dataPeople.slice(0, 8)} />
        <div className={cn('w-full flex justify-center items-center mt-[6.875rem] lg:mt-[3.438rem] xxs:mt-[2.875rem]')}>
          <Button text="Load More" className="xxs:max-w-[12.5rem]" />
        </div>
      </div>
    </main>
  )
}

export default HomePage
