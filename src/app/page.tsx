import { listPeopleWithHomeworlds } from '@/api/services/people'
import { CharactersList } from '@/components/characterList'
import { PageIntroBox } from '@/components/pageIntro'
import { Suspense } from 'react'
import Loading from './loading'

const HomePage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  const dataPeople = await listPeopleWithHomeworlds()

  return (
    <Suspense fallback={<Loading />}>
      <main className="min-h-screen bg-white text-grayStarWars-200 py-20 font-light">
        <div className="container lg:px-6">
          <PageIntroBox
            title="Star Wars Characters"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>

        <Suspense>
          <CharactersList listTitle="All Characters" listItems={dataPeople} />
        </Suspense>
      </main>
    </Suspense>
  )
}

export default HomePage
