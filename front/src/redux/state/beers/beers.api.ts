import axios from 'axios'
import { Beer } from '../../../model/Beer'

export const getBeers = () => axios.get<Array<Beer>>(`/api/beers`)
export const getBeer = (beerId: string) => axios.get<Beer>(`/api/beers/${beerId}`)
export const postBeer = (beer: Beer) => axios.post<Beer>(`/api/beers`, beer)
export const rateBeer = (beerId: string, score: number) => axios.post(`/api/beers/${beerId}/rate`, { score })
