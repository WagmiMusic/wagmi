import { Grid, makeStyles, Button } from "@material-ui/core";
import { useEffect, useState } from 'react';
import AboutUs from "../components/AboutUs";
import SalesInfo from "../components/SalesInfo";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import React from "react";
import Footer from "../components/Footer";
import SalesTracker from "../components/SalesTracker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faArrowUpRightFromSquare, faEllipsisVertical, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const nfts = [
    {image:'/image/wagmi1-320px.jpg',
    title:'WAGMI - Normal',
    artist:'Hibikilla',
    etherscan: 'https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963',
    opensea: 'https://opensea.io/ja/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/78555306292208822264975053909961537674478548303611333324072215595578311049286'},
    {image:'/image/wagmi2-320px.jpg',
    title:'WAGMI - MV Rare',
    artist:'Hibikilla',
    etherscan: 'https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963',
    opensea: 'https://opensea.io/ja/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/78555306292208822264975053909961537674478548303611333324072215596677822676997'},
    {image:'/image/wagmi3-320px.jpg',
    title:'WAGMI - Record Rare',
    artist:'Hibikilla',
    etherscan: 'https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963',
    opensea: 'https://opensea.io/ja/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/78555306292208822264975053909961537674478548303611333324072215597777334304773'},
    {image:'/image/wagmi4-320px.jpg',
    title:'WAGMI - acappella',
    artist:'Hibikilla',
    etherscan: 'https://polygonscan.com/address/0x2953399124f0cbb46d2cbacd8a89cf0599974963',
    opensea: 'https://opensea.io/ja/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/78555306292208822264975053909961537674478548303611333324072215601075869188106'},
    {image:'/image/omni1-320px.jpg',
    title:"Risin To The Top feat. Laya",
    artist:'Hibikilla',
    etherscan: 'https://polygonscan.com/address/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb',
    opensea: 'https://opensea.io/ja/assets/matic/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb/1'},
    {image:'/image/omni2-320px.jpg',
    title:'Risin To The Top feat. Laya',
    artist:'Hibikilla',
    etherscan: 'https://polygonscan.com/address/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb',
    opensea: 'https://opensea.io/ja/assets/matic/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb/2'},
    {image:'/image/omni3-320px.jpg',
    title:'Risin To The Top feat. Laya',
    artist:'Hibikilla',
    etherscan: 'https://polygonscan.com/address/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb',
    opensea: 'https://opensea.io/ja/assets/matic/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb/3'},
    {image:'/image/omni4-320px.jpg',
    title:'Risin To The Top feat. Laya',
    artist:'Hibikilla',
    etherscan: 'https://polygonscan.com/address/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb',
    opensea: 'https://opensea.io/ja/assets/matic/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb/4'},
    {image:'/image/omni5-320px.jpg',
    title:'Risin To The Top feat. Laya',
    artist:'Hibikilla',
    etherscan: 'https://polygonscan.com/address/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb',
    opensea: 'https://opensea.io/ja/assets/matic/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb/5'},
    {image:'/image/omni6-320px.jpg',
    title:'Risin To The Top feat. Laya',
    artist:'Hibikilla',
    etherscan: 'https://polygonscan.com/address/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb',
    opensea: 'https://opensea.io/ja/assets/matic/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb/6'},
    {image:'/image/omni7-320px.jpg',
    title:'Risin To The Top feat. Laya',
    artist:'Hibikilla',
    etherscan: 'https://polygonscan.com/address/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb',
    opensea: 'https://opensea.io/ja/assets/matic/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb/7'},
    {image:'/image/badmind1.webp',
    title:'Bad Mind feat. Itaq',
    artist:'Hibikilla',
    etherscan: 'https://polygonscan.com/address/0xb4fa9fee7b4f359a4c805b27932bca017d78bfeb',
    opensea: 'https://opensea.io/ja/assets/ethereum/0xa86a7046800c57236b61d1587f4abe9b38ab6f5d/0'},
    {image:'/image/luna1-320px.png',
    title:'LUNA - Original',
    artist:'Hibikilla',
    etherscan: 'https://etherscan.io/address/0xd91a3ad7c4e093e1a934481cdc6755221e0c6ac4',
    opensea: 'https://opensea.io/ja/assets/ethereum/0xd91a3ad7c4e093e1a934481cdc6755221e0c6ac4/1'},
    {image:'/image/luna2-320px.png',
    title:'LUNA - Special',
    artist:'Hibikilla',
    etherscan: 'https://etherscan.io/address/0xd91a3ad7c4e093e1a934481cdc6755221e0c6ac4',
    opensea: 'https://opensea.io/ja/assets/ethereum/0xd91a3ad7c4e093e1a934481cdc6755221e0c6ac4/2'},
    {image:'/image/luna3-320px.png',
    title:'LUNA - Instrumental',
    artist:'Hibikilla',
    etherscan: 'https://etherscan.io/address/0xd91a3ad7c4e093e1a934481cdc6755221e0c6ac4',
    opensea: 'https://opensea.io/ja/assets/ethereum/0xd91a3ad7c4e093e1a934481cdc6755221e0c6ac4/3'},
    {image:'/image/luna4-320px.png',
    title:'LUNA - Acappella',
    artist:'Hibikilla',
    etherscan: 'https://etherscan.io/address/0xd91a3ad7c4e093e1a934481cdc6755221e0c6ac4',
    opensea: 'https://opensea.io/ja/assets/ethereum/0xd91a3ad7c4e093e1a934481cdc6755221e0c6ac4/4'}
];

