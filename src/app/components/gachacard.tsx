'use client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Hamster from '../../../public/img/hamu2.png'
import { Button, Link } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import styles from '../page.module.css';
import gachaponPic from '../../../public/img/gachapon.png';


export default function GachaCard({ cardView, setCardView, setCoinInserted, setImage }) {

  return (
    <Card className={cardView ? '' : styles.hidden} sx={{ 
      marginLeft: {
        mobile: 1/5,
        tablet: 1/4,
        laptop: 1/3,
        desktop: 1/2,
      },
      marginRight: {
        mobile: 1/5,
        tablet: 1/4,
        laptop: 1/3,
        desktop: 1/2,
      },
    }}
    >
      <div style={{ position: 'relative' }}>
        <Chip label="キャラ" color='secondary' sx={{
          position: 'absolute',
          left: '0.5rem',
          top: '0.5rem',
        }}/> 
        <Button 
          onClick={() => {
            // Update set list
            // Add hamster to gachapon view
            // Return to Gachapon view
            setCardView(false);
            setCoinInserted(false);
            setImage(gachaponPic);
          }}
          sx={{
            position: 'absolute',
            right: '0.25rem',
            top: '0.25rem',
          }}>
          <CancelIcon color='secondary'/>
        </Button>
        <CardMedia
          sx={{
            // height: 233,
            // width: 350,
            // maxHeight: { mobile: 233, tablet: 167 },
            // maxWidth: { mobile: 350, tablet: 250 },
            height: {
              mobile: '10em',
              tablet: '15em',
              laptop: '18em',
              desktop: '20em',
            },
          }}
          image={Hamster.src}
          title="hamster"
        />
      </div>
      <CardContent>
        <Typography variant="h5" component="div">
          {/* ペコペコハム Hungy Hammy */}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          もぐもぐもぐもぐ
        </Typography>
        <Typography variant="body2">
          This hungry hamster is quite the little chomper! Born with a full set of teeth that never stops growing, he wants to have a bite of everything! <Link href="https://www.youtube.com/watch?v=p3G5IXn0K7A">When he's not eating, he sure likes to groove, too!</Link>
        </Typography>
      </CardContent>
    </Card>
  );
}