import { div, makeStyles, Typography, Button, Grid } from "@material-ui/core";
import Countdown from "react-countdown";
import { Path } from './Routes';

const useStyles = makeStyles({
    rowCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    columnLeft: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    countRow: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    },
    countCol: {
        width: "20%",
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#030303',
        boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.8)',
        borderRadius: "15%",
        color: '#F2EBE4',
    },
    colon: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 60,
        margin: 5,
        fontFamily: 'Lato',
    },
    number: {
        fontSize: "300%",
        fontFamily: 'Lato',
        marginTop:"10%",
    },
    unit: {
        fontSize: "100%",
        fontFamily: 'Lato',
        fontWeight: 'bold',
        marginBottom:"15%",
        marginLeft:"4vw",
        marginRight:"4vw",
    },
    description: {
        fontWeight:'bold',
        marginLeft:30,
    },
    buttonMargin: {
        margin: 10,
        "box-sizing": "border-box"
    },
    customButton: {
        height: 60,
        width: 200,
        fontSize: 24,
        fontFamily: 'Lato',
        fontWeight: 'bold',
        backgroundColor: '#4911BF',
        color: 'white',
        "box-sizing": "border-box",
        "&:hover": {
            background: "#4911BF"
          },
    },
    incite: {
        fontSize: 26,
        fontWeight:'bold',
        marginBottom:10,
    },
    columnCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      },
});
const Time = ({days, hours, minutes, seconds}) => {
    const classes = useStyles();
    return <div>
            <div className={classes.rowCenter}>
                <div className={classes.countCol}>
                    <div  className={classes.number}>{days}</div>
                    <div  className={classes.unit}>days</div>
                </div>
                <div className={classes.countCol}>
                    <div className={classes.number}>{hours}</div>
                    <div className={classes.unit}>hours</div>
                </div>
                <div className={classes.countCol}>
                    <div className={classes.number}>{minutes}</div>
                    <div className={classes.unit}>minutes</div>
                </div>
                <div className={classes.countCol}>
                    <div  className={classes.number}>{seconds}</div>
                    <div  className={classes.unit}>seconds</div>
                </div>
            </div>
        </div>
}
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return <Time days={days} hours={hours} minutes={minutes} seconds={seconds} />;
};

/*
*  sales == 0 => prepared
*  sales == 1 => presale
*  sales == 2 => pulicsale
*  sales == 3 => suspended
*/
const SalesInfo = ({sales="0", supply}) => {
    const classes = useStyles();
    if(sales === "3"){
        return <div className={classes.columnCenter}>
        <div className={classes.incite}>
        Mint sale is finished !!
        </div>
        <Grid item className={classes.buttonMargin}>
            <Button 
                href="https://opensea.io/collection/wagmimusic"
                target="_blank"
                className={classes.customButton}
                >
                Go Opensea
            </Button>
        </Grid>
        </div>;
    } else if(sales === "1" || sales === "2"){
        return <div className={classes.columnCenter}>
        <div className={classes.incite}>
        Mint is now available !!
        </div>
        <Grid item className={classes.buttonMargin}>
            <Button 
                href={Path.mint}
                className={classes.customButton}
                >
                Go Mint Page
            </Button>
        </Grid>
        </div>;
    } else {
        return <div>
        <div className={classes.description}>
            New Single will be released soon . . . !!
        </div>
        <Countdown
            date={new Date('August 19, 2022 21:00:00')}
            renderer={renderer}
        >
        </Countdown>
        </div>;
    };
};

export default SalesInfo;