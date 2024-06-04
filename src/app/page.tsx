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
  const remainingGachas = gachas;

  return (
      <main className={styles.main}>

        <Coin coinInserted={ coinInserted }></Coin>

        <Gachapon cardView={ cardView } setCardView={ setCardView } setCoinInserted={ setCoinInserted } sourceImage={ sourceImage } setImage={ setImage } remainingGachas={ remainingGachas }></Gachapon>

        <GachaCard cardView={ cardView } setCardView={ setCardView } setCoinInserted={ setCoinInserted } setImage={ setImage }></GachaCard>
        
        <GachaSet></GachaSet>

        {/* <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore starter templates for Next.js.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy実験テストはいヤッホー <span>-&gt;</span>
            </h2>
            <p>
              初めまして。この言葉はただテストなんだよ！ありがとうございます。
            </p>
          </a>
        </div> */}
      </main>
  );
}
