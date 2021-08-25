import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import Router, { useRouter } from 'next/router'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UsersComponent(user) {
  const classes = useStyles();
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(user.user.login)
    router.push(`/Users/${user.user.login}`)
    
  };
  return (
   
      <ListItem button 
      selected={selectedIndex === 0} 
        onClick={(event) =>{handleListItemClick(event, 0)} }
      key={user.user.id}
      
      >
        <ListItemAvatar>
          <Avatar src={user.user.avatar_url}/>
            
        </ListItemAvatar>
        
        
        <ListItemText primary={user.user.login} secondary="Click for more" onClick={()=>router.push(`/Users/${user.user.login}`)} />

      </ListItem>
    
  );
}