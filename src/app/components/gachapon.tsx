'use client';

import Image from "next/image";
import gachaponPic from '../../../public/img/gachapon.png';
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import gachaponCoinInsert from '../../../public/img/coin-insert-1.png';
import { useRef, useEffect, useState } from "react";
import invariant from "tiny-invariant";
import styles from '../page.module.css';

export default function Gachapon() {
    const ref = useRef(null);
    const [isDraggedOver, setIsDraggedOver] = useState<boolean>(false);

    useEffect(() => {
        const image = ref.current;
        invariant(image);

        return dropTargetForElements({
            element: image,
            onDragEnter: () => setIsDraggedOver(true),
            onDragLeave: () => setIsDraggedOver(false),
            onDrop: () => setIsDraggedOver(false),
        });
    }, []);

    return (
        <div className={styles.center}>
            <Image
                src={gachaponPic}
                alt="picture of gachapon machine"
                className={isDraggedOver ? `${styles.gachapon} ${styles.gachaponActive}` : styles.gachapon}
                ref={ref}
                // width={533}
                // height={742}
            priority
            />
        </div>
    )
}
