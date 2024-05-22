import Image from "next/image";
import styles from "./page.module.css";
import { Typography, Button } from "@mui/material";

export default function Home() {
  return (
      <main className={styles.main}>
        <div>
          <Button variant="contained">
            ただ実験テストなんだよ！ Gachapon
          </Button>
        </div>
        <div>
          <Typography variant="h4">ありがとう！</Typography>
        </div>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/app/page.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            src="/img/gachapon.png"
            alt="picture of gachapon machine"
            width={533}
            height={742}
            priority
          />
        </div>

        <div className={styles.grid}>
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
        </div>
      </main>
  );
}
