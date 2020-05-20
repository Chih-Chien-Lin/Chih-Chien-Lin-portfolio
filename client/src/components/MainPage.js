
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
import gameFound from "../asset/image/gameFound.png"
import googleBook from "../asset/image/googleBook.png"
import tablify from "../asset/image/tablify.png"
import voca from "../asset/image/Voca.png"
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineGlobal } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io"
import { BsBookHalf } from "react-icons/bs"
import { GiMuscleUp } from "react-icons/gi"
import { GrUserWorker } from "react-icons/gr"
import { FaReact, FaNpm, FaCheckSquare } from "react-icons/fa"
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
          <Link activeClass="active" to="Information" smooth={true} duration={250} style={{ display: "inline-block" }}>
            <ListItem button key={"Information"} >
              <ListItemIcon style={{ marginLeft:"1%"}}>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary={"Information"} />
            </ListItem>
          </Link>
          <br></br>
          <Link activeClass="active" to="Skills" smooth={true} duration={250} style={{ display: "inline-block" }}>
            <ListItem button key={"Skills"} >
              <ListItemIcon>
                <GiMuscleUp />
              </ListItemIcon>
              <ListItemText primary={"Skills"} />
            </ListItem>
          </Link>
          <br></br>
          <Link activeClass="active" to="Education" smooth={true} duration={250} style={{ display: "inline-block" }}>
            <ListItem button key={"Education"} >
              <ListItemIcon>
                <BsBookHalf />
              </ListItemIcon>
              <ListItemText primary={"Education"} />
            </ListItem>
          </Link>
          <br></br>
          <Link activeClass="active" to="Work" smooth={true} duration={250} style={{ display: "inline-block" }}>
            <ListItem button key={"Work"} >
              <ListItemIcon>
                <GrUserWorker />
              </ListItemIcon>
              <ListItemText primary={"Work exp"} />
            </ListItem>
          </Link>
          <br></br>
          <Link activeClass="active" to="Projects" smooth={true} duration={250} style={{ display: "inline-block" }}>
            <ListItem button key={"Work"} >
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary={"Projects"} />
            </ListItem>
          </Link>
          
        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Element name="Information"></Element>
        <div className="row" style={{ marginTop: "8%", marginBottom: "10%" }}>

          <div className="col-md-3">
            <img src={photo} alt="Chih-chien Lin" style={{ height: 300, width: 200, marginLeft: "20%" }}></img>
          </div>
          <div className="col-md-8">
            <Typography paragraph>
              <h2 id="Section1">Chih-Chien Lin</h2>
              <p>Colts Neck, NJ 07722 - (732)8043047 - <a class="text-lowercase" href="mailto:chihchienlin93@gmail.com">chihchienlin93@gmail.com</a></p>
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
        <Element name="Skills"></Element>
        <div style={{ marginTop: "8%", marginBottom: "8%", marginLeft: "5%" }}>
          <h1 style={{ fontWeight: "bold" }}>SKILLS</h1>
          <br></br><br></br>
          <h3 >Programming Languages & Tools</h3>
          <br></br><br></br>
          <i><AiFillHtml5 size={50} /></i>
          <i style={{ marginLeft: "2%" }} titel="MongoDB"><DiMongodb size={50} /></i>
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
        <Element name="Education"></Element>
        <div style={{ marginTop: "8%", marginBottom: "8%", marginLeft: "5%" }}>
          <h1 style={{ fontWeight: "bold" }}>EDUCATION</h1>
          <br></br><br></br>
          <div className="row">
            <h3 style={{ fontWeight: "bold" }} className="col-md-5">RUTGERS CODING BOOTCAMP</h3>
            <h5 className="offset-md-4">Jan 2020 - Apr 2020</h5>
          </div>
          <h5 style={{ color: "gray" }}>CERTIFIED FULL STACK DEVELOPER</h5>
          <br></br><br></br>
          <div className="row">
            <h3 style={{ fontWeight: "bold" }} className="col-md-5">BOSTON UNIVERSITY</h3>
            <h5 className="offset-md-4">Sep 2017 - May 2019</h5>
          </div>
          <h5 style={{ color: "gray" }}>MASTER of SCIENCE in MECHANICAL ENGINEERING - THERMAL FLUID CONCENTRATION </h5>
          <br></br><br></br>
          <div className="row">
            <h3 style={{ fontWeight: "bold" }} className="col-md-7">NATIONAL SUN-YAT-SEN UNIVERSITY</h3>
            <h5 className="offset-md-2">Sep 2013 - MAY 2017</h5>
          </div>
          <h5 style={{ color: "gray" }}>BACHELOR of SCIENCE in PHYSICS </h5>
        </div>
        <hr></hr>
        {/* -----Work history----- */}
        <Element name="Work"></Element>

        <div style={{ marginTop: "8%", marginBottom: "8%", marginLeft: "5%" }}>
          <h1 style={{ fontWeight: "bold" }}>WORK HISTORY</h1>
          <br></br><br></br>
          <div className="row">
            <h3 style={{ fontWeight: "bold" }} className="col-md-5">Transaera</h3>
            <h5 className="offset-md-4">Feb 2019 - Sep 2019</h5>
          </div>
          <h5 style={{ color: "gray" }}>Simulation & Modeling Intern - Global Cooling Prize</h5>
          <div style={{ marginLeft: "1%" }}>
            <h6>- Selected as top 8 of Global Cooling Prize with 140 competitors from 31 countries.</h6>
            <h6>- Performed first principle level calculation of heat transfer for vapor compression(HVAC) system</h6>
            <h6>- Developped thermal model to simulate system operation process and energy consumption using Matlab</h6>
            <h6>- Provided design insight from data analysis</h6>
          </div>
          <br></br><br></br>
        </div>
        <hr></hr>
        {/* -----Projects----- */}
        <Element name="Projects"></Element>

        <div style={{ marginTop: "8%", marginBottom: "8%", marginLeft: "5%" }}>
          <h1 style={{ fontWeight: "bold" }}>PROJECTS</h1>
          <br></br><br></br>
          <div className="row">
            <img src={tablify} className="col-md-4" alt="Jquery" size={50} style={{ marginLeft: "2%" }}></img>
            <div className="offset-md-1 col-md-5">
              <h3 style={{ fontWeight: "bold" }}>Tablify</h3>
              <br></br>
              <h5>Tablify is a simple, streamlined, and user-friendly application that allows restaurant owners and staff to build their custom restaurant layout from scratch, assign customers to tables, and track those customers' meals - individual items and meal stages - from start to finish.</h5>
              <br></br>
              <div>
                <a href="https://github.com/kimiadarden/Tablify"><i><AiFillGithub size={50} /></i></a>
                <a href="https://thawing-reaches-88395.herokuapp.com/" style={{ marginLeft: "2%" }}><i><AiOutlineGlobal size={50} /></i></a>
              </div>
            </div>
          </div>
          <br></br><br></br>
          <hr></hr>

          <div className="row">
            <img src={gameFound} className="col-md-4" alt="gameFound" size={25} style={{ marginLeft: "2%" }}></img>
            <div className="offset-md-1 col-md-5">
              <h3 style={{ fontWeight: "bold" }}>GameFound</h3>
              <br></br>
              <h5>A game-finding application that will provide you with a wish list of pertinent games to play based on provided criteria. Powered by RAWG Video Game Database API.</h5>
              <br></br>
              <div>
                <a href="https://github.com/kevin-salamon/Game-Found"><i><AiFillGithub size={50} /></i></a>
                <a href="https://kevin-salamon.github.io/Game-Found/" style={{ marginLeft: "2%" }}><i><AiOutlineGlobal size={50} /></i></a>
              </div>
            </div>
          </div>
          <br></br><br></br>
          <hr></hr>

          <div className="row">
            <img src={voca} className="col-md-4" alt="Jquery" size={50} style={{ marginLeft: "2%" }}></img>

            <div className="offset-md-1 col-md-5">
              <h3 style={{ fontWeight: "bold" }}>Voca</h3>
              <br></br>
              <h5>Voca allows job seekers to keep track of their job applications, assign follow ups, and organize their job hunt in a single place. Users can search & filter their applications by title, employer, and more. Applications are color coded to indicate followup dates in the near future. We hope that this app will relieve some of the stress of simultaneously managing many disparate job applications.</h5>
              <br></br>
              <div>
                <a href="https://github.com/kevin-salamon/Voca"><i><AiFillGithub size={50} /></i></a>
                <a href="https://devpost.com/software/voca" style={{ marginLeft: "2%" }}><i><AiOutlineGlobal size={50} /></i></a>
              </div>
            </div>
          </div>
          <br></br><br></br>
          <hr></hr>
          {/* <div className="row">
            <img src={googleBook} className="col-md-4" alt="Jquery" size={50} style={{ marginLeft: "2%" }}></img>
            <p className="offset-md-1 col-md-5">123</p>
          </div>
          <br></br><br></br>

          <br></br><br></br> */}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
