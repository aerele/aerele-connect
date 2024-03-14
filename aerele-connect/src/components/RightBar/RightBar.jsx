import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';

export const RightBar = () => {
 // Dummy data for top and recent posts
 const topPosts = useState(['Top Post 1', 'Top Post 2', 'Top Post 3']);
 const recentPosts = useState(['Recent Post 1', 'Recent Post 2', 'Recent Post 3']);
return (
    <>
        <div className="sidebar">
      <Typography variant="h6">Top Posts</Typography>
      <List>
        {topPosts.map((post, index) => (
          <ListItem key={index} color='white'>
            <ListItemText color='white' primary={post} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" color='white'>Recent Posts</Typography>
      <List>
        {recentPosts.map((post, index) => (
          <ListItem color='white' key={index}>
            <ListItemText color='white' primary={post} />
          </ListItem>
        ))}
      </List>
    </div>
    </>
)
}