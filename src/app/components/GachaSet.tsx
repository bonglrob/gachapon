import styles from '../../app/page.module.css';
import Stack from "@mui/material/Stack";
import { Container, Typography, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import ham from '../../../public/img/hamu2.png'

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
    justifyContent: "space-between",
  }));

export default function GachaSet({ setGacha, hideGachaSet, collectedGachas, cardView, setCardView }) {

    function viewCard() {
        // populate card()
        setCardView(true);
    }

    // const collectedGachaNames = Object.values(collectedGachas);

    // checks for collectedGachas array and "unlocks" viewable gacha pages
    function isObtained(gachaName: string) {
        return collectedGachas.find(gacha => gacha.hasOwnProperty(gachaName));
    }

    return (
        <Container sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            width: '100%',
            height: '100%',
        }}>
            <div className={ hideGachaSet || cardView ? styles.hidden : `${styles.gachaSetPreview} ${styles.characterColor}` }>
                <Typography>キャラセット Yellow</Typography>
                <Stack spacing={{ mobile: 1, tablet: 2 }} direction={{mobile: "column", tablet: "row"}}>
                    <Item>
                        <Image 
                            src={ isObtained('ペコペコハム Hungy Hammy') ? '/img/hamu2.png' : '/img/capsule_close4_yellow.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('ペコペコハム Hungy Hammy') ? viewCard : null }
                        />
                        <Typography>{ isObtained('ペコペコハム Hungy Hammy') ? 'ペコペコハム Hungy Hammy' : '???' }</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ isObtained('爆睡した馬　Napping Pony') ? '/img/uma.jpg' : '/img/capsule_close4_yellow.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('爆睡した馬　Napping Pony') ? viewCard : null }
                        />
                        <Typography>{ isObtained('爆睡した馬　Napping Pony') ? '爆睡した馬　Napping Pony' : '???' }</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ isObtained('コックカービィChef Kirby') ? '/img/cook.png' : '/img/capsule_close4_yellow.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('コックカービィChef Kirby') ? viewCard : null }
                        />
                        <Typography>{ isObtained('コックカービィChef Kirby') ? 'コックカービィChef Kirby' : '???' }</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src='/img/kirakira4.png'
                            width={100}
                            height={100}
                        />
                        <Typography>Complete the set to Unlock!</Typography>
                    </Item>
                </Stack>
            </div>
            <div className={ hideGachaSet || cardView ? styles.hidden : `${styles.gachaSetPreview} ${styles.characterColor}` }>
                <Typography>キャラセット Yellow</Typography>
                <Stack spacing={{ mobile: 1, tablet: 2 }} direction={{mobile: "column", tablet: "row"}}>
                    <Item>
                        <Image 
                            src={ isObtained('ペコペコハム Hungy Hammy') ? '/img/hamu2.png' : '/img/capsule_close4_yellow.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('ペコペコハム Hungy Hammy') ? viewCard : null }
                        />
                        <Typography>{ isObtained('ペコペコハム Hungy Hammy') ? 'ペコペコハム Hungy Hammy' : '???' }</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ isObtained('爆睡した馬　Napping Pony') ? '/img/uma.jpg' : '/img/capsule_close4_yellow.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('爆睡した馬　Napping Pony') ? viewCard : null }
                        />
                        <Typography>{ isObtained('爆睡した馬　Napping Pony') ? '爆睡した馬　Napping Pony' : '???' }</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>Hey, Soul Sister'</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>Unlock</Typography>
                    </Item>
                </Stack>
            </div>
            <div className={ hideGachaSet || cardView ? styles.hidden : `${styles.gachaSetPreview} ${styles.characterColor}` }>
                <Typography>キャラセット Yellow</Typography>
                <Stack spacing={{ mobile: 1, tablet: 2 }} direction={{mobile: "column", tablet: "row"}}>
                    <Item>
                        <Image 
                            src={ isObtained('ペコペコハム Hungy Hammy') ? '/img/hamu2.png' : '/img/capsule_close4_yellow.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('ペコペコハム Hungy Hammy') ? viewCard : null }
                        />
                        <Typography>{ isObtained('ペコペコハム Hungy Hammy') ? 'ペコペコハム Hungy Hammy' : '???' }</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>爆睡した馬　Napping Pony</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>Hey, Soul Sister'</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>Unlock</Typography>
                    </Item>
                </Stack>
            </div>
            <div className={ hideGachaSet || cardView ? styles.hidden : `${styles.gachaSetPreview} ${styles.characterColor}` }>
                <Typography>キャラセット Yellow</Typography>
                <Stack spacing={{ mobile: 1, tablet: 2 }} direction={{mobile: "column", tablet: "row"}}>
                    <Item>
                        <Image 
                            src={ isObtained('ペコペコハム Hungy Hammy') ? '/img/hamu2.png' : '/img/capsule_close4_yellow.png'}
                            width={100}
                            height={100}
                            onClick={ isObtained('ペコペコハム Hungy Hammy') ? viewCard : null }
                        />
                        <Typography>{ isObtained('ペコペコハム Hungy Hammy') ? 'ペコペコハム Hungy Hammy' : '???' }</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>爆睡した馬　Napping Pony</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>Hey, Soul Sister'</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>Unlock</Typography>
                    </Item>
                </Stack>
            </div>
      </Container>
    )
};