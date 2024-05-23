import { ICharacterDetails } from '../characterBox/interface'

export type IListTitle = React.ComponentProps<'h3'>
export interface ICharacterList {
  listTitle: string
  className?: string
  listItems?: ICharacterDetails[]
}
