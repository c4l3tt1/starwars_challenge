'use client'
import { cn } from '@/utils/classes'
import { CharacterDetails } from './characterDetails.component'
import { CharacterHome } from './characterHome.component'
import { CharacterImage } from './characterImage.component'
import { CharacterName } from './characterName.component'
import { ICharacterBox } from './interface'

export const CharacterBox = ({ className, ...props }: ICharacterBox) => {
  return (
    <article className={cn('w-full h-auto', className)} {...props}>
      <CharacterImage />
      <CharacterName>Luke</CharacterName>
      <CharacterHome>Tatooine</CharacterHome>
      <CharacterDetails height="172" mass="77" gender="Male" />
    </article>
  )
}
