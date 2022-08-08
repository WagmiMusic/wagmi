import { Button, Card, makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import { Path } from '../components/Routes';
import { useMoralis } from "react-moralis";
import Footer from "../components/Footer";

const useStyles = makeStyles({
  back: {
    backgroundColor: '#FFFAF3',
    minHeight: '155vh',
    minWidth: '100vw',
    zIndex: -1
  },
  appField: {
    width:"90vw",
  },
  columnCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position:'relative',
  },
  rowCenter: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  appBox: {
    width:"22vw",
    height: "28vw",
    margin: "1vw",
    backgroundColor:"#030303",
    borderRadius: "1vw",
  },
  appButton: {
    fontSize:16,
    width:"40%",
    color:"white",
    border:"solid",
    borderColor:"white",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    "&:hover": {
      background: "#5c5c5c"
    },
  },
  appInvalid: {
    fontSize:16,
    fontWeight:'bolder',
    width:"50%",
    color:"white",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  img: {
    width: "100%",
    borderTopRightRadius: "1vw",
    borderTopLeftRadius: "1vw",
  },
  fade: {
    bottom:0,
    width:"100%",
    height:"50%",
    background: "linear-gradient(to bottom, transparent, black)",
    position:'absolute',
  },
  frame: {
    borderTopRightRadius: "1vw",
    borderTopLeftRadius: "1vw",
    width:"22vw",
    height:"22vw",
    position:'relative',
  },
  description: {
    bottom:70,
    color:'white',
    position:'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  aName: {
    fontSize:20,
  },
  aDesc: {
    // fontFamily:'Lato',
    fontSize:10,
  }
})

const AppPage = ({sales}) => {
  const classes = useStyles();
  const { account } = useMoralis();

  return <>
  <div className={classes.back}>
    <Header color="#030303" subColor="white" sales={sales}/>
    <Spacer height={150}></Spacer>
    <div className={classes.columnCenter}>
    <div className={classes.appField}>
      <div className={classes.rowCenter}>
        <Card raised className={classes.appBox}>
          <div className={classes.frame}>
            <img className={classes.img}
            src={`/image/omni2.jpg`}/>
            <div className={classes.fade}></div>
          </div>
          <div className={classes.columnCenter}>
            <div className={classes.description}>
              <div className={classes.aName}>Omnichain Sender</div>
              <div className={classes.aDesc}>異なるチェーンにNFTを転送します</div>
            </div>
            {account?
            <Button 
                href={Path.omni}
                className={classes.appButton}
                >
              Launch
            </Button>:
            <div className={classes.appInvalid}>
              ConnectWallet
            </div>
            }
          </div>
        </Card>
        <Card raised className={classes.appBox}>
          <div className={classes.frame}>
            <img className={classes.img}
            src={`/image/wagmi1.png`}/>
            <div className={classes.fade}></div>
          </div>
          <div className={classes.columnCenter}>
            <div className={classes.description}>
              <div className={classes.aName}>Wagmi Collection</div>
              <div className={classes.aDesc}>保有しているWagmi NFTをプレビューできます</div>
            </div>
            {account?
            <Button 
                href={Path.album}
                className={classes.appButton}
                >
              Launch
            </Button>:
            <div className={classes.appInvalid}>
              ConnectWallet
            </div>
            }
            
          </div>
        </Card>
        <Card raised className={classes.appBox}>
          <div className={classes.frame}>
            <img className={classes.img}
            src={`/image/wagmi2.png`}/>
            <div className={classes.fade}></div>
          </div>
          <div className={classes.columnCenter}>
            <div className={classes.description}>
              <div className={classes.aName}>Token Exchanger</div>
              <div className={classes.aDesc}>旧規格トークンの引換を行います</div>
            </div>
            <div className={classes.appInvalid}>
              Coming Soon...
            </div>
          </div>
        </Card>
      </div>
    </div>
    </div>
  </div>
  <Footer/>
  </>
}

export default AppPage;