import React, { FC } from "react";

import styles from "./Rate.module.scss";

/** 
 * Rating is a mean. 
 * No apparent min/max so by default going from 1 to 10.
 */

export const Rate: FC<{beerId: string, onRate: Function}> = ({ beerId, onRate }) => {
  const handleRate = (score: number) => {
    onRate(beerId, score);
  };
  return (
    <div className={styles.rate}>
      <div className={styles.inLove} onClick={() => handleRate(10)} />
      <div className={styles.happy} onClick={() => handleRate(5)} />
      <div className={styles.sad} onClick={() => handleRate(1)} />
    </div>
  );
}
