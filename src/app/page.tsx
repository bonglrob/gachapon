'use client';

import styles from "./page.module.css";
import Coin from "./components/coin";
import Gachapon from "./components/gachapon";
import GachaCard from "./components/gachacard";
import { useState } from "react";
import GachaSet from "./components/GachaSet";
import gachaponPic from '@/gachapon.png';
import gachas from '../app/data/data';

type GachaItem = {
  color: string;
  link: string;
  image: string;
  subtitle: string;
  description: string;
  extra: string;
};

export default function Home() {
  const initialRemainingGachas: { [key: string]: GachaItem }[] = gachas.map(gacha => {
    const key = Object.keys(gacha)[0];
    return { [key]: gacha[key] };
});

  const [cardView, setCardView] = useState(false);
  const [coinInserted, setCoinInserted] = useState(false);
  const [sourceImage, setImage] = useState(gachaponPic);
  const [collectedGachas, setCollectedGachas] = useState([{}]);
  const [remainingGachas, setRemainingGachas] = useState<{ [key: string]: GachaItem }[]>(initialRemainingGachas);
  const [hideGachaSet, setHideGachaSet] = useState(true);
  const [gacha, setGacha] = useState(gachas[0]);

  const [showBlue, setShowBlue] = useState<boolean>(false);
  const [showYellow, setShowYellow] = useState<boolean>(false);
  const [showGreen, setShowGreen] = useState<boolean>(false);
  const [showRed, setShowRed] = useState<boolean>(false);


  return (
      <main className={styles.main}>

        <Coin remainingGachas={ remainingGachas } coinInserted={ coinInserted }></Coin>

        <Gachapon setShowBlue={ setShowBlue } setShowGreen={ setShowGreen } setShowRed={ setShowRed } setShowYellow={ setShowYellow } setGacha= { setGacha } setHideGachaSet={ setHideGachaSet} cardView={ cardView } setCardView={ setCardView } setCoinInserted={ setCoinInserted } sourceImage={ sourceImage } setImage={ setImage } remainingGachas={ remainingGachas } collectedGachas={ collectedGachas } setRemainingGachas={ setRemainingGachas} setCollectedGachas={ setCollectedGachas }></Gachapon>

        <GachaCard setHideGachaSet={ setHideGachaSet } gacha={ gacha } cardView={ cardView } setCardView={ setCardView } setCoinInserted={ setCoinInserted } setImage={ setImage }></GachaCard>
        
        <GachaSet showBlue={ showBlue } showGreen={ showGreen } showRed={ showRed } showYellow={ showYellow } setGacha={ setGacha } hideGachaSet={ hideGachaSet } cardView={ cardView } setCardView={ setCardView } collectedGachas={ collectedGachas }></GachaSet>

      </main>
  );
}
