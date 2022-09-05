import { Grid, makeStyles } from "@material-ui/core";
import AboutUs from "../components/AboutUs";
import SalesInfo from "../components/SalesInfo";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import React from "react";
import Footer from "../components/Footer";
import SalesTracker from "../components/SalesTracker";
import { useEffect } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

const useStyles = makeStyles({
    back: {
        backgroundColor: '#FFFAF3',
        minHeight: '100vh',
        minWidth: '100vw',
        zIndex: -3,
        overflow: "hidden"
    },
    back3: {
        backgroundColor: '#F4E8D6',
        minHeight: '40vh',
        minWidth: '100vw',
        zIndex: -3
    },
    image: {
        margin: 10
    },
    img: {
        width: 600,
        height: 600,
        // width: "50vw",
        // height: "50vw",
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
        // width: "18vw",
        // height: "18vw",
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
        alignItems: 'start',
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    margin: {
        marginTop:"15vw",
        marginBottom:"10vw",
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
        fontSize: "100%",
        fontFamily:'Lato',
        fontWeight:'bold',
    },
    title: {
        fontSize: 50,
        // fontFamily:'Lato',
        fontWeight:'bold',
        marginLeft:40,
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
        width:"90%",
        paddingTop:'5vw',
        padding:'3vw',
        zIndex: 1,
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
    },
    spacer: {
        zIndex: 0,
        marginLeft:"3vw",
        width: "auto"
    }
})

const HomePage = ({sales, inStock, maxSupply, minted}) => {
    const classes = useStyles();

    return <>
        <div className={classes.back}>
        <Header color="#030303" subColor="white" sales={sales}/>
        <Spacer height={100}/>
            <Spacer height={100}/>
            <div className={classes.rowCenter}>
            <Spacer width={"20vw"}/>
                <div className={classes.margin}>
                    <img className={classes.img}
                    src="/image/record.png"/>
                    <img className={classes.iconimg}
                    src="/image/luna1.png"/>
                    <div className={classes.circle}></div>
                </div>
                <Spacer width={"10vw"}/>
                <div className={classes.spacer}>
                    <div className={classes.info}>
                        <div className={classes.row}>
                            <img className={classes.icon}
                            src="/image/hibikilla_icon.png"/>
                            <div className={classes.artist}>
                                hibikilla
                            </div>
                        </div>
                        <div className={classes.title}>
                                luna
                        </div>
                        <Grid item xs={12}>
                            <SalesInfo sales={sales} supply={inStock}></SalesInfo>
                        </Grid>
                    </div>
                </div>
            </div>
        <Spacer height={"20vw"}/>
        <SalesTracker sales = {sales} supply={maxSupply} minted={minted}></SalesTracker>
        <Spacer height={20}/>
        <Grid container justifyContent="center">
            <AboutUs/>
        </Grid>
        <Spacer height={100}/>
        </div>
        <Footer/>
    </>;
};

export default HomePage;