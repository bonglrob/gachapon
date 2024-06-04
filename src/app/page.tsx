'use client';

import styles from "./page.module.css";
import Coin from "./components/coin";
import Gachapon from "./components/gachapon";
import GachaCard from "./components/gachacard";
import { useState } from "react";
import GachaSet from "./components/GachaSet";
import gachaponPic from '../../public/img/gachapon.png';
import gachas from '../app/data/data';


export default function Home() {
  const [cardView, setCardView] = useState(false);
  const [coinInserted, setCoinInserted] = useState(false);
  const [sourceImage, setImage] = useState(gachaponPic);
  const [collectedGachas, setCollectedGachas] = useState([]);
  const [remainingGachas, setRemainingGachas] = useState(gachas);
  const [hideGachaSet, setHideGachaSet] = useState(false);
  const [gacha, setGacha] = useState(gachas[0]);

  return (
      <main className={styles.main}>

        <Coin coinInserted={ coinInserted }></Coin>

        <Gachapon setGacha= { setGacha } setHideGachaSet={ setHideGachaSet} cardView={ cardView } setCardView={ setCardView } setCoinInserted={ setCoinInserted } sourceImage={ sourceImage } setImage={ setImage } remainingGachas={ remainingGachas } collectedGachas={ collectedGachas } setRemainingGachas={ setRemainingGachas} setCollectedGachas={ setCollectedGachas }></Gachapon>

        <GachaCard setHideGachaSet={ setHideGachaSet } gacha={ gacha } cardView={ cardView } setCardView={ setCardView } setCoinInserted={ setCoinInserted } setImage={ setImage }></GachaCard>
        
        <GachaSet setGacha= { setGacha } hideGachaSet={ hideGachaSet } cardView={ cardView } setCardView={ setCardView } collectedGachas={ collectedGachas }></GachaSet>

      </main>
  );
}
