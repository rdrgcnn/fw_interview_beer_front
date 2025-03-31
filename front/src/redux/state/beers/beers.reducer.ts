import { AnyBeerActionResut } from './beers.actions'
import { BeerActionTypes, BeerReducerState } from './beers.model'

const defaultBeersState: BeerReducerState = {
  items: [],
  newItems: [],
  loading: false,
}

export const beersReducer = (
  state = defaultBeersState,
  action: AnyBeerActionResut,
): BeerReducerState => {
  switch (action.type) {
    case BeerActionTypes.BEERS_SET:
      return { ...state, items: action.beers }
    case BeerActionTypes.BEERS_FETCH:
      return { ...state, loading: true }
    case BeerActionTypes.BEERS_FETCH_SUCCESS:
    case BeerActionTypes.BEERS_FETCH_FAILURE:
      return { ...state, loading: false }
    case BeerActionTypes.BEERS_SET_NEW:
      return { ...state, newItems: [...state.newItems, action.beer] }
    case BeerActionTypes.BEER_SET: 
      const beerIndex = state.items.findIndex((beer) => beer.uuid === action.beer.uuid)
      if (beerIndex !== -1) {
        const updatedItems = [...state.items]
        updatedItems[beerIndex] = action.beer
        return { ...state, items: updatedItems }
      }
      return { ...state, items: [...state.items, action.beer] }
    default:
      return state
  }
}
