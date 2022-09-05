import TokenDoughnuts from "./TokenDoughnuts";
import { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Spacer from "./Spacer";

const useStyles = makeStyles({
  title: {
    fontSize: 60
  },
  columnCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  rowCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  saleLabels: {
    height:400,
    width:'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    position:'relative',
  },
  saleLabel: {
    color:'black',
    fontFamily:'Lato',
    fontWeight:'bold',
    width: 350,
    height:15,
    borderRadius:"0.5vw",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    flexDirection: 'row',
    whiteSpace:'nowrap',
    padding:25
  },
  colorTag: {
    height:65,
    width:"2%",
    left:0,
    borderTopLeftRadius:"0.5vw",
    borderBottomLeftRadius:"0.5vw",
    position:'absolute',
  }
})

const SaleLabel = ({title, id, minted, supply, color}) => {
  const classes = useStyles();
  return<div className={classes.saleLabel} style={{backgroundColor:"#F4E8D6"}}>
    <div className={classes.colorTag} style={{backgroundColor:color}}>
    </div>
    <Spacer width={10}></Spacer>
    <div style={{color:color, fontSize:20}}>
      {Math.floor(minted*100/supply)}% minted 
    </div>
    <Spacer width={10}></Spacer>
    <div style={{color:color, fontWeight:'normal'}}>
      {minted}/{supply}
    </div>
    <Spacer width={10}></Spacer>
    <div style={{fontSize:20}}>
      {title}
    </div>
    <Spacer width={10}></Spacer>
  </div>
}


const SalesTracker = ({sales, supply, minted}) => {
  const classes = useStyles();

  return<div>
    <div className={classes.columnCenter}>
      <div className={classes.title}>Tokenomics</div>
    </div>
    <Spacer height={50}></Spacer>
    <div className={classes.rowCenter}>
    <TokenDoughnuts sales = {sales} supply={supply} minted={minted}></TokenDoughnuts>
    <div className={classes.saleLabels}>
        {/* '#1a1c1c','#6dbfbe','#d9e86b','#3755ed', '#F4E8D6' */}
        <SaleLabel title={"Luna - Normal"} id={1} minted={minted[0]} supply={45} color={"#1a1c1c"}/>
        <SaleLabel title={"Luna - Special"} id={2} minted={minted[1]}  supply={5} color={"#6dbfbe"}/>
        <SaleLabel title={"Luna - Instrumental"} id={3} minted={minted[2]}  supply={5} color={"#b8c934"}/>
        <SaleLabel title={"Luna - Acappella"} id={4} minted={minted[3]}  supply={5} color={"#3755ed"}/>
    </div>
    </div>
    <Spacer height={50}></Spacer>
  </div>
}

export default SalesTracker;