const useStyles = makeStyles({
    back: {
        backgroundColor: '#151515',
        color: "white",
        // minHeight: '200vw',
        minWidth: '100vw',
        zIndex: -2,
        overflow: "hidden",
        // filter: "blur(5px)"
    },
    back2: {
        color: "white",
        width: "100vw",
        backgroundColor: "#282333",
    },
    grad: {
        background: "linear-gradient(to top, transparent, #151515)",
        width: "100vw",
        height: 300,
    },
    columnCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
    },
    columnStart: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        flexDirection: 'column',
    },
    rowCenter: {
        // backgroundColor:"#2F2C37",
        // color:"white",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap:'wrap',
        position: 'relative',
    },
    rowStart: {
        // backgroundColor:"#2F2C37",
        // color:"white",
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    icon: {
        width:40,
        height:40,
        borderRadius:"50%",
        marginRight:20,
        // marginLeft:70
    },
    artist: {
        color: "white",
        textShadow: '0px 0px 2px  rgba(0, 0, 0, 1)',
    },
    background:{
        backgroundColor: "#fff5a3",
        width: "100vw",
        position: 'absolute',
        zIndex: -1,
    },
    seat:{
        width: "100vw",
        position: 'absolute',
        zIndex: 0,
    },
    top:{
        width: "100vw",
        height: "98vw",
        position: 'fixed',
    },
    topgrad:{
        width: "100vw",
        position: 'absolute',
        height: "50%",
        background: "linear-gradient(to bottom, transparent, #151515)",
        zIndex: 0,
    },
    topMessage:{
        width: "80vw",
        // height: 100,
        // backgroundColor:"black",
        textAlign: 'center',
        fontFamily:'Black',
        textShadow: '0px 0px 2px  rgba(0, 0, 0, 1)',
        fontSize:16,
        fontWeight:"bolder",
        // fontStyle:"italic",
        position: "absolute",
        color: "white",
        zIndex:1,
    },
    fix:{
        width: "100vw",
        position:"fixed",
        zIndex: 0,
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        top: '-70%',
    },
    img: {
        width: 300,
        height: 300,
        margin: 10,
        borderRadius: "50%",
    },
    musicItem: {
        transition: "0.3s",
        position: "relative",
        minWidth: 160,
        height: 280,
        margin: 10,
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        flexDirection: 'column',
        "&:hover": {
            transition: "0.3s",
            minWidth: 200,
          },
    },
    image: {
        // transform:"translate(0%,-40%)",
        width: "100%",
        // height: 160,
        border: "solid",
        borderRadius: "8%",
        borderWidth: 4,
        borderColor: "black",
    },
    imageBox: {
        position: "absolute",
        bottom: 70,
        width: "100%",
        zIndex: 1,
    },
    data: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform:"translate(-50%,-50%)",
        height: "100%",
        width: "100%",
        // transition: "0.3s",
        // opacity: 0,
        // "&:hover": {
        //     transition: "0.3s",
        //     opacity: 1,
        //   },
    },
    dataIcon:{
        height: "60%",
        width: "60%",
    },
    margin: {
        width: "100%",
        margin: 15,
    },
    musicTitle: {
        marginRight:30,
        color: "white",
        textShadow: '0px 0px 2px  rgba(0, 0, 0, 1)',
        fontSize: 36,
    },
    newsBox: {
        top: "50vw",
        position: "fixed",
    },
    news: {
        whiteSpace: 'nowrap',
        position:"absolute",
        color: "white",
        opacity: 0.8,
        fontFamily: "Black",
    },
    newsTitle: {
        margin: 45,
        position: "fixed",
        whiteSpace: 'nowrap',
        color: "white",
        opacity: 0.4,
        fontFamily: "Black",
        fontSize: 200,
        zIndex: 0
    },
    newsText: {
        overflowX: "scroll",
        overflowY: "hidden",
        width: "100vw",
        height: 500,
        fontSize: 30,
        fontFamily: "Regular",
        whiteSpace: 'nowrap',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        flexDirection: 'row',
    },
    '@keyframes text_scroll': {
        '0%': { transform: 'translateX(1px)'},
        '100%': { transform: 'translateX(-50%)'}
    },
    mtext: {
        fontFamily: "Regualr",
        fontSize: 10,
    },
    title: {
        fontSize: 60,
        color: "white",
        zIndex: 0,
    },
    textBox: {
        width: 160,
        overflow: "hidden",
        zIndex: 0,
    },
    text: {
        display: 'inline-block',
        fontFamily: "Black",
        fontSize: 20,
        "&:hover": {
            animation: `$text_scroll 5s linear infinite`,
        },
        },

    box: {
        position: "absolute",
        bottom: -300,
        width: "100vw",
        backgroundColor: '#151515',
    },
    dataBox: {
        position: "absolute",
        padding: 20,
        borderRadius:10,
        bottom: -200,
        width: 200,
        backgroundColor: "white",
    },
    dataTitle: {
        color: "black",
        fontFamily: "Medium",
        fontSize:14,
    },
    dataText: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap:'wrap',
        color: "black",
        fontFamily: "Medium",
        fontSize:14,
    },
    iconButton: {
        maxHeight:20,
        minHeight:20,
    },
    circle: {
        width: 12,
        height: 12,
        borderRadius: "50%",
        color: "#7547D7",
    },
    bottom: {
        position: "absolute",
        bottom: 0,
    }
})

