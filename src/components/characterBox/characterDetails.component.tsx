import { cn } from '@/utils/classes'
import { ICharacterDetails } from './interface'

export const CharacterDetails = ({ height, mass, gender, className, ...props }: ICharacterDetails) => {
  const hasHeight = height && height.length > 0
  const hasMass = mass && mass.length > 0
  const hasGender = gender && gender.length > 0

  return (
    <>
      <div className={cn('text-xs text-grayStarWars-100 leading-4 font-regular m-0 uppercase', className)} {...props}>
        {hasHeight && <span className="block">Height • {height}</span>}
        {hasMass && <span className="block">Mass • {mass}</span>}
        {hasGender && <span className="block">Gender • {gender}</span>}
      </div>
    </>
  )
}
