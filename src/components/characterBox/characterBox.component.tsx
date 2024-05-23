import { CharacterDetails, CharacterHomeWorld, CharacterImage, CharacterName } from '@/components/characterBox'
import { cn } from '@/utils/classes'
import { ICharacterBox } from './interface'

export const CharacterBox = async ({ character, className, ...props }: ICharacterBox) => {
  const characterNameTrim = character && character?.name?.trim()

  return (
    <>
      <article
        className={cn('w-full h-auto transition-transform duration-[0.4s] hover:-translate-y-2', className)}
        {...props}
      >
        <CharacterImage imageUrl={`https://picsum.photos/432/230?char=${characterNameTrim}`} />
        <CharacterName>{character.name}</CharacterName>
        <CharacterHomeWorld>{character.homeworld}</CharacterHomeWorld>
        <CharacterDetails height={character.height} mass={character.mass} gender={character.gender} />
      </article>
    </>
  )
}
