import React, { FC } from "react";
import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate/Rate";
import { BeerItemProps } from "./BeerItem.model";
import { useRenderCount } from "../../utils/useRenderCount";

// // Extends from RenderingCount

export const BeerItem: FC<BeerItemProps> = ({ beer, rateBeer })  => {
  const { name, uuid, ibu, score } = beer;
  useRenderCount(`BeerItem ${name}`);
  return  (
    <div className={styles.beerItem}>
      <div className={styles.name}>{name}</div>
      <div className={styles.ibu}>IBU: {ibu}</div>
      <div className={styles.score}>Score: {score.toPrecision(1)}</div>
      <div className={styles.rate}>
        <Rate beerId={uuid} onRate={rateBeer}/>
      </div>
    </div>
  );
}