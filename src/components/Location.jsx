import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ToshkentLocationCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Toshkent Location
        </Typography>
        <div style={{ width: '100%', height: '300px' }}>
          <iframe
            title="Toshkent Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.4458532545755!2d69.28399727587626!3d41.34266187130556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b54bc6594a7%3A0x438172b52db56923!2sToshkent%20Axborot%20Texnologiyalari%20universitetining%20talabalar%20yotoqxonasi!5e0!3m2!1sen!2s!4v1702864365086!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default ToshkentLocationCard;
