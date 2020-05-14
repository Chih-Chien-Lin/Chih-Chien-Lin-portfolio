
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import FolderIcon from '@material-ui/icons/Folder';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import photo from '../asset/image/personal_photo.JPG'
import { AiFillGithub, AiFillLinkedin, AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { FaReact, FaNpm } from 'react-icons/fa'
import { DiMysql, DiMongodb } from 'react-icons/di'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function MainPage() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>

          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

        <List>
          <ListItem button key={"Information"} >
            <ListItemIcon><AssignmentIndIcon /> </ListItemIcon>
            <ListItemText primary={"Information"} />
          </ListItem>
          <ListItem button key={"Project"}>
            <ListItemIcon><FolderIcon /> </ListItemIcon>
            <ListItemText primary={"Project"} />
          </ListItem>
          <ListItem button key={"Contact"}>
            <ListItemIcon><MailIcon /> </ListItemIcon>
            <ListItemText primary={"Contact"} />
          </ListItem>

        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="row"style={{marginTop:"8%", marginBottom:"10%"}}>
          <div className="col-md-3">
            <img src={photo} style={{ height: 300, width: 200, marginLeft:"20%"}}></img>
          </div>
          <div className="col-md-8">
            <Typography paragraph>
            <h2>Chih-Chien Lin</h2>  
            <p>7 Primrose La, Colts Neck, NJ 07722 - (732)8043047 - <a class="text-lowercase" href="mailto:chihchienlin93@gmail.com">chihchienlin93@gmail.com</a></p>
            <p>I am a full Stack Web Developer / Mechanical Engineer, passionate to programming skills and problem-solving. I love to learn and practice new technologies by working with other programmers to build cool projects! </p>
            <br></br>
            <h3>Skills</h3>
            <p>The following contens are my projects and skills </p>
            </Typography>
            <br></br>
            <a href="https://github.com/Chih-Chien-Lin"><i><AiFillGithub size={50} /></i></a> 
            <a href="https://www.linkedin.com/in/chih-chien-justin-lin-691016ba/"><i><AiFillLinkedin size={50} style={{marginLeft:"5%"}} /></i></a>
          </div>
        </div>
        <hr></hr>
        <div style={{marginTop: "10%",marginBottom: "10%"}}>
          <p >Skills</p>
          <br></br><br></br>
          <p>Programming Languages & Tools</p>
          <br></br>

        </div>
      </main>
    </div>
  );
}

export default MainPage;
