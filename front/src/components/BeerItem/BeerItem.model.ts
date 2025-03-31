import { Beer } from "../../model/Beer";
import { beerActions } from "../../redux/state/beers";

export interface BeerItemProps {
  beer: Beer
  rateBeer: typeof beerActions.rateBeer
}