import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Pagination from '@mui/material/Pagination';
import Container from '@mui/material/Container'
import img from './../assets/image/img1.png'


const recipeData = [
    {
        title: 'Shrimp and Chorizo Paella',
        date: 'September 14, 2016',
        image: img,
        description:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
    {
        title: 'Shrimp and Chorizo Paella',
        date: 'September 14, 2016',
        image: img,
        description:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
    {
        title: 'Shrimp and Chorizo Paella',
        date: 'September 14, 2016',
        image: img,
        description:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
    {
        title: 'Shrimp and Chorizo Paella',
        date: 'September 14, 2016',
        image: img,
        description:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
    {
        title: 'Shrimp and Chorizo Paella',
        date: 'September 14, 2016',
        image: img,
        description:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
    {
        title: 'Shrimp and Chorizo Paella',
        date: 'September 14, 2016',
        image: img,
        description:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
    {
        title: 'Shrimp and Chorizo Paella',
        date: 'September 14, 2016',
        image: img,
        description:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
    {
        title: 'Shrimp and Chorizo Paella',
        date: 'September 14, 2016',
        image: img,
        description:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
];

const pageSize = 6; // Number of recipes per page

export default function RecipeReviewCard() {
    const [page, setPage] = useState(1);


    const handlePageChange = (event, value) => {
        setPage(value);
    };

  const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const recipesOnPage = recipeData.slice(startIndex, endIndex);

    return (
    <Container maxWidth="xl">
        <h1>Barcha dorilar</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>


        {recipesOnPage.map((recipe, index) => (
        <Card key={index} sx={{ maxWidth: 'calc(33.333% - 16px)', flexGrow: 1, mb: 2}}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <MoreVertIcon />
                </IconButton>
            }
            // title={recipe.title}
            subheader={recipe.date}
            />
            <CardMedia
            component="img"
            height="194"
            image={recipe.image}
            alt={recipe.title}
            sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="body2" color="text.secondary">
                {recipe.description}
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
            
        </Card>
        ))}
        <Pagination
        count={Math.ceil(recipeData.length / pageSize)}
        page={page}
        onChange={handlePageChange}
        />
    </div>
    </Container>
    );
}


// import React, { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Pagination from '@mui/material/Pagination';
// import Container from '@mui/material/Container';  // O'zingiz qo'shib olish kerak

// import img from './../assets/image/img1.png';

// const recipeData = [
//     // Recipes...
// ];

// const pageSize = 6; // Number of recipes per page

// export default function RecipeReviewCard() {
//     const [page, setPage] = useState(1);

//     const handlePageChange = (event, value) => {
//         setPage(value);
//     };

//     const startIndex = (page - 1) * pageSize;
//     const endIndex = startIndex + pageSize;
//     const recipesOnPage = recipeData.slice(startIndex, endIndex);

//     return (
//         <Container maxWidth="xl">
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
//                 {recipesOnPage.map((recipe, index) => (
//                     <Card key={index} sx={{ maxWidth: 'calc(33.333% - 16px)', flexGrow: 1, mb: 2 }}>
//                         <CardHeader
//                             avatar={
//                                 <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                                     R
//                                 </Avatar>
//                             }
//                             action={
//                                 <IconButton aria-label="settings">
//                                     <MoreVertIcon />
//                                 </IconButton>
//                             }
//                             // title={recipe.title}
//                             subheader={recipe.date}
//                         />
//                         <CardMedia
//                             component="img"
//                             height="194"
//                             image={recipe.image}
//                             alt={recipe.title}
//                             sx={{ objectFit: 'cover' }}
//                         />
//                         <CardContent sx={{ flexGrow: 1 }}>
//                             <Typography variant="body2" color="text.secondary">
//                                 {recipe.description}
//                             </Typography>
//                         </CardContent>
//                         <CardActions disableSpacing>
//                             <IconButton aria-label="add to favorites">
//                                 <FavoriteIcon />
//                             </IconButton>
//                             <IconButton aria-label="share">
//                                 <ShareIcon />
//                             </IconButton>
//                         </CardActions>
//                     </Card>
//                 ))}
//                 <Pagination
//                     count={Math.ceil(recipeData.length / pageSize)}
//                     page={page}
//                     onChange={handlePageChange}
//                 />
//             </div>
//         </Container>
//     );
// }
