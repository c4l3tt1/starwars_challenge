import { cn } from '@/utils/classes'
import { CharacterDetails } from './characterDetails.component'
import { CharacterHome } from './characterHome.component'
import { CharacterImage } from './characterImage.component'
import { CharacterName } from './characterName.component'
import { ICharacterBox } from './interface'

export const CharacterBox = async ({ character, className, ...props }: ICharacterBox) => {
  const characterNameTrim = character && character?.name?.trim()

  return (
    <>
      <article className={cn('w-full h-auto', className)} {...props}>
        <CharacterImage imageUrl={`https://picsum.photos/432/230?char=${characterNameTrim}`} />
        <CharacterName>{character.name}</CharacterName>
        <CharacterHome>{character.homeworld}</CharacterHome>
        <CharacterDetails height={character.height} mass={character.mass} gender={character.gender} />
      </article>
    </>
  )
}
