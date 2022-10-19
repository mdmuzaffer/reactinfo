import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

let cardData =[
    {
        title:"Shrimp and Chorizo Paella",
        avatar:`M`,
        subheader : "September 14, 2016",
        img: "./img/paella.jpg",
        cardcontent:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        paragraph:"1 Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."

    },
    {   title: "Shrimp and Chorizo  2",
        avatar:`R`,
        subheader: "September 24, 2016",
        img: "./img/contemplative-reptile.jpg",
        cardcontent: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        paragraph: "2 Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."

    },
    {   title: "Shrimp and Chorizo  2",
        avatar:`Y`,
        subheader: "September 24, 2016",
        img: "./img/paella.jpg",
        cardcontent: `This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like`,
        paragraph: "2 Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."

    }
];

function Cart(){

    const [expanded0, setExpanded0] = React.useState(false);
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);

    const handleExpandClick0 = () => {
      setExpanded0(!expanded0);
    };
    
    const handleExpandClick1 = () => {
        setExpanded1(!expanded1);
    };

    const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
    };

    return(
        <>
        <h1 style={{textAlign: "center"}}>Cart List</h1>

        <Grid container spacing={2}>

        { cardData.map((card, index)=> {

            let newfun= `expanded${index}`;
            return (
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">{card.avatar}</Avatar>}
                        action={<IconButton aria-label="settings"> <MoreVertIcon /></IconButton>}
                        title={card.title}
                        subheader={card.subheader}
                    />
                    <CardMedia
                        component="img" height="194" image={card.img} alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        {card.cardcontent}
                        </Typography>
                    </CardContent>

                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                        <ExpandMore
                        expand={newfun}
                        onClick={handleExpandClick0}
                        aria-expanded={newfun}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded0} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>
                        {card.paragraph}
                        </Typography>
               
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid> 
        );})}

        </Grid>
    </>
    );
}
export default Cart;