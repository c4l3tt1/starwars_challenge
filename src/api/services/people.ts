import apiClient from '@/api/axios'
import { ICharacterDetails, ICharacterResponse } from '@/components/characterBox/interface'

export const getPeople = async (): Promise<ICharacterResponse> => {
  const response = await apiClient.get<ICharacterResponse>('/people')
  return response.data
}

export const getPeoplePlanetHome = async (id: string): Promise<string> => {
  const response = await apiClient.get<{ name: string }>(`/planets/${id}`)
  return response.data.name
}

export const listPeopleWithHomeworlds = async (): Promise<ICharacterDetails[]> => {
  const peopleResponse = await getPeople()
  const charactersWithHomeworlds: ICharacterDetails[] = [] // Inicialize como um array vazio

  await Promise.all(
    peopleResponse.results.map(async (character) => {
      if (character.homeworld) {
        const homeworldId = character.homeworld.split('/').filter(Boolean).pop()!
        const homeworldName = await getPeoplePlanetHome(homeworldId)
        charactersWithHomeworlds.push({
          name: character.name,
          homeworld: homeworldName,
          height: character.height,
          mass: character.mass,
          gender: character.gender,
        })
      }
    })
  )

  return charactersWithHomeworlds
}
