import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia';



export default function CofeeCard(props) {
  const {avatarUrl, title, price, imageUrl, description} =props;

  return (
    <Card style={{height: "550px"}}>
      <CardHeader
        avatar={
          <Avatar src={avatarUrl} />
         }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia style={{height: "150px"}}
        image={imageUrl}      
      />
      <CardContent>
         
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Buy Now</Button>
      <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
}
