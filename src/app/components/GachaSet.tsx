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

export default function GachaSet() {
    return (
        <Container sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            width: '100%',
            height: '100%',
        }}>
            <div className={ `${styles.gachaSetPreview} ${styles.characterColor}` }>
                <Typography>キャラセット Yellow</Typography>
                <Stack spacing={{ mobile: 1, tablet: 2 }} direction={{mobile: "column", tablet: "row"}}>
                    <Item>
                        <Image 
                            src='/img/hamu2.png'
                            width={100}
                            height={100}
                        />
                        <Typography>ペコペコハム Hungy Hammy</Typography>
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
            <div className={ styles.gachaSetPreview }>
                <Typography>キャラセット</Typography>
                <Stack spacing={{ mobile: 1, tablet: 2 }} direction={{mobile: "column", tablet: "row"}}>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>Hamster</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>2</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>3</Typography>
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
            <div className={ styles.gachaSetPreview }>
                <Typography>キャラセット</Typography>
                <Stack spacing={{ mobile: 1, tablet: 2 }} direction={{mobile: "column", tablet: "row"}}>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>Hamster</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>2</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>3</Typography>
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
            <div className={ styles.gachaSetPreview }>
                <Typography>キャラセット</Typography>
                <Stack spacing={{ mobile: 1, tablet: 2 }} direction={{mobile: "column", tablet: "row"}}>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>Hamster</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>2</Typography>
                    </Item>
                    <Item>
                        <Image 
                            src={ham}
                            width={100}
                            height={100}
                        />
                        <Typography>3</Typography>
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