import { Avatar, IconButton, Card, CardContent, CardMedia, Typography, CardActions } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import { BoltRounded } from "@mui/icons-material";
import { useEffect } from "react";

const Post = ({ id,imageUrl, profileName, profileImage, caption, likeCount, updatePost }) => {
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
        <IconButton aria-label="like" onClick={()=> {updatePost(id,likeCount)}}>
        {likeCount ? <FavoriteIcon style={{color:'red'}}></FavoriteIcon> : <FavoriteBorderOutlinedIcon style={{color:'white'}}/>}
          <Typography variant="body1" color='white' marginLeft='0.2rem'>{likeCount || null}</Typography>
        </IconButton>
        <IconButton aria-label="comment">
          <CommentOutlinedIcon style={{color:'white'}} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
