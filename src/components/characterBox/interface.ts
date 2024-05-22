export type ICharacterName = React.ComponentProps<'h3'>
export type ICharacterHome = React.ComponentProps<'h4'>

export interface ICharacterDetails {
  name?: string
  homeworld?: string
  height?: string
  mass?: string
  gender?: string
  className?: string
}
export interface ICharacterImage {
  className?: string
  imageUrl: string
}

export interface ICharacterBox {
  character: ICharacterDetails
  className?: string
}

export interface ICharacterResponse {
  results: ICharacterDetails[]
  count: number
  next: string
  previous: string | null
}