const Music = ({i, data}) => {
    const classes = useStyles();
    const [hover, setHover] = useState();

    const DataBox = () => {
        return <div className={classes.dataBox}>
            <div className={classes.columnStart}>
                <div className={classes.dataTitle}>Distribution</div>
                <Spacer height={10}/>
                <div className={classes.dataText}>
                    <FontAwesomeIcon className={classes.circle} icon={faCheckCircle} />
                    <Spacer width={10}/>
                    sale
                </div>
                <FontAwesomeIcon className={classes.circle} icon={faEllipsisVertical} />
                <div className={classes.dataText}>
                    <FontAwesomeIcon className={classes.circle} icon={faCheckCircle} />
                    <Spacer width={10}/>
                    recoup
                </div>
                <FontAwesomeIcon className={classes.circle} icon={faEllipsisVertical} />
                <div className={classes.dataText}>
                    <FontAwesomeIcon className={classes.circle} icon={faCheckCircle} />
                    <Spacer width={10}/>
                    WAGMI!
                </div>
                <Spacer height={10}/>
                <div className={classes.dataText}>
                    <Button
                        href={data.opensea}
                        target="_blank"
                        className={classes.iconButton}
                        >
                        opensea
                        <Spacer width={10}/>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Button>
                </div>
                <Spacer height={4}/>
                <div className={classes.dataText}>
                    <Button
                        href={data.etherscan}
                        target="_blank"
                        className={classes.iconButton}
                        >
                        etherscan
                        <Spacer width={10}/>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Button>
                </div>
            </div>
        </div>;
    }

    return <div className={classes.musicItem}>
        <div className={classes.imageBox}>
            <img src={data.image} className={classes.image}/>
            <div className={classes.data}
            onMouseEnter={()=>{
                setHover(i);
            }}
            onMouseLeave={()=>{
                setHover(null);
            }}>
                {/* <FontAwesomeIcon  className={classes.dataIcon} icon={faDatabase} /> */}
                {hover===i?<DataBox/>:<div></div>}
            </div>
        </div>
        <div className={classes.bottom}>
        <div className={classes.columnStart}>
            <div className={classes.rowStart}>
                <div className={classes.mtext}>
                {data.artist}
                </div>
            </div>
            <div className={classes.textBox}>
                <div className={classes.text}>{data.title} {data.title}</div>
            </div>
        </div>
        </div>
        
    </div>;
}

