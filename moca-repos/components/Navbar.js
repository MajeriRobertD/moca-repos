import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Image from 'next/image'
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../store/username/action";
import logo from '../public/logo.png'


const useStyles = makeStyles((theme) => ({
  root: {
    margin:0,
    flexGrow: 1,
  },
  logo: {
    minWidth: '8%',
    minHeight: '8%',
    maxWidth: '8%',
    maxHeight: '8%',
  },
  appBar: {
    backgroundColor: '#1c1024',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: '#a5acaeb5',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar  position='static' className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.logo}
            // edge="start"
            // className={classes.menuButton}
            // color="inherit"
            // aria-label="open drawer"
            
          >
           <Image src={logo} className={classes.logo} alt="logo"/>
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
             Moca Repo 
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={(e) => {e.preventDefault(); 
                 dispatch(setUsername(searchValue)) }}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={e => setSearchValue(e.target.value)}
            />




            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
