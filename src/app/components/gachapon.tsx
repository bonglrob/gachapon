'use client';

import Image from "next/image";

// coin insert animation
import gachaponCoinInsert from '@/coin-insert-1.png';
import gachaponCoinInsert2 from '@/coin-insert-2.png';
import gachaponCoinInsert3 from '@/coin-insert-3.png';
import gachaponCoinInsert4 from '@/coin-insert-4.png';

// gacha dispense animation
import dispenseGacha1 from '@/gachapon_open1.png'
import dispenseGacha2 from '@/gachapon_open2.png'
import dispenseGacha3 from '@/gachapon_open3.png'
import dispenseGacha4 from '@/gachapon_open4.png'
import dispenseGacha5 from '@/gachapon_open5.png'
import dispenseGacha6 from '@/gachapon_open6.png'

// red capsule dispense animation
import red1 from '@/gachapon_open7_red1.png'
import red2 from '@/gachapon_open7_red2.png';
import red3 from '@/gachapon_open7_red3.png';
import red4 from '@/gachapon_open7_red4.png';
import red5 from '@/gachapon_open7_red5.png';
import red6 from '@/gachapon_open7_red6.png';
import red7 from '@/gachapon_open7_red7.png';

// green capsule dispense animation
import green1 from '@/gachapon_open7_green1.png';
import green2 from '@/gachapon_open7_green2.png';
import green3 from '@/gachapon_open7_green3.png';
import green4 from '@/gachapon_open7_green4.png';
import green5 from '@/gachapon_open7_green5.png';
import green6 from '@/gachapon_open7_green6.png';
import green7 from '@/gachapon_open7_green7.png';

// yellow capsule dispense animation
import yellow1 from '@/gachapon_open7_yellow1.png';
import yellow2 from '@/gachapon_open7_yellow2.png';
import yellow3 from '@/gachapon_open7_yellow3.png';
import yellow4 from '@/gachapon_open7_yellow4.png';
import yellow5 from '@/gachapon_open7_yellow5.png';
import yellow6 from '@/gachapon_open7_yellow6.png';
import yellow7 from '@/gachapon_open7_yellow7.png';

// blue capsule dispense animation
import blue1 from '@/gachapon_open7_blue1.png';
import blue2 from '@/gachapon_open7_blue2.png';
import blue3 from '@/gachapon_open7_blue3.png';
import blue4 from '@/gachapon_open7_blue4.png';
import blue5 from '@/gachapon_open7_blue5.png';
import blue6 from '@/gachapon_open7_blue6.png';
import blue7 from '@/gachapon_open7_blue7.png';

import gachas from '../data/data';

import playAudio from "../utils/playAudio";

import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useRef, useEffect, useState, Dispatch, SetStateAction } from "react";
import { StaticImageData } from "next/image";
import invariant from "tiny-invariant";
import styles from '../page.module.css';

type GachaItem = {
    color: string;
    link: string;
    image: string;
    subtitle: string;
    description: string;
    extra: string;
  };
  
  type GachaponProps = {
    setShowRed: Dispatch<SetStateAction<boolean>>;
    setShowBlue: Dispatch<SetStateAction<boolean>>;
    setShowGreen: Dispatch<SetStateAction<boolean>>;
    setShowYellow: Dispatch<SetStateAction<boolean>>;
    setGacha: Dispatch<SetStateAction<{[key: string]: GachaItem;}>>;
    setHideGachaSet: Dispatch<SetStateAction<boolean>>;
    cardView: boolean;
    setCardView: Dispatch<SetStateAction<boolean>>;
    setCoinInserted: Dispatch<SetStateAction<boolean>>;
    sourceImage: StaticImageData;
    setImage: Dispatch<SetStateAction<StaticImageData>>;
    remainingGachas: {[key: string]: GachaItem;}[];
    setRemainingGachas: Dispatch<SetStateAction<{[key: string]: GachaItem;}[]>>;
    collectedGachas: {}[];
    setCollectedGachas: Dispatch<SetStateAction<{}[]>>;
  };

export default function Gachapon({ setShowRed, setShowBlue, setShowGreen, setShowYellow, setGacha, setHideGachaSet, cardView, setCardView, setCoinInserted, sourceImage, setImage, remainingGachas, collectedGachas, setCollectedGachas, setRemainingGachas }: GachaponProps) {

    function sleep(ms: number) {
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

    function revealSet(color: string) {
        switch (color) {
            case 'red':
                setShowRed(true);
                break;
            case 'blue':
                setShowBlue(true);
                break;
            case 'green':
                setShowGreen(true);
                break;
            default:
                setShowYellow(true);
                break;
        }
    }

    const handleClick = async () => {
        function getRandomInt(max: number) {
            return Math.floor(Math.random() * max);
          }

        if (sourceImage === coinInsertAnimation[0] && remainingGachas.length > 0) {
            playAudio('/assets/lever.wav');
            for (const pic of coinInsertAnimation) {
                await sleep(75);
                setImage(pic);
                await sleep(0);
                setImage(pic);
            }
            for (const pic of dispenseGachaAnimation) {
                await sleep(75);
                setImage(pic);
                await sleep(0);
                setImage(pic);
            }

            // Select random gacha and update arrays
            let index = getRandomInt(remainingGachas.length);
            const newCollectedGacha = remainingGachas[index];
            const name = Object.keys(newCollectedGacha)[0];
            const color = newCollectedGacha[name]['color'];

            revealSet(color);
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
            playAudio('/assets/capsule_drop_sfx.wav')

            switch (color) {
                case 'green':
                    for (const pic of greenAnimation) {
                        await sleep(75);
                        setImage(pic);
                        await sleep(0);
                        setImage(pic);
                    }
                    break;
                    case 'blue':
                        for (const pic of blueAnimation) {
                            await sleep(75);
                            setImage(pic);
                            await sleep(0);
                            setImage(pic);
                    }
                    break;
                case 'red':
                    for (const pic of redAnimation) {
                        await sleep(75);
                        setImage(pic);
                        await sleep(0);
                        setImage(pic);
                    }
                    break;
                case 'yellow':
                    for (const pic of yellowAnimation) {
                        await sleep(75);
                        setImage(pic);
                        await sleep(0);
                        setImage(pic);
                    }
                    break;
                default:
                    break;
            }
            sleep(1500).then(() => { setCardView(true); playAudio('/assets/gachaRevealSfx.wav') })
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
                playAudio('/assets/coin_insert_sfx.mp3');
                setHideGachaSet(true);
                setIsDraggedOver(false);
                setImage(gachaponCoinInsert);
                setCoinInserted(true);
            }
        });
    }, []);

    return (
        <div className={cardView ? styles.hidden : styles.center} style={ sourceImage === coinInsertAnimation[0] ? { cursor: 'pointer' } : { cursor: 'default' }}>
            <Image
                src={sourceImage}
                alt="picture of gachapon machine"
                className={isDraggedOver ? `${styles.gachapon} ${styles.gachaponActive}` : styles.gachapon}
                ref={ref}
                onClick={ handleClick }
                width={323} //  323 533
                height={498} // 498 742
                layout="intrinsic"
            priority
            />
        </div>
    )
}
