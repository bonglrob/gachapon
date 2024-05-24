'use client';

// Move the coin image to mouse cursor's position
import { useState, useEffect } from "react";
import Image from "next/image";
import coinImage from '../../../public/img/money_coin_reiwa_100.png';
import styles from '../page.module.css';

export default function Coin({ isClicked, setIsClicked}){

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    };

    if (isClicked) {
      window.addEventListener('mousemove', updatePosition);
    } else {
      window.removeEventListener('mousemove', updatePosition);
    }

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
   }, [isClicked]);


  return (
    <div className={styles.alignRight} style={{ position: 'absolute', zIndex:2, left: position.x, top: position.y}}>
      <Image
        src={coinImage}
        alt="picture of 100 yen coin"
        className={styles.coin}
        onClick={() => {
          setIsClicked(true);
        }}
      />
    </div>
  );
};

//transform: `translate(${position.x}px, ${position.y}px)`
//style={{ position: 'absolute', left: position.x, top: position.y }}


// return    <div onMouseMove={(e) => {manageMouseMove(e)}} className={styles.div}></div>

// const [position, setPosition] = useState({ x: 0, y: 0 });

// useEffect(() => {
//   function handleMove(e) {
//     setPosition({ x: e.clientX, y: e.clientY});
//   }
//   window.addEventListener("pointermove", handleMove);
//   return () => {
//     window.removeEventListener("pointermove", handleMove);
//   };
// }, []);