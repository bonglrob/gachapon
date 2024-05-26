'use client';

import Image from "next/image";
import gachaponPic from '../../../public/img/gachapon.png';
import gachaponCoinInsert from '../../../public/img/coin-insert-1.png';
import styles from '../page.module.css';

export default function Gachapon() {

    return (
        <div className={styles.center}>
            <Image
                src={gachaponPic}
                alt="picture of gachapon machine"
                className={styles.gachapon}
                // width={533}
                // height={742}
            priority
            />
        </div>
    )
}