const HomePage = ({sales, inStock, maxSupply, minted}) => {
    const classes = useStyles();

    const [opacity, setOpacity] = useState(1);
    const [fix, setFix] = useState(0);
    const [scroll, setScroll] = useState(0);
    const [isMobile, setIsMobile] = useState();

    const toggleScroll = () => {
        window.scrollY < 100
            ? setOpacity(1 - window.scrollY / 100)
            : setOpacity(0)
        setScroll(window.scrollY);
        500 - window.scrollY*2 < 0
            ? setFix(0)
            : setFix(500 - window.scrollY*2)
    }

    const onResize = () => {
        window.innerWidth < 1000
            ? setIsMobile(true)
            : setIsMobile(false)
    }

    useEffect(() => {
        onResize();
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', toggleScroll)
        return () => window.removeEventListener('scroll', toggleScroll)
    }, [])

    return <>
    <div className={classes.back}>
        <Header color="white" subColor="#030303" sales={sales}/>
        <div className={classes.top} style={{top:-scroll/2}}>
            <img className={classes.background} src="/image/top_background.webp"></img>
            <img className={classes.seat} style={{bottom: scroll/8}} src="/image/top_seat.webp"></img>
            <div className={classes.topgrad} style={{bottom: scroll/8}}>
            <div className={classes.box}></div>
            </div>
        </div>
        {/* <Spacer height={"25vh"}/> */}
        <div className={classes.columnCenter}>
            <div className={classes.fix}>
                <Spacer height={"100vh"}/>
                <div className={classes.rowCenter}>
                <div className={classes.topMessage} style={{top:- scroll/2 - 80}}>
                    WAGMI Music is web3 digital agent and protect the right of artist with the power of blockchain
                </div>
                <img className={classes.img} style={{opacity:opacity}}
                src={'/image/luna1.webp'}/>
                <div className={classes.columnCenter} style={{opacity:opacity}}>
                    <div className={classes.margin}>
                    <div className={classes.rowCenter}>
                        <img className={classes.icon}
                        src="/image/hibikilla_icon.webp"/>
                        <div className={classes.artist}>
                            hibikilla
                        </div>
                        <Spacer width={"5%"}/>
                        <div className={classes.musicTitle}>
                            LUNA
                        </div>
                    </div>
                    </div>
                    <SalesInfo sales={sales} supply={inStock}></SalesInfo>
                </div>   
                </div>
            </div>
        </div>
        <Spacer height={"50vw"}/>
        <Spacer height={450}/>
        <div className={classes.columnCenter} style={{width: "100vw", opacity:1-opacity}}>
        <div className={classes.title}>Discography</div>
        <Spacer height={20}/>
        <div className={classes.newsText}>
            {nfts.map((data, i) => 
            <Music key={i} i={i} data={data}/>
            )}
        </div>
        </div>
        <SalesTracker isMobile={isMobile} sales = {sales} supply={maxSupply} minted={minted}></SalesTracker>
    </div>
    <div className={classes.back2}>
        <div className={classes.grad}/>
        <Grid container justifyContent="center">
            <AboutUs/>
        </Grid>
        <Footer/>
    </div>
    </>;
};

export default HomePage;
