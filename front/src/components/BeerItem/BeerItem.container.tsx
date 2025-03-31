import { connect } from 'react-redux'
import { beerActions } from '../../redux/state/beers'
import { StoreState } from '../../redux'
import { BeerItem } from './BeerItem.component'

export default connect(
  (state: StoreState) => {return {};},
  { rateBeer: beerActions.rateBeer }
)(BeerItem)
