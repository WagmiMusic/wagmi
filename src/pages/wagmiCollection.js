import { Button, Card, makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import Collection from "../components/Collection";
import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const useStyles = makeStyles({
  back: {
    backgroundColor: '#FFFAF3',
    minHeight: '155vh',
    minWidth: '100vw',
    position: 'absolute',
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
  },
  rowLeft: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap:'wrap'
  },
})
let tokenArray = [];

const WagmiCollection = ({sales}) => {
  const classes = useStyles();
  const Web3Api = useMoralisWeb3Api();
  const [update,setUpdate]=useState(false)

  const fetchToken = async () => {
    // Luna Token
    const options = {
      chain: "0x1",
      address: "0xD81Cd16ddcdeD56bf1229DC65A5A46391fa9C17B",
      token_address: "0xa86a7046800c57236B61d1587f4aBE9B38Ab6F5d",
    };
    const token = await Web3Api.account.getNFTsForContract(options);
    // console.log("token",token);
    // console.log("tokenUri",token.result[0].token_uri);
    setUpdate(update?false:true)
    token.result.forEach((res, i) => {
      tokenArray.push([res.token_id, res.amount, res.token_uri]);
      // console.log("umm",tokenArray);
      setUpdate(update?false:true)
    })
  }

  const fetchLegacyToken = async () => {
    // RTT Token
    const options = {
      chain: "polygon",
      address: "0x3BF9f6AC578e0dec6121c72c4AdC9735c051DB03",
      token_address: "0xb4fa9FEe7B4f359a4C805b27932bca017D78bfeb",
    };
    const token = await Web3Api.account.getNFTsForContract(options);
    // console.log("legacy",token.result);
    // console.log("legacyUri",token.result[0].token_uri);
    // setUpdate(update?false:true)
    token.result.forEach((res, i) => {
      tokenArray.push([res.token_id, res.amount, res.token_uri]);
      // console.log("umm",tokenArray);
      setUpdate(update+1)
    })
  }

  useEffect(()=>{
    fetchLegacyToken();
    fetchToken();
  },[])

  // useEffect(()=>{
  //   console.log("detect array",tokenArray.length)
  //   setUpdate(update+1)
  // },[tokenArray.length])

  // useEffect(()=>{
  //   console.log("update")
  // },[update])

  return <>
  <div className={classes.back}>
    <Header color="#030303" subColor="white" sales={sales}/>
    <Spacer height={150}></Spacer>
    <div>
    <div className={classes.columnCenter}>
      <div className={classes.appField}>
        <div className={classes.rowLeft}>
          {tokenArray.map((data, i) => <Collection key={i} data={data}/>)}
        </div>
      </div>
    </div>
  </div>
  </div>
  </>
}

export default WagmiCollection;