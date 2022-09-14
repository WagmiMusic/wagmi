import { makeStyles, Button } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Spacer from "./Spacer";

const useStyles = makeStyles({
    back: {
        width: "100vw",
        backgroundColor: "#42133b",
    },
    title: {
        fontSize: 60
    },
    sub: {
        fontSize: 20,
        marginBottom: 60
    },
    icon: {
        color: "white",
        fontSize: 30
    },
    columnCenter: {
        width:"100vw",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    rowCenter: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    profileCard: {
        width:"70%",
        // fontFamily: 'Lato',
        marginLeft: "1vw",
        marginRight: "1vw",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    profileName: {
        fontSize: 25,
        fontFamily: 'Rock Salt',
        marginTop: 15
    },
    profileTitle: {
        fontSize: 15,
    },
    profileDescription: {
        fontSize: 15,
        margin: "5%"
    },
    grad: {
        background: "linear-gradient(to top, transparent, #151515)",
        width: "100vw",
        height: 300,
    },
    img: {
        // borderRadius:"50%",
        width: 300,
        height: 300,
    }
})
const Profile = ({name, imageURL, title, description, twitter, globe, github, instagram}) => {
    const classes = useStyles();
    return <div className={classes.profileCard}>
        <img className={classes.img} src={imageURL} />
        <div className={classes.profileName}>{name}</div>
        <div className={classes.profileTitle}>{title}</div>
        <div className={classes.profileDescription}>{description}</div>
        <div>
            {twitter ? <>
                <Button
                    href={twitter}
                    target="_blank"
                    >
                    <FontAwesomeIcon className={classes.icon} icon={faTwitter} />
                </Button>
            </> : <></>}
            {globe ? <>
                <Button
                    href={globe}
                    target="_blank"
                    >
                    <FontAwesomeIcon className={classes.icon} icon={faGlobe} />
                </Button>
            </> : <></>}
            {github ? <>
                <Button
                    href={github}
                    target="_blank"
                    >
                    <FontAwesomeIcon className={classes.icon} icon={faGithub} />
                </Button>
            </> : <></>}
            {instagram ? <>
                <Button
                    href={instagram}
                    target="_blank"
                    >
                    <FontAwesomeIcon className={classes.icon} icon={faInstagram} />
                </Button>
            </> : <></>}
        </div>
    </div>;
}
const AboutUs = () => {
    const classes = useStyles();
    return <div className={classes.columnCenter}>
        <div className={classes.title}>AboutUs</div>
        <div className={classes.sub}>We are WAGMI music</div>
        <Profile
            name="Hibikilla"
            imageURL="/image/hibikilla.webp"
            title="artist"
            description='Hibikillaは北海道出身で現在は埼玉県在住のレゲエミュージシャンです。
            日本語DJ（レゲエ界では「DJ」は歌う人）スタイルで1998年から音楽活動をしています。
            「ミュージックマガジン」誌の年間ベスト・アルバム受賞経験、YouTubeで100万View超の曲が3つなどの実績があります。
            育児と仕事に専念するための活動休止期間を経て2020年より活動を再開し、同年「この世界 feat. Dabo」でiTunes Storeレゲエシングルチャート1位を記録、また「Wha Gwaan Midnight feat. Tach-B and Zukie」でAudiusレゲエ部門年間1位を記録。2021年以降も「This World Riddim」でiTunes Storeレゲエアルバムチャート1位、「No Limit feat. Gabby」でiTunes Storeレゲエシングルチャート1位を記録しました。
            2022年3月にはMusic NFT Labelである[WAGMI Music]をローンチ。異なるブロックチェーン上でもNFTを利用できる Omni-chain Music NFT 「Risin’ to the top feat. Laya」や、一つ一つアートワークが異なる Generative Music NFT 「Bad Mind feat. Itaq」など技術面も含めたクリプトアートを意識したMusic NFTをリリースし、同年7月までに総取引量1.9ETHを記録しました。'
            twitter="https://twitter.com/hibikilla30"
            globe="https://linktr.ee/hibikilla"
            />
        <Spacer height={150}/>
        <div className={classes.rowCenter}>
            <Profile
                name="Allegorywrite"
                imageURL="/image/allegorywrite.jpg"
                title="web3 Engineer"
                twitter="https://twitter.com/allegory_write"
                github="https://github.com/allegorywrite"
            />
        </div>
        <Spacer height={100}/>
    </div>;

};

export default AboutUs;