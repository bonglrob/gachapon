'use client';

import Image from "next/image";
import coinImage from '../../../public/img/money_coin_reiwa_100.png';
import styles from '../page.module.css';
import { useRef, useEffect, useState } from "react";
import {draggable} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import invariant from 'tiny-invariant';


export default function Coin({ coinInserted, remainingGachas }){
  const ref = useRef(null);
  const [dragging, setDragging] = useState<boolean>(false);

  useEffect(() => {
    const coin = ref.current;
    invariant(coin);

    return draggable({
      element: coin,
      onDragStart: () => {setDragging(true);},
      onDrop: () => setDragging(false),
    });
  }, []);

  return (
    <div className={ remainingGachas == 0 || coinInserted ? styles.hidden : styles.alignRight}>
      <Image
        src={coinImage}
        alt="picture of 100 yen coin"
        className={ dragging ? `${styles.coin} ${styles.coinActive}` : styles.coin }
        ref={ref}
      />
    </div>
  );
};