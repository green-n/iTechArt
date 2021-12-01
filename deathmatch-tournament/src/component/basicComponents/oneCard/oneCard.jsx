import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './oneCard.module.css'
import Grid from '@mui/material/Grid';
import { typography } from '@mui/system';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function OneCard(props) {
  {console.log("add")}
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader 
      title= {props.name}
      />
         {/* <CardMedia
        component="img"
        height="194"
        maxHeight="300"
        image="https://seeklogo.com/images/C/Counter-Strike-logo-EAC70C9C3A-seeklogo.com.png"
        className={styles.ImageHolder}
      /> */}
        <Avatar
         
        alt="Remy Sharp"
        src="https://seeklogo.com/images/C/Counter-Strike-logo-EAC70C9C3A-seeklogo.com.png"
        sx={{ width: 256, height: 256 }}
        />
     
      <CardContent>
        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6">Rank:  {props.difficulty}</Typography>
          <Typography variant="h6">Map:  {props.map}</Typography>
          <Typography variant="h6">Description:  "{props.desctiptionOfGame}"</Typography>
          <p></p>
          
          
         <Box sx={{ height:50,border: '10px',}}>
          <Grid container  spacing={1} 
           direction="row"
           justifyContent="center"
           alignItems="center">
           <Grid item  xs={3}>
            <Box sx={{ height:30}}> <Typography variant="h4">0/24</Typography> </Box>
           </Grid>
           <Grid item  xs={3}><Button color="secondary" size="small" variant="outlined">edit</Button></Grid>
           <Grid item  xs={3}><Button color="error" size="small" variant="outlined">delete</Button></Grid>
           <Grid item  xs={3}><Button color="secondary" size="small" variant="outlined">join</Button></Grid>


           {/* <Grid item  xs={9}>
             <Button color="secondary" size="small" variant="outlined">edit</Button>
             <Button color="error" size="small" variant="outlined">delete</Button>
             <Button color="secondary" size="small" variant="outlined">join</Button>
           </Grid> */}
           
          </Grid>
          </Box>
        
     
        </CardContent>
      </Collapse>
    </Card>
  );
}