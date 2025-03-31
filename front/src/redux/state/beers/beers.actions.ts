import { get } from 'http'
import { Beer } from '../../../model/Beer'
import { rateBeer } from './beers.api'
import { BeerActionTypes } from './beers.model'

export const beerActions = {
  fetchBeersIfNot: () => ({
    type: BeerActionTypes.BEERS_FETCH_IF_NOT,
  }),
  fetchBeers: () => ({
    type: BeerActionTypes.BEERS_FETCH,
  }),
  setBeers: (beers: Array<Beer>) => ({
    type: BeerActionTypes.BEERS_SET,
    beers,
  }),
  fetchBeersSuccess: () => ({
    type: BeerActionTypes.BEERS_FETCH_SUCCESS,
  }),
  fetchBeersFailure: () => ({
    type: BeerActionTypes.BEERS_FETCH_FAILURE,
  }),
  getBeer: (beerId: string) => ({
    type: BeerActionTypes.BEERS_GET,
    beerId,
  }),
  getBeerSuccess: (beer: Beer) => ({
    type: BeerActionTypes.BEERS_GET_SUCCESS,
    beer,
  }),
  getBeerFailure: () => ({
    type: BeerActionTypes.BEERS_GET_FAILURE,
  }),
  rateBeer: (beerId: string, score: number) => ({
    type: BeerActionTypes.BEERS_RATE,
    beerId,
    score,
  }),
  createBeer: (beer: Partial<Beer>) => ({
    type: BeerActionTypes.BEERS_CREATE,
    beer,
  }),
  setNewlyCreatedBeer: (beer: Beer) => ({
    type: BeerActionTypes.BEERS_SET_NEW,
    beer,
  }),
  setBeer: (beer: Beer) => ({
    type: BeerActionTypes.BEER_SET,
    beer,
  }),
} as const

export type BeerActionCollection = typeof beerActions
export type AnyBeerAction = BeerActionCollection[keyof BeerActionCollection]
export type AnyBeerActionResut = ReturnType<AnyBeerAction>
