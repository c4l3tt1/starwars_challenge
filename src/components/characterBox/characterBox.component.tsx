import { CharacterDetails, CharacterHomeWorld, CharacterImage, CharacterName } from '@/components/characterBox'
import { cn } from '@/utils/classes'
import { ICharacterBox } from './interface'

export const CharacterBox = ({ character, className, ...props }: ICharacterBox) => {
  const characterNameTrim = character && character?.name?.trim()

  const responsiveClassesImage = 'xxs:max-w-[42%] xxs:pb-[38%] xxxs:max-w-[34%]'
  return (
    <>
      <article
        className={cn('w-full h-auto transition-transform duration-[0.4s] hover:-translate-y-2', className)}
        {...props}
      >
        <CharacterImage
          className={responsiveClassesImage}
          imageUrl={`https://picsum.photos/432/230?char=${characterNameTrim}`}
        />
        <div>
          <CharacterName>{character.name}</CharacterName>
          <CharacterHomeWorld>{character.homeworld}</CharacterHomeWorld>
          <CharacterDetails
            className="xxs:hidden"
            height={character.height}
            mass={character.mass}
            gender={character.gender}
          />
        </div>
      </article>
    </>
  )
}
