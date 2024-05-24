import apiClient from '@/api/axios'
import { ICharacterDetails, ICharacterResponse } from '@/components/characterBox/interface'

export const getPeople = async (page: number = 1): Promise<ICharacterResponse> => {
  const params: Record<string, string> = { page: page.toString() }
  const response = await apiClient.get<ICharacterResponse>('/people', { params })
  return response.data
}

export const getAllPeople = async (): Promise<ICharacterDetails[]> => {
  let allPeople: ICharacterDetails[] = []
  let page = 1
  let hasNextPage = true

  while (hasNextPage) {
    const response = await getPeople(page)
    allPeople = allPeople.concat(response.results)

    hasNextPage = Boolean(response.next) // Se houver uma próxima página, continua
    page += 1
  }

  return allPeople
}

export const getPeoplePlanetHome = async (id: string): Promise<string> => {
  const response = await apiClient.get<{ name: string }>(`/planets/${id}`)
  return response.data.name
}

export const listPeopleWithHomeworlds = async (): Promise<ICharacterDetails[]> => {
  const response = await getAllPeople()
  const charactersWithHomeworlds: ICharacterDetails[] = []

  await Promise.all(
    response.map(async (character) => {
      if (character.homeworld) {
        const homeworldId = character.homeworld.split('/').filter(Boolean).pop()!
        const homeworldName = await getPeoplePlanetHome(homeworldId)
        charactersWithHomeworlds.push({ ...character, homeworld: homeworldName })
      } else {
        charactersWithHomeworlds.push(character)
      }
    })
  )

  return charactersWithHomeworlds
}
