import React from 'react'
import './style.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import music from './images/icon-music.svg';
import Typography from '@mui/material/Typography';
import illustration from './images/illustration-hero.svg';
import { Button } from '@mui/material';
const Home = () => {
  return (
    <div className='root' >
      <Card sx={{ maxWidth: 345 }}  >
      <CardMedia
        component="img"
        height="160"
        image={illustration}
        alt="illustration hero"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Order Summary
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You can now listen to millions of songs, audiobooks, and podcasts on any 
          device anywhere you like!
        </Typography>
        <div className='price' >
          <Avatar src={music} />
          <div>
            <Typography style={{ fontWeight: 700 }} >
              Annual Plan
            </Typography>
            <Typography>
              $59.99/year
            </Typography>
          </div>
          <Typography >Change</Typography>
        </div>
        <Button variant="contained">Proceed to Payment</Button>
        <Typography >Cancel Order</Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default Home
