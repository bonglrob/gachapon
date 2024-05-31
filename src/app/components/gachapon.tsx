'use client';

import Image from "next/image";
import gachaponPic from '../../../public/img/gachapon.png';
import gachaponCoinInsert from '../../../public/img/coin-insert-1.png';
import gachaponCoinInsert2 from '../../../public/img/coin-insert-2.png';
import gachaponCoinInsert3 from '../../../public/img/coin-insert-3.png';
import gachaponCoinInsert4 from '../../../public/img/coin-insert-4.png';
import coinInsertSfx from '../../../public/assets/coin_insert_sfx.mp3';


import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useRef, useEffect, useState } from "react";
import invariant from "tiny-invariant";
import styles from '../page.module.css';

export default function Gachapon({ cardView, setCardView, setCoinInserted }) {
    // const myAudio = new Audio(coinInsertSfx);
    // myAudio.play();
    // <audio controls>
    //     <source src={coinInsertSfx} type="audio/mp3"/>
    // </audio>
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
    const [coinInsertAnimation, setCoinInsertAnimation] = useState(() => [
        gachaponCoinInsert,
        gachaponCoinInsert2,
        gachaponCoinInsert3,
        gachaponCoinInsert4
    ]);

    const handleClick = async () => {
        if (sourceImage === coinInsertAnimation[0]) {
            for (const pic of coinInsertAnimation) {
                await sleep(75);
                console.log(pic);
                setImage(pic);
            }
            sleep(4000).then(() => { setCardView(true) })
        }
    };

    const ref = useRef(null);
    const [isDraggedOver, setIsDraggedOver] = useState<boolean>(false);
    const [sourceImage, setImage] = useState(gachaponPic);

    useEffect(() => {
        const image = ref.current;
        invariant(image);

        return dropTargetForElements({
            element: image,
            onDragEnter: () => setIsDraggedOver(true),
            onDragLeave: () => setIsDraggedOver(false),
            onDrop: () => {
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
