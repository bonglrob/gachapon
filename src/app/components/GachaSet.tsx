import styles from '../../app/page.module.css';
import Stack from "@mui/material/Stack";
import { Container, Typography, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Button from '@mui/material/Button';
import { useState } from 'react';
import playAudio from '../utils/playAudio';
import Link from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
    justifyContent: "space-between",
  }));

export default function GachaSet({ showBlue, showGreen, showRed, showYellow, setGacha, hideGachaSet, collectedGachas, cardView, setCardView }) {
    const [unlockedRewardChar, setUnlockRewardChar] = useState(false);
    const [unlockedRewardMusic, setUnlockRewardMusic] = useState(false);
    const [unlockedRewardFood, setUnlockRewardFood] = useState(false);
    const [unlockedRewardMemory, setUnlockRewardMemory] = useState(false);

    function viewCard(event) {
        const clickedElement = event.currentTarget;
        const gachaName = clickedElement.textContent;
        const index = collectedGachas.findIndex(gacha => gacha.hasOwnProperty(gachaName))
        setGacha(collectedGachas[index])
        setCardView(true);
    }

    // const collectedGachaNames = Object.values(collectedGachas);

    // checks for collectedGachas array and "unlocks" viewable gacha pages
    function isObtained(gachaName: string) {
        return collectedGachas.find(gacha => gacha.hasOwnProperty(gachaName));
    }

    function revealChar() {
        setUnlockRewardChar(true);
        playAudio('/assets/unlocked_sfx.mp3');
    }
    function revealMusic() {
        setUnlockRewardMusic(true);
        playAudio('/assets/unlocked_sfx.mp3');
    }
    function revealFood() {
        setUnlockRewardFood(true);
        playAudio('/assets/unlocked_sfx.mp3');
    }
    function revealMemory() {
        if (unlockedRewardChar && unlockedRewardMusic && unlockedRewardFood) {
            setUnlockRewardMemory(true);
            playAudio('/assets/unlocked_sfx.mp3');
        }
    }

    return (
        <Container sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            width: '100%',
            height: '100%',
        }}>
            <div className={ (!showYellow) || hideGachaSet || cardView ? styles.hidden : `${styles.gachaSetPreview} ${styles.characterColor}` }>
                <Typography variant='h5' sx={ { paddingBottom: '1rem' }}>キャラセット</Typography>
                <Stack spacing={{ mobile: 1, tablet: 2 }} direction={{mobile: "column", tablet: "row"}}>
                    <Item onClick={ isObtained('ペコペコハム Hungy Hammy') ? viewCard : null } sx={ isObtained('ペコペコハム Hungy Hammy') ? { cursor: 'pointer' } : '' }>
                        <Image 
                            src={ isObtained('ペコペコハム Hungy Hammy') ? '/img/hamu3.png' : '/img/capsule_close4_yellow.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('ペコペコハム Hungy Hammy') ? viewCard : null }
                        />
                        <Typography>{ isObtained('ペコペコハム Hungy Hammy') ? 'ペコペコハム Hungy Hammy' : '???' }</Typography>
                    </Item>
                    <Item onClick={ isObtained('爆睡した馬　Napping Pony') ? viewCard : null } sx={ isObtained('爆睡した馬　Napping Pony') ? { cursor: 'pointer' } : '' }>
                        <Image 
                            src={ isObtained('爆睡した馬　Napping Pony') ? '/img/uma.jpg' : '/img/capsule_close4_yellow.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('爆睡した馬　Napping Pony') ? viewCard : null }
                        />
                        <Typography>{ isObtained('爆睡した馬　Napping Pony') ? '爆睡した馬　Napping Pony' : '???' }</Typography>
                    </Item>
                    <Item onClick={ isObtained('コックカービィChef Kirby') ? viewCard : null } sx={ isObtained('ペコペコハム Hungy Hammy') ? { cursor: 'pointer' } : '' }>
                        <Image 
                            src={ isObtained('コックカービィChef Kirby') ? '/img/cook.png' : '/img/capsule_close4_yellow.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('コックカービィChef Kirby') ? viewCard : null }
                        />
                        <Typography>{ isObtained('コックカービィChef Kirby') ? 'コックカービィChef Kirby' : '???' }</Typography>
                    </Item>
                    <Item sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Image 
                            src={ unlockedRewardChar ? '/img/hamster.png' : '/img/kirakira4.png'}
                            width={100}
                            height={100}
                        />
                        <Button onClick={ () => { 
                            if (isObtained('コックカービィChef Kirby') && isObtained('爆睡した馬　Napping Pony') && isObtained('ペコペコハム Hungy Hammy')) {
                                revealChar();
                            } else {
                                playAudio('/assets/locked_sfx.mp3'); 
                            }}
                        }> 
                            { unlockedRewardChar ? 'GOT HAMSTER LINE STICKER!' : 'Complete this set to Unlock!'}
                        </Button>
                    </Item>
                </Stack>
            </div>
            <div className={ (!showBlue) || hideGachaSet || cardView ? styles.hidden : `${styles.gachaSetPreview} ${styles.musicColor}` }>
                <Typography variant='h5' sx={ { paddingBottom: '1rem' }}>音楽セット</Typography>
                <Stack spacing={{ mobile: 1, tablet: 2 }} direction={{mobile: "column", tablet: "row"}}>
                    <Item onClick={ isObtained('Hey, Soul Sister') ? viewCard : null } sx={ isObtained('Hey, Soul Sister') ? { cursor: 'pointer' } : '' }>
                        <Image 
                            src={ isObtained('Hey, Soul Sister') ? '/img/soul_sister_artwork.jpeg' : '/img/capsule_close4_blue.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('Hey, Soul Sister') ? viewCard : null }
                        />
                        <Typography>{ isObtained('Hey, Soul Sister') ? 'Hey, Soul Sister' : '???' }</Typography>
                    </Item>
                    <Item onClick={ isObtained('Night Dancer') ? viewCard : null } sx={ isObtained('Night Dancer') ? { cursor: 'pointer' } : '' }>
                        <Image 
                            src={ isObtained('Night Dancer') ? '/img/imase_album_artwork.jpg' : '/img/capsule_close4_blue.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('Night Dancer') ? viewCard : null }
                        />
                        <Typography>{ isObtained('Night Dancer') ? 'Night Dancer' : '???' }</Typography>
                    </Item>
                    <Item onClick={ isObtained('Seven') ? viewCard : null } sx={ isObtained('Seven') ? { cursor: 'pointer' } : '' }>
                        <Image 
                            src={ isObtained('Seven') ? '/img/seven.jpeg' : '/img/capsule_close4_blue.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('Seven') ? viewCard : null }
                        />
                        <Typography>{ isObtained('Seven') ? 'Seven' : '???' }</Typography>
                    </Item>
                    <Item sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Image 
                            src={ unlockedRewardMusic ? '/img/spotify.svg' : '/img/kirakira4.png'}
                            width={100}
                            height={100}
                        />
                        <Button onClick={ () => { 
                            if (isObtained('Seven') && isObtained('Hey, Soul Sister') && isObtained('Night Dancer')) {
                                revealMusic();
                            } else {
                                playAudio('/assets/locked_sfx.mp3'); 
                            }}
                        }> 
                            { unlockedRewardMusic ? 'Got 夜の雰囲気 Playlist!' : 'Complete this set to Unlock!'}
                        </Button>
                    </Item>
                </Stack>
            </div>
            <div className={ (!showGreen) || hideGachaSet || cardView ? styles.hidden : `${styles.gachaSetPreview} ${styles.memoryColor}` }>
                <Typography variant='h5' sx={ { paddingBottom: '1rem' }}>思い出セット</Typography>
                <Stack spacing={{ mobile: 1, tablet: 2 }} direction={{mobile: "column", tablet: "row"}}>
                    <Item onClick={ isObtained('Sweaty Sheepies') ? viewCard : null } sx={ isObtained('Sweaty Sheepies') ? { cursor: 'pointer' } : '' }>
                        <Image 
                            src={ isObtained('Sweaty Sheepies') ? '/img/sheep.jpg' : '/img/capsule_close4_green.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('Sweaty Sheepies') ? viewCard : null }
                        />
                        <Typography>{ isObtained('Sweaty Sheepies') ? 'Sweaty Sheepies' : '???' }</Typography>
                    </Item>
                    <Item onClick={ isObtained('Bingo Bongo') ? viewCard : null } sx={ isObtained('Bingo Bongo') ? { cursor: 'pointer' } : '' }>
                        <Image 
                            src={ isObtained('Bingo Bongo') ? '/img/bongo.jpg' : '/img/capsule_close4_green.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('Bingo Bongo') ? viewCard : null }
                        />
                        <Typography>{ isObtained('Bingo Bongo') ? 'Bingo Bongo' : '???' }</Typography>
                    </Item>
                    <Item onClick={ isObtained('Next Chapter') ? viewCard : null } sx={ isObtained('Next Chapter') ? { cursor: 'pointer' } : '' }>
                        <Image 
                            src={ isObtained('Next Chapter') ? '/img/museum.jpg' : '/img/capsule_close4_green.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('Next Chapter') ? viewCard : null }
                        />
                        <Typography>{ isObtained('Next Chapter') ? 'Next Chapter' : '???' }</Typography>
                    </Item>
                    <Item sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        { unlockedRewardMemory ? <Link href='#'></Link> : ''}
                        <Image 
                            src={ unlockedRewardMemory ? '/img/heartmail.png' : '/img/kirakira4.png'}
                            width={100}
                            height={100}
                        />
                        <Button onClick={ () => { 
                            if (isObtained('Sweaty Sheepies') && isObtained('Bingo Bongo') && isObtained('Next Chapter')) {
                                revealMemory();
                            } else {
                                playAudio('/assets/locked_sfx.mp3'); 
                            }}
                        }> 
                            { unlockedRewardMemory ? 'You\'ve Unlocked Anniversary Letter' : 'Collect All Gachas To Unlock!'}
                        </Button>
                    </Item>
                </Stack>
            </div>
            <div className={ (!showRed) || hideGachaSet || cardView ? styles.hidden : `${styles.gachaSetPreview} ${styles.foodColor}` }>
                <Typography variant='h5' sx={ { paddingBottom: '1rem' }}>食べ物セット</Typography>
                <Stack spacing={{ mobile: 1, tablet: 2 }} direction={{mobile: "column", tablet: "row"}}>
                    <Item onClick={ isObtained('天使の涙わらび餅 Angel\'s Tear Mochi') ? viewCard : null } sx={ isObtained('天使の涙わらび餅 Angel\'s Tear Mochi') ? { cursor: 'pointer' } : '' }>
                        <Image 
                            src={ isObtained('天使の涙わらび餅 Angel\'s Tear Mochi') ? '/img/mochi.jpeg' : '/img/capsule_close4_red.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('天使の涙わらび餅 Angel\'s Tear Mochi') ? viewCard : null }
                        />
                        <Typography>{ isObtained('天使の涙わらび餅 Angel\'s Tear Mochi') ? '天使の涙わらび餅 Angel\'s Tear Mochi' : '???' }</Typography>
                    </Item>
                    <Item onClick={ isObtained('お好み焼き　Okonomiyaki') ? viewCard : null } sx={ isObtained('お好み焼き　Okonomiyaki') ? { cursor: 'pointer' } : '' }>
                        <Image 
                            src={ isObtained('お好み焼き　Okonomiyaki') ? '/img/okonomiyaki.jpg' : '/img/capsule_close4_red.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('お好み焼き　Okonomiyaki') ? viewCard : null }
                        />
                        <Typography>{ isObtained('お好み焼き　Okonomiyaki') ? 'お好み焼き　Okonomiyaki' : '???' }</Typography>
                    </Item>
                    <Item onClick={ isObtained('スア・ガイ　Lao Chicken Noodle Soup') ? viewCard : null } sx={ isObtained('スア・ガイ　Lao Chicken Noodle Soup') ? { cursor: 'pointer' } : '' }>
                        <Image 
                            src={ isObtained('スア・ガイ　Lao Chicken Noodle Soup') ? '/img/sua_gai.jpg' : '/img/capsule_close4_red.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('スア・ガイ　Lao Chicken Noodle Soup') ? viewCard : null }
                        />
                        <Typography>{ isObtained('スア・ガイ　Lao Chicken Noodle Soup') ? 'スア・ガイ　Lao Chicken Noodle Soup' : '???' }</Typography>
                    </Item>
                    <Item sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Image 
                            src={ unlockedRewardFood ? '/img/present.png' : '/img/kirakira4.png'}
                            width={100}
                            height={100}
                        />
                        <Button onClick={ () => { 
                            if (isObtained('天使の涙わらび餅 Angel\'s Tear Mochi') && isObtained('お好み焼き　Okonomiyaki') && isObtained('スア・ガイ　Lao Chicken Noodle Soup')) {
                                revealFood();
                            } else {
                                playAudio('/assets/locked_sfx.mp3'); 
                            }}
                        }> 
                            { unlockedRewardFood ? 'GOT SWEETS DELIVERY' : 'Complete this set to Unlock!'}
                        </Button>
                    </Item>
                </Stack>
            </div>
      </Container>
    )
};