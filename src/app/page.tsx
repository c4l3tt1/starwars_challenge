import { listPeopleWithHomeworlds } from '@/api/services/people'
import { CharactersList } from '@/components/characterList'
import { PageIntroBox } from '@/components/pageIntro'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loading from './_loading'

async function ListCharacters() {
  const dataPeople = await listPeopleWithHomeworlds()

  return <CharactersList listTitle="All Characters" listItems={dataPeople} />
}

const DynamicLoading = dynamic(() => import('./_loading'), {
  loading: () => <Loading />,
  ssr: true,
})

const HomePage = async () => {
  return (
    <Suspense fallback={<DynamicLoading />}>
      <main className="min-h-screen bg-white text-grayStarWars-200 py-20 font-light">
        <div className="container lg:px-6">
          <PageIntroBox
            title="Star Wars Characters"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>
        <ListCharacters />
      </main>
    </Suspense>
  )
}

export default HomePage
