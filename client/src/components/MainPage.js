
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import FolderIcon from "@material-ui/icons/Folder";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import photo from "../asset/image/personal_photo.JPG"
import Jquery from "../asset/image/jQuery.png"
import { AiFillGithub, AiFillLinkedin, AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io"
import { FaReact, FaNpm, FaNode, FaCheckSquare } from "react-icons/fa"
import { DiMysql, DiMongodb } from "react-icons/di"
import Scroll from "react-scroll"
let Link = Scroll.Link
let Element = Scroll.Element

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
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
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

        <List>
          <Link activeClass="active" to="firstInsideContainer" smooth={true} duration={250} style={{ display: "inline-block" }}>

            <ListItem button key={"Information"} >
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary={"Information"} />
            </ListItem>
          </Link>
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
        <Element name="firstInsideContainer"></Element>
        <div className="row" style={{ marginTop: "8%", marginBottom: "10%" }}>

          <div className="col-md-3">
            <img src={photo} alt="Chih-chien Lin" style={{ height: 300, width: 200, marginLeft: "20%" }}></img>
          </div>
          <div className="col-md-8">
            <Typography paragraph>
              <h2 id="Section1">Chih-Chien Lin</h2>
              <p>7 Primrose La, Colts Neck, NJ 07722 - (732)8043047 - <a class="text-lowercase" href="mailto:chihchienlin93@gmail.com">chihchienlin93@gmail.com</a></p>
              <p>I am a full Stack Web Developer / Mechanical Engineer, passionate to programming skills and problem-solving. I love to learn and practice new technologies by working with other programmers to build cool projects! </p>
              <br></br>

            </Typography>
            <br></br>
            <a href="https://github.com/Chih-Chien-Lin"><i><AiFillGithub size={50} /></i></a>
            <a href="https://www.linkedin.com/in/chih-chien-justin-lin-691016ba/"><i><AiFillLinkedin size={50} style={{ marginLeft: "5%" }} /></i></a>
          </div>
        </div>

        <hr></hr>
        {/* -----SKills----- */}
        <div style={{ marginTop: "8%", marginBottom: "8%", marginLeft: "5%" }}>
          <h1 style={{ fontWeight: "bold" }}>SKILLS</h1>
          <br></br><br></br>
          <h3 >Programming Languages & Tools</h3>
          <br></br><br></br>
          <i><AiFillHtml5 size={50} /></i>
          <i style={{ marginLeft: "2%" }}><DiMongodb size={50} /></i>
          <i style={{ marginLeft: "2%" }}><FaReact size={50} /></i>
          <i style={{ marginLeft: "2%" }}><IoLogoCss3 size={50} /></i>
          <i style={{ marginLeft: "2%" }}><IoLogoJavascript size={50} /></i>
          <i style={{ marginLeft: "2%" }}><IoLogoNodejs size={50} /></i>
          <i style={{ marginLeft: "2%" }}><FaNpm size={50} /></i>
          <i style={{ marginLeft: "2%" }}><DiMysql size={50} /></i>
          <img src={Jquery} alt="Jquery" size={50} style={{ marginLeft: "2%" }}></img>

          <br></br><br></br><br></br>
          <h3>Work Flow</h3>
          <div className="row" style={{ marginTop: "2%" }}>
            <i className="col-md-1"><FaCheckSquare size={30} style={{ marginLeft: "50%" }} /></i>
            <p className="col-md-9" style={{ marginTop: "5px" }}>Cross Functional Team</p>
          </div>
          <div className="row" style={{ marginTop: "1%" }}>
            <i className="col-md-1"><FaCheckSquare size={30} style={{ marginLeft: "50%" }} /></i>
            <p className="col-md-9" style={{ marginTop: "5px" }}>MERN Stack Developer</p>
          </div>
          <div className="row" style={{ marginTop: "1%" }}>
            <i className="col-md-1"><FaCheckSquare size={30} style={{ marginLeft: "50%" }} /></i>
            <p className="col-md-9" style={{ marginTop: "5px" }}>PWA</p>
          </div>

        </div>
        <hr></hr>
        {/* -----Education----- */}
        <div style={{ marginTop: "8%", marginBottom: "8%", marginLeft: "5%" }}>
          <h1 style={{ fontWeight: "bold" }}>EDUCATION</h1>
          <br></br><br></br>
          <div className="row">
            <h3 style={{ fontWeight: "bold" }} className="col-md-5">RUTGERS CODING BOOTCAMP</h3>
            <h5 className="offset-md-4">Jan 2020 - Apr 2020</h5>
          </div>
          <h5 style={{ color:"gray" }}>CERTIFIED FULL STACK DEVELOPER</h5>
          <br></br><br></br>
          <div className="row">
            <h3 style={{ fontWeight: "bold" }} className="col-md-5">BOSTON UNIVERSITY</h3>
            <h5 className="offset-md-4">Sep 2017 - May 2019</h5>
          </div>
          <h5 style={{ color : "gray" }}>MASTER of SCIENCE in MECHANICAL ENGINEERING - THERMAL FLUID CONCENTRATION </h5>
          <br></br><br></br>
          <div className="row">
            <h3 style={{ fontWeight: "bold" }} className="col-md-7">NATIONAL SUN-YAT-SEN UNIVERSITY</h3>
            <h5 className="offset-md-2">Sep 2013 - MAY 2017</h5>
          </div>
          <h5 style={{ color : "gray" }}>BACHELOR of SCIENCE in PHYSICS </h5>
        </div>
        <hr></hr>
        {/* -----Work history----- */}
        <div style={{ marginTop: "8%", marginBottom: "8%", marginLeft: "5%" }}>
          <h1 style={{ fontWeight: "bold" }}>WORK HISTORY</h1>
          <br></br><br></br>
          <div className="row">
            <h3 style={{ fontWeight: "bold" }} className="col-md-5">RUTGERS CODING BOOTCAMP</h3>
            <h5 className="offset-md-4">Jan 2020 - Apr 2020</h5>
          </div>
          <h5 style={{ color:"gray" }}>CERTIFIED FULL STACK DEVELOPER</h5>
          <br></br><br></br>
          <div className="row">
            <h3 style={{ fontWeight: "bold" }} className="col-md-5">BOSTON UNIVERSITY</h3>
            <h5 className="offset-md-4">Sep 2017 - May 2019</h5>
          </div>
          <h5 style={{ color : "gray" }}>MASTER of SCIENCE in MECHANICAL ENGINEERING - THERMAL FLUID CONCENTRATION </h5>
          <br></br><br></br>
          <div className="row">
            <h3 style={{ fontWeight: "bold" }} className="col-md-7">NATIONAL SUN-YAT-SEN UNIVERSITY</h3>
            <h5 className="offset-md-2">Sep 2013 - MAY 2017</h5>
          </div>
          <h5 style={{ color : "gray" }}>BACHELOR of SCIENCE in PHYSICS </h5>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
