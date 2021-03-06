
import React, { useEffect } from "react";
import clsx from "clsx";
// Aos is the animated css
import Aos from "aos";
import "aos/dist/aos.css"
// progressBar for project section
import { ProgressBar } from "react-bootstrap";
// Tooltip for skills section
import Tooltip from '@material-ui/core/Tooltip';
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
import BuildIcon from '@material-ui/icons/Build';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WidgetsIcon from '@material-ui/icons/Widgets';
import WorkIcon from '@material-ui/icons/Work';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import photo from "../asset/image/personal_photo.JPG"
import Jquery from "../asset/image/jQuery.png"
import gameFound from "../asset/image/gameFound.png"
import googleBook from "../asset/image/googleBook.png"
import tablify from "../asset/image/tablify.png"
import voca from "../asset/image/Voca.png"
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineGlobal } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io"
import { FaReact, FaNpm, FaCheckSquare, FaSalesforce } from "react-icons/fa"
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
  useEffect(() => {
    Aos.init({duration:1500});
  },[])

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
              <ListItemIcon style={{ marginLeft: "1%" }}>
                <AssignmentIndIcon />
              </ListItemIcon>
              <ListItemText primary={"Information"} />
            </ListItem>
          </Link>
          <br></br>
          <Link activeClass="active" to="Skills" smooth={true} duration={250} style={{ display: "inline-block" }}>
            <ListItem button key={"Skills"} >
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary={"Skills"} />
            </ListItem>
          </Link>
          <br></br>
          <Link activeClass="active" to="Education" smooth={true} duration={250} style={{ display: "inline-block" }}>
            <ListItem button key={"Education"} >
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary={"Education"} />
            </ListItem>
          </Link>
          <br></br>
          <Link activeClass="active" to="Work" smooth={true} duration={250} style={{ display: "inline-block" }}>
            <ListItem button key={"Work"} >
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary={"Work exp"} />
            </ListItem>
          </Link>
          <br></br>
          <Link activeClass="active" to="Projects" smooth={true} duration={250} style={{ display: "inline-block" }}>
            <ListItem button key={"Work"} >
              <ListItemIcon>
                <WidgetsIcon />
              </ListItemIcon>
              <ListItemText primary={"Projects"} />
            </ListItem>
          </Link>

        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Element name="Information"></Element>
        <div style={{ marginTop: "4%", marginBottom: "10%" }}>

          <div className="row">
            <img src={photo} alt="Chih-chien Lin" className="mt-5 mb-1 rounded-pill image-large hide-small" style={{ height: 420, width: 280, marginLeft: "auto", marginRight: "auto" }}></img>
          </div>

          <Typography paragraph>
            <div style={{ textAlign: "center" }}>
              <h1 id="Section1" >Chih-Chien Lin</h1>
              <br></br>
              <h3>Colts Neck, NJ 07722 - (732)8043047 - <a class="text-lowercase" href="mailto:chihlin@deloitte.com">chihlin@deloitte.com</a></h3>
              <br></br>
              <h3>I am a full Stack Web Developer / Mechanical Engineer, passionate to programming skills and problem-solving. </h3>
              <h3>I love to learn and practice new technologies by working with other programmers to build cool projects! </h3>
            </div>
            <br></br>
          </Typography>
          <br></br>
          {/* <div style={{marginLeft: "auto", marginRight: "auto"}}> */}
          <div className="row" >
            <a href="https://github.com/Chih-Chien-Lin" style={{ marginLeft: "auto", marginRight: "5%" }}><i ><AiFillGithub size={100} /></i></a>
            <a href="https://www.linkedin.com/in/chih-chien-justin-lin-691016ba/" style={{ marginRight: "auto", marginLeft: "0%" }}><i ><AiFillLinkedin size={100} /></i></a>
          </div>
        </div>

        <hr></hr>
        {/* -----SKills----- */}
        <Element name="Skills"></Element>
        <div data-aos="fade-right" style={{ marginTop: "8%", marginBottom: "8%", marginLeft: "5%" }}>
          <h1 style={{ fontWeight: "bold" }}>SKILLS</h1>
          <br></br><br></br>
          <h2 >Programming Languages & Tools</h2>
          <br></br><br></br>
          <Tooltip title="Salesforce">
            <i><FaSalesforce size={50} /></i>
          </Tooltip>
          <Tooltip title="HTML">
            <i style={{ marginLeft: "2%" }}><AiFillHtml5 size={50} /></i>
          </Tooltip>
          <Tooltip title="MongoDB">
            <i style={{ marginLeft: "2%" }} ><DiMongodb size={50} /></i>
          </Tooltip>
          <Tooltip title="React.js">
            <i style={{ marginLeft: "2%" }}><FaReact size={50} /></i>
          </Tooltip>
          <Tooltip title="CSS">
            <i style={{ marginLeft: "2%" }}><IoLogoCss3 size={50} /></i>
          </Tooltip>
          <Tooltip title="JavaScript">
            <i style={{ marginLeft: "2%" }}><IoLogoJavascript size={50} /></i>
          </Tooltip>
          <Tooltip title="Node.js">
            <i style={{ marginLeft: "2%" }}><IoLogoNodejs size={50} /></i>
          </Tooltip>
          <Tooltip title="Npm">
            <i style={{ marginLeft: "2%" }}><FaNpm size={50} /></i>
          </Tooltip>
          <Tooltip title="Mysql">
            <i style={{ marginLeft: "2%" }}><DiMysql size={50} /></i>
          </Tooltip>
          <Tooltip title="JQuery">
            <img src={Jquery} alt="JQuery" size={50} style={{ marginLeft: "2%" }}></img>
          </Tooltip>
          <br></br><br></br><br></br>
          <h2>Work Flow</h2>
          <div className="row" style={{ marginTop: "2%" }}>
            <i className="col-md-1"><FaCheckSquare size={30} style={{ marginLeft: "50%" }} /></i>
            <h4 className="col-md-9" style={{ marginTop: "5px" }}>Cross Functional Team</h4>
          </div>
          <div className="row" style={{ marginTop: "1%" }}>
            <i className="col-md-1"><FaCheckSquare size={30} style={{ marginLeft: "50%" }} /></i>
            <h4 className="col-md-9" style={{ marginTop: "5px" }}>MERN Stack Developer</h4>
          </div>
          <div className="row" style={{ marginTop: "1%" }}>
            <i className="col-md-1"><FaCheckSquare size={30} style={{ marginLeft: "50%" }} /></i>
            <h4 className="col-md-9" style={{ marginTop: "5px" }}>Salesforce Commnity developer</h4>
          </div>

        </div>
        <hr></hr>
        {/* -----Education----- */}
        <Element name="Education"></Element>
        <div data-aos="fade-right" style={{ marginTop: "8%", marginBottom: "8%", marginLeft: "5%" }}>
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

        <div data-aos="fade-right" style={{ marginTop: "8%", marginBottom: "8%", marginLeft: "5%" }}>
          <h1 style={{ fontWeight: "bold" }}>WORK HISTORY</h1>
          <br></br><br></br>
          <div className="row">
            <h3 style={{ fontWeight: "bold" }} className="col-md-5">Deloitte LLC</h3>
            <h5 className="offset-md-4">Sep 2020 - now</h5>
          </div>
          <h5 style={{ color: "gray" }}>Solution Analyst - Salesforce Developer </h5>
          <div style={{ marginLeft: "1%" }}>
            <h6>- Develop Salesforce community using Lightning Web Component(LWC), Apex class, and Aura component</h6>
            <h6>- Draft design document to bridge the communication between developer team and functional team</h6>
            <h6>- Draft screen mock-up for new functionality/product by following the requirement</h6>
            <h6>- Document the code/application flow with detailed code explanation </h6>
            <h6>- Draft configuration of validations for the application.</h6>
          </div>
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
          <h1 data-aos="fade-right" style={{ fontWeight: "bold" }}>PROJECTS</h1>
          <br></br><br></br>
          <div data-aos="zoom-in" className="row">
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
              <br></br>
              <div className="row">
                <div className="col-md-8" >
                  <ProgressBar striped variant="success" now={60} label={`React.js`} key={1} style={{marginTop:"1%"}}/>
                  <ProgressBar variant="info" now={40} label={'MongoDB'} key={2} style={{marginTop:"1%"}}/>
                  <ProgressBar variant="primary" now={30} label={'Firebase'} key={2} style={{marginTop:"1%"}}/>
                  <ProgressBar variant="warning" now={20} label={'CSS'} key={2} style={{marginTop:"1%"}}/>
                  <ProgressBar striped variant="danger" now={20} label={'HTML'} key={3} style={{marginTop:"1%"}}/>
                </div>
              </div>
            </div>
          </div>
          <br></br><br></br>
          <hr></hr>
          <div data-aos="zoom-in" className="row">
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
              <br></br>
              <div className="row">
                <div className="col-md-8" >
                  <ProgressBar striped variant="success" now={60} label={`React.js`} key={1} style={{marginTop:"1%"}}/>
                  <ProgressBar variant="info" now={40} label={'MongoDB'} key={2} style={{marginTop:"1%"}}/>
                  <ProgressBar variant="primary" now={30} label={'Python'} key={2} style={{marginTop:"1%"}}/>
                  <ProgressBar variant="warning" now={20} label={'CSS'} key={2} style={{marginTop:"1%"}}/>
                  <ProgressBar striped variant="danger" now={20} label={'HTML'} key={3} style={{marginTop:"1%"}}/>
                </div>
              </div>
            </div>
          </div>
          <br></br><br></br>
          <hr></hr>

          <div data-aos="zoom-in" className="row">
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
              <br></br>
              <div className="row">
                <div className="col-md-8" >
                  
                  <ProgressBar variant="primary" now={30} label={'HTML'} key={2} style={{marginTop:"1%"}}/>
                  <ProgressBar variant="warning" now={20} label={'CSS'} key={2} style={{marginTop:"1%"}}/>
                  <ProgressBar striped variant="danger" now={20} label={'API'} key={3} style={{marginTop:"1%"}}/>
                </div>
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
