'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Link } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import styles from '../page.module.css';
import gachaponPic from '../../../public/img/gachapon.png';


export default function GachaCard({ setHideGachaSet, gacha, cardView, setCardView, setCoinInserted, setImage }) {

  const gachaName = Object.keys(gacha)[0];

  // change label and color based on color property
  let label = '';
  let color = '';
  switch (gacha[gachaName]['color']) {
    case 'green': 
      label = '思い出';
      color = 'gachagreen';
      break;
    case 'blue':
      label = '音楽';
      color = 'gachablue';
      break;
    case 'red':
      label = '食べ物';
      color = 'gachared';
      break;
    default:
      label = 'キャラ';
      color = 'gachayellow';
      break;
  }

  return (
    <Card className={cardView ? '' : styles.hidden} sx={ { width: { mobile: '60vw', tablet: '35vw', laptop: '45vw'}} }>
      <div style={{ position: 'relative' }}>
        <Chip size='small' label={label} color={color} sx={{
          position: 'absolute',
          left: '0.5rem',
          top: '0.5rem',
        }}/> 
        <Button 
          onClick={() => {
            setCardView(false);
            setCoinInserted(false);
            setImage(gachaponPic);
            setHideGachaSet(false);
          }}
          sx={{
            position: 'absolute',
            right: '0.25rem',
            top: '0.25rem',
          }}>
          <CancelIcon color={color} sx={ { background: 'rgba(168, 168, 168, 0.25)', borderRadius: '100%' }}/>
        </Button>
        <CardMedia
          sx={{
            // height: 233,
            // width: 350,
            // maxHeight: { mobile: 233, tablet: 167 },
            // maxWidth: { mobile: 350, tablet: 250 },
            height: {
              mobile: '30vh',
              tablet: '40vh',
              laptop: '55vh',
              desktop: '65vh',
            },
          }}
          image={gacha[gachaName]['image']}
          title={Object.keys(gacha)[0]}
        />
      </div>
      <CardContent>
        <Typography variant="h5" component="div">
          {Object.keys(gacha)[0]}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {gacha[gachaName]['subtitle']}
        </Typography>
        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
          {gacha[gachaName]['description']} <Link href={gacha[gachaName]['link']}>{gacha[gachaName]['extra']}</Link>
        </Typography>
      </CardContent>
    </Card>
  );
}