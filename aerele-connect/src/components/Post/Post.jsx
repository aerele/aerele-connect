import { Avatar, IconButton, Card, CardContent, CardMedia, Typography, CardActions } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import { BoltRounded } from "@mui/icons-material";
import { useEffect } from "react";

const Post = ({ imageUrl, profileName, profileImage, caption }) => {
useEffect(() => {
  console.log("1")
})
  return (
    <Card variant="outlined" className="bg-dark m-3 border border-1 border-light-subtle">
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
          <Avatar alt={profileName} src={profileImage} sx={{ width: 40, height: 40, marginRight: '8px' }} />
          <Typography variant="body1" component="span" color="white" fontWeight= 'bold' fontSize='1.2rem' letterSpacing='2px'>
            {profileName}
          </Typography>
        </div>
        <div className="caption-box">
        <Typography variant="body2" color="white" fontWeight= 'thin' fontSize='1.2rem' fontFamily='sans-serif' letterSpacing='0.5px'>
        {caption}
        </Typography>
        </div>
      </CardContent>
      {imageUrl && (
        <CardMedia
          component="img"
          height="400"
          image={imageUrl}
          style={{ objectFit: 'contain' }}
        />
      )}
      <CardActions style={{ justifyContent: 'flex-start' }}>
        <IconButton aria-label="like">
          <FavoriteBorderOutlinedIcon style={{color:'white'}}/>
        </IconButton>
        <IconButton aria-label="comment">
          <CommentOutlinedIcon style={{color:'white'}} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
