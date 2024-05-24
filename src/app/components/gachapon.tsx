'use client';

import Image from "next/image";
import gachaponPic from '../../../public/img/gachapon.png';
import gachaponCoinInsert from '../../../public/img/coin-insert-1.png';
import styles from '../page.module.css';
import { useState } from "react";

export default function Gachapon({ isClicked, setIsClicked }) {
    const [sourceImg, setSourceImg] = useState(gachaponPic);

    function changeImage() {
        if (isClicked) {
            setIsClicked(false);
            setSourceImg(gachaponCoinInsert);
        }
        console.log('ive been clicked on')
    }

    return (
        <div className={styles.center}>
            <Image
                src={sourceImg}
                alt="picture of gachapon machine"
                className={styles.gachapon}
                onClick={changeImage}
                // width={533}
                // height={742}
            priority
            />
        </div>
    )
}
