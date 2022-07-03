import { Grid, makeStyles, Typography } from "@material-ui/core";
import AboutUs from "../components/AboutUs";
import Tokenomics from "../moralis/Tokenomics";
import CountDown from "../components/CountDown";
import Header from "../components/Header";
import Spacer from "../components/Spacer";

const useStyles = makeStyles({
    back: {
        backgroundColor: '#FFFAF3',
        minHeight: '110vh',
        minWidth: '100vw',
        zIndex: -3
    },
    back2: {
        backgroundColor: '#FFFAF3',
        minHeight: '200vh',
        minWidth: '100vw',
        zIndex: -3
    },
    image: {
        margin: 10
    },
    img: {
        width: 600,
        height: 600,
        borderRadius: "8%",
        position:'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 0,
    },
    iconimg: {
        width: 220,
        height: 220,
        borderRadius: "50%",
        position:'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 0,
    },
    columnCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    rowCenter: {
        // backgroundColor:"#2F2C37",
        // color:"white",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    margin: {
        margin: 50,
        width:200,
        height:340,
        marginLeft:200,
        position:'relative',
    },
    icon: {
        width:40,
        height:40,
        borderRadius:"50%",
        marginLeft:35,
        marginRight:20
    },
    artist: {
        fontSize: 22,
        fontFamily:'Lato',
        fontWeight:'bold',
    },
    title: {
        fontSize: 40,
        // fontFamily:'Lato',
        fontWeight:'bold',
        marginLeft:20,
        // height:80,
    },
    description: {
        fontWeight:'bold',
        marginLeft:20,
    },
    row: {
        height:'auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    info: {
        padding:40,
        zIndex: 3,
        backgroundColor: 'rgba(255,255,255, 0.8)',
        borderRadius:40,
        // color:'white',
    },
    circle: {
        position:'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        backgroundColor:"#FFFAF3",
        zIndex: 1,
        width: 25,
        height: 25,
        borderRadius:'50%',
        boxShadow: 'inset 4px 4px 5px 1px rgba(0, 0, 0, 0.8)',
    }
})
const HomePage = () => {
    const classes = useStyles();
    return <>
        <div className={classes.back}>
        <Header color="#030303" subColor="white"/>
        <Spacer height={75}/>
        <div className={classes.columnCenter}>
            {/* <Typography style={{fontSize: 40, marginBottom: 10, zIndex: 3}}>
                New Single will be released soon . . . !!
            </Typography> */}
            <Spacer height={100}/>
            <div container className={classes.rowCenter}>
                <div className={classes.margin}>
                    <img className={classes.img}
                    src="/image/record.png"/>
                    <img className={classes.iconimg}
                    src="/image/bad_mind.png"/>
                    <div className={classes.circle}></div>
                </div>
                <div className={classes.info}>
                    <div className={classes.row}>
                        <img className={classes.icon}
                        src="/image/hibikilla_icon.png"/>
                        <div className={classes.artist}>
                            hibikilla
                        </div>
                    </div>
                    <div className={classes.title}>
                            bad mind feat. Itaq
                    </div>
                    <div className={classes.description}>
                            New Single will be released soon . . . !!
                    </div>
                    <Grid item xs={12}>
                        <CountDown></CountDown>
                    </Grid>
                </div>
            </div>
        </div>
        </div>
        <div className={classes.back2}>
        {/* <Spacer height={60}/> */}
        <Tokenomics></Tokenomics>
        <Spacer height={20}/>
        <Grid container justifyContent="center">
            <AboutUs />
        </Grid>
        <Spacer height={100}/>
        </div>
    </>;
};

export default HomePage;