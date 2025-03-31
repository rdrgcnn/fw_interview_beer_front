import { Beer } from '../../../model/Beer'

export const BeerActionTypes = {
  BEERS_FETCH_IF_NOT: '@BEERS/FETCH_IF_NOT',
  BEERS_FETCH: '@BEERS/FETCH',
  BEERS_FETCH_SUCCESS: '@BEERS/FETCH_SUCCESS',
  BEERS_FETCH_FAILURE: '@BEERS/FETCH_FAILURE',
  BEERS_SET: '@BEERS/SET',
  BEERS_CREATE: '@BEERS/CREATE',
  BEERS_SET_NEW: '@BEERS/SET_NEW',
  BEERS_RATE: '@BEERS/RATE',
  BEERS_GET: '@BEERS/GET',
  BEERS_GET_SUCCESS: '@BEERS/GET_SUCCESS',
  BEERS_GET_FAILURE: '@BEERS/GET_FAILURE',
  BEER_SET: '@BEER/SET',

} as const

export interface BeerReducerState {
  items: Array<Beer>
  newItems: Array<Beer>
  loading: boolean
}
