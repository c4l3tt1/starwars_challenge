import { CharactersList } from '@/components/characterList'
import { PageIntroBox } from '@/components/pageIntro'

const HomePage = async () => {
  //

  return (
    <main className="min-h-screen bg-white text-grayStarWars-200 py-20 font-light">
      <div className="container md:px-6">
        <PageIntroBox
          title="Star Wars Characters"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <CharactersList />
      </div>
    </main>
  )
}

export default HomePage
