import React from 'react';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const BannerContainer = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: ' ', 
    color: 'black', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    height: "50vh"
}));

const Banner = () => {
    return (
        <BannerContainer elevation={3} id="dorixon">
        <Typography variant="h4" gutterBottom>
        Dorixonalarda mavjud dori-darmonlar to‘g‘risidagi ma’lumotlarni olishni 
        avtomatlashtirish.
        </Typography>
        <Typography variant="body1">
            Bajardi: Durdona
        </Typography>
        <Button variant="contained">Batafsil</Button>
        </BannerContainer>
    );
};

export default Banner;
