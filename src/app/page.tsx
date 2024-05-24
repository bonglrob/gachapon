'use client';

import styles from "./page.module.css";
import Coin from "./components/coin";
import { useState } from "react";
import Gachapon from "./components/gachapon";
// import { Typography, Button } from "@mui/material";


export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  return (
      <main className={styles.main}>
        {/* <div>
          <Button onClick={console.log('button pressed')} variant="contained">
            ただ実験テストなんだよ！ Gachapon
          </Button>
        </div>
        <div>
          <Typography variant="h4" sx={{ background: 'red' }}>ありがとう！This is fun?笑</Typography>
        </div> */}

        <Coin isClicked={isClicked} setIsClicked={setIsClicked}></Coin>

        <Gachapon isClicked={isClicked} setIsClicked={setIsClicked}></Gachapon>

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
