'use client';

import Image from "next/image";

// coin insert animation
import gachaponCoinInsert from '../../../public/img/coin-insert-1.png';
import gachaponCoinInsert2 from '../../../public/img/coin-insert-2.png';
import gachaponCoinInsert3 from '../../../public/img/coin-insert-3.png';
import gachaponCoinInsert4 from '../../../public/img/coin-insert-4.png';
import coinInsertSfx from '../../../public/assets/coin_insert_sfx.mp3';

// gacha dispense animation
import dispenseGacha1 from '../../../public/img/gachapon_open1.png'
import dispenseGacha2 from '../../../public/img/gachapon_open2.png'
import dispenseGacha3 from '../../../public/img/gachapon_open3.png'
import dispenseGacha4 from '../../../public/img/gachapon_open4.png'
import dispenseGacha5 from '../../../public/img/gachapon_open5.png'
import dispenseGacha6 from '../../../public/img/gachapon_open6.png'

// red capsule dispense animation
import red1 from '../../../public/img/gachapon_open7_red1.png'
import red2 from '../../../public/img/gachapon_open7_red2.png';
import red3 from '../../../public/img/gachapon_open7_red3.png';
import red4 from '../../../public/img/gachapon_open7_red4.png';
import red5 from '../../../public/img/gachapon_open7_red5.png';
import red6 from '../../../public/img/gachapon_open7_red6.png';
import red7 from '../../../public/img/gachapon_open7_red7.png';

// green capsule dispense animation
import green1 from '../../../public/img/gachapon_open7_green1.png';
import green2 from '../../../public/img/gachapon_open7_green2.png';
import green3 from '../../../public/img/gachapon_open7_green3.png';
import green4 from '../../../public/img/gachapon_open7_green4.png';
import green5 from '../../../public/img/gachapon_open7_green5.png';
import green6 from '../../../public/img/gachapon_open7_green6.png';
import green7 from '../../../public/img/gachapon_open7_green7.png';

// yellow capsule dispense animation
import yellow1 from '../../../public/img/gachapon_open7_yellow1.png';
import yellow2 from '../../../public/img/gachapon_open7_yellow2.png';
import yellow3 from '../../../public/img/gachapon_open7_yellow3.png';
import yellow4 from '../../../public/img/gachapon_open7_yellow4.png';
import yellow5 from '../../../public/img/gachapon_open7_yellow5.png';
import yellow6 from '../../../public/img/gachapon_open7_yellow6.png';
import yellow7 from '../../../public/img/gachapon_open7_yellow7.png';

// blue capsule dispense animation
import blue1 from '../../../public/img/gachapon_open7_blue1.png';
import blue2 from '../../../public/img/gachapon_open7_blue2.png';
import blue3 from '../../../public/img/gachapon_open7_blue3.png';
import blue4 from '../../../public/img/gachapon_open7_blue4.png';
import blue5 from '../../../public/img/gachapon_open7_blue5.png';
import blue6 from '../../../public/img/gachapon_open7_blue6.png';
import blue7 from '../../../public/img/gachapon_open7_blue7.png';

import gachas from '../data/data';


import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useRef, useEffect, useState } from "react";
import invariant from "tiny-invariant";
import styles from '../page.module.css';

export default function Gachapon({ setGacha, setHideGachaSet, cardView, setCardView, setCoinInserted, sourceImage, setImage, remainingGachas, collectedGachas, setCollectedGachas, setRemainingGachas }) {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
    const [coinInsertAnimation] = useState(() => [
        gachaponCoinInsert,
        gachaponCoinInsert2,
        gachaponCoinInsert3,
        gachaponCoinInsert4
    ]);

    const [dispenseGachaAnimation] = useState(() => [
        dispenseGacha1,
        dispenseGacha2,
        dispenseGacha3,
        dispenseGacha4,
        dispenseGacha5,
        dispenseGacha6,
    ])

    const [redAnimation] = useState([
        red1,
        red2,
        red3,
        red4,
        red5,
        red6,
        red7
      ]);
      
    const [greenAnimation] = useState(() => [
        green1,
        green2,
        green3,
        green4,
        green5,
        green6,
        green7
    ]);
      
    const [yellowAnimation] = useState([
        yellow1,
        yellow2,
        yellow3,
        yellow4,
        yellow5,
        yellow6,
        yellow7
    ]);
      
    const [blueAnimation] = useState([
    blue1,
    blue2,
    blue3,
    blue4,
    blue5,
    blue6,
    blue7
    ]);


    const handleClick = async () => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }

        if (sourceImage === coinInsertAnimation[0] && remainingGachas.length > 0) {
            for (const pic of coinInsertAnimation) {
                await sleep(75);
                setImage(pic);
            }
            for (const pic of dispenseGachaAnimation) {
                await sleep(75);
                setImage(pic);
            }

            // Select random gacha and update arrays
            let index = getRandomInt(remainingGachas.length);
            const newCollectedGacha = remainingGachas[index];
            const name = Object.keys(newCollectedGacha)[0];
            const color = newCollectedGacha[name]['color'];

            setGacha(newCollectedGacha);

            // Create a new array without mutating the original array
            const newRemainingGachas = [
                ...remainingGachas.slice(0, index),
                ...remainingGachas.slice(index + 1)
            ];
            const newCollectedGachas = [...collectedGachas, newCollectedGacha];
        
            // Update state with new arrays
            setCollectedGachas(newCollectedGachas);
            setRemainingGachas(newRemainingGachas);


            switch (color) {
                case 'green':
                    for (const pic of greenAnimation) {
                        await sleep(75);
                        setImage(pic);
                    }
                    break;
                case 'blue':
                    for (const pic of blueAnimation) {
                        await sleep(75);
                        setImage(pic);
                    }
                    break;
                case 'red':
                    for (const pic of redAnimation) {
                        await sleep(75);
                        setImage(pic);
                    }
                    break;
                case 'yellow':
                    for (const pic of yellowAnimation) {
                        await sleep(75);
                        setImage(pic);
                    }
                    break;
                default:
                    break;
            }
            sleep(2500).then(() => { setCardView(true) })
        }
    };

    const ref = useRef(null);
    const [isDraggedOver, setIsDraggedOver] = useState<boolean>(false);

    useEffect(() => {
        const image = ref.current;
        invariant(image);

        return dropTargetForElements({
            element: image,
            onDragEnter: () => setIsDraggedOver(true),
            onDragLeave: () => setIsDraggedOver(false),
            onDrop: () => {
                setHideGachaSet(true);
                setIsDraggedOver(false);
                setImage(gachaponCoinInsert);
                setCoinInserted(true);
            }
        });
    }, []);

    return (
        <div className={cardView ? styles.hidden : styles.center}>
            <Image
                src={sourceImage}
                alt="picture of gachapon machine"
                className={isDraggedOver ? `${styles.gachapon} ${styles.gachaponActive}` : styles.gachapon}
                ref={ref}
                onClick={ handleClick }
                width={533}
                height={742}
            priority
            />
        </div>
    )
}
