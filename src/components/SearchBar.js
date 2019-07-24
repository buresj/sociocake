import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import logo from '../assets/octocat.png'
import styles from '../General.module.scss'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
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
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 800,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const SearchBar = (props) => {

  const changeVersion = () => {
    window.localStorage.setItem('version', props.version)
  }

  const checkVersion = (version) => {
    return window.localStorage.getItem('version') === version;
  }

  const showNotification = () => {
    if (!window.localStorage.getItem('version') || !checkVersion(props.version)) {
      return (
        <Badge badgeContent={props.version} color="secondary">
          <img border="0" src={logo} alt="octocat" height="38" />
        </Badge>
      )
    }
    return <img border="0" src={logo} alt="octocat" height="38" />
  }

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <a className={styles['title']} style={{ textDecoration: 'none', color: 'white' }} href="/sociocake/">S O C I O C A K E<span role='img' aria-label="CakeIcon"> 🍰</span></a>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={(e) => { props.search(e.target.value) }}
              placeholder={`Hledej závěrečnou práci…`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <a onClick={changeVersion} href="https://github.com/buresj/sociocake">
              <IconButton aria-label="GitHub" color="inherit">
                {showNotification()}
              </IconButton>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </div >

  );
}

export default SearchBar;