import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography, Grid, makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import ConnectWalletButton from '../moralis/ConnectWalletButton';
import { Path } from './Routes';

const useStyles = makeStyles({
    headerBar: {
        position: 'fixed',
        background: 'transparent',
        boxShadow: 'none',
        //color: 'white',
    },
    icon: {
        width: 30,
        height: "auto",
        fontSize: 20,
    },
    logo: {
        width:"50%",
        height:"4vw",
        margin:"1vw",
    },
    customButton: {
        height: 40,
        width: "7vw",
        fontSize: 16,
        fontFamily: 'Lato',
        fontWeight: 'bold',
        color: 'white',
        "box-sizing": "border-box"
    },
    customIcon: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.5)',
        fontSize: 16,
        fontFamily: 'Lato',
        fontWeight: 'bold',
        maxWidth: 'auto',
        maxHeight: 'auto',
        minWidth: 'auto',
        minHeight: 'auto',
    },
    buttonMargin: {
        marginRight: "2%",
        "box-sizing": "border-box"
    },
    iconMargin: {
        "box-sizing": "border-box"
    },
    hederItem: {
        height:"100px",
        alignItems:"center",
    },
    bottons: {
        height:"60px",
        alignItems:"center",
    }
});
const Header = ({color, subColor, sales}) => {
    const classes = useStyles();
    return <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.headerBar}>
        <Toolbar>
            <Grid container className={classes.hederItem}>
                <Grid item xs={3}>
                <Button
                    href={Path.home}
                    className={classes.logo}
                    >
                    <img
                        width={"150%"}
                        src="/image/wagmi_logo_noshadow_350_350.png" alt="wagmi"
                        style={{objectFit: 'cover'}}
                        />
                </Button>
                </Grid>
                <Grid item xs={9} container spacing={1} justifyContent="flex-end" className={classes.bottons}>
                    <Grid item className={classes.buttonMargin}>
                        <Button 
                            href={Path.home}
                            className={classes.customButton}
                            style={{backgroundColor: color, color: subColor}}
                            >
                          Home
                        </Button>
                    </Grid>
                    {sales==="1"||sales==="2"
                        ?<Grid item className={classes.buttonMargin}>
                        <Button 
                            href={Path.mint}
                            className={classes.customButton}
                            style={{backgroundColor: color, color: subColor}}
                            >
                          Mint
                        </Button>
                        </Grid>
                        :<div></div>
                    }
                    <Grid item className={classes.buttonMargin}>
                        <Button 
                            href={Path.app}
                            className={classes.customButton}
                            style={{backgroundColor: color, color: subColor}}
                            >
                          App
                        </Button>
                    </Grid>
                    <Grid item className={classes.iconMargin}>
                        <Button 
                            href="https://opensea.io/collection/wagmimusic"
                            target="_blank"
                            className={classes.customIcon}
                            style={{color: color}}
                            >
                          Opensea
                        </Button>
                    </Grid>
                    <Grid item className={classes.iconMargin}>
                        <Button
                            href="https://twitter.com/hibikilla30"
                            target="_blank"
                            className={classes.customIcon}
                            style={{color: color}}
                            >
                            <FontAwesomeIcon className={classes.icon} icon={faTwitter} />
                        </Button>
                    </Grid>
                    <Grid item className={classes.iconMargin}>
                        <Button
                            href="https://discord.com/invite/yGwTRWNssq"
                            target="_blank"
                            className={classes.customIcon}
                            style={{color: color}}
                            >
                            <FontAwesomeIcon className={classes.icon} icon={faDiscord} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <ConnectWalletButton color={subColor}/>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </Box>
    </div>;
}
export default Header;