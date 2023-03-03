import { Box, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import Topbar from "../Components/Topbar";
import { 
    setStep,
    getStep,
    mintToken,
    claimNFT,
    includedWhiteList,
} from "../hooks/useTokenInfo";
import useAuth from "../hooks/useAuth";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Button } from "../Components/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="standard" {...props} />;
});

const BackImg = styled(Box)`
    position: relative;
    width: -webkit-fill-available;
    >div >img {
        position: absolute;
        z-index: 10;
        top: 150px;
        right: 50px;
        height: 400px;
        width: 400px;
        @media (max-width: 425px) {
            right: 0px;
        }
    }
`

const NFTList: FC = () => {
    const { account } = useAuth()
    const [page, setPage] = useState(0);
    const [isSearchWhitelist, setIsSearchWhitelist] = useState(false);
    const [isWhitelist, setIsWhitelist] = useState(false);
    const [whitelistAddress, setWhitelistAddress] = useState('');

    const ownerAddr = '0x86A2C457bA9562Feea660f978ab1eEA0026cfda9';

    const[stepVal, setStepVal] = useState(0);
    const[mintBtnCaption, setMintBtnCaption] = useState('Mint NFT');

    const navigate = useNavigate();

    let IPFS_URLS: string[] = ['https://ipfs.infura.io/ipfs/QmVRPyRyp4wGTrG7iEh2eatw4i6HCNJxkYdcGoqnX9xY95',
                                'https://ipfs.infura.io/ipfs/QmcGBumf4Ke5M2fbivoq2D1CLAeWaqayJdbSm67M1LYMkc',
                                'https://ipfs.infura.io/ipfs/QmfRwMmZVBQo2CGvsRJLRuxz3jszwBYfsgGqRBq1gaLNTJ',
                                'https://ipfs.infura.io/ipfs/QmXYakew6vnTRjmGgf5bifUjTgFA322AKbbJUwxx9E29Fq',
                                'https://ipfs.infura.io/ipfs/QmSAL11oaA78xH4KKwpzgsYmnmvw8dDijaE5A5JnTNDZ82',
                                'https://ipfs.infura.io/ipfs/QmWb3cZfodQnzFD6Wit97MoKgF3nTEa4L7jhDvzbKrR8mA'];

    const onClickSetStep = async () => {
        await setStep(2, account);
    }

    const onClickGetStep = async () => {
        const step = await getStep();
        setStepVal(step);
        console.log(step, '<<<<<<<<<<<<get step');
    }

    const getFisherYatesShuffle = () => {
        var arr = [] as any;
        let len = 10000, k , temp;      // k is to generate random index and temp is to swap the values
        for (let i = 0; i < 10000; i++) {
            arr[i] = i;
            k = i + Math.floor(Math.random() * (10000 - i));
            arr[k] = k;
            temp = arr[k];
            arr[k] = arr[i];
            arr[i] = temp;
        }
        console.log(arr, 'shuffle');
        return arr;
    }

    const onClickMint = async () => {
        // await onClickGetStep();

        // let randomIndex = Math.floor(Math.random() * 6);
        // console.log(Math.floor(Math.random() * 6));
        // console.log(IPFS_URLS[randomIndex]);

        let randomIndex = getFisherYatesShuffle();

        // if (stepVal > 0 && stepVal < 4) {
        //     await mintToken(IPFS_URLS[randomIndex], account);
        // } else if (stepVal === 4) {
        //     await claimNFT(account);
        // }
    }
    let caption = '';
    const onClickSearchWhitelist = async () => {
        const val = await includedWhiteList(whitelistAddress);
        setIsSearchWhitelist(true);
        setIsWhitelist(val);
    }

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await getStep();
            return data;
        }

        fetchData().then((step) => {
            if (step == 4) {
                setMintBtnCaption('Claim');
            } else {
                setMintBtnCaption('NFT Mint');
            }
        });
    },[]);
    
    return <Box
        display="flex"
        flexDirection="column"
        width="-webkit-fill-available"
        zIndex="0"
        height={"-webkit-fill-available"}
        style={{background: '#1E1E1E'}}
    >
        <Topbar mode="staking" onChangePage={(page: number)=>{setPage(page)}} />
        <BackImg>
            <img src="img/background.png" alt="background" style={{height: 600, width: '-webkit-fill-available'}} />
            <Box>
                <img src="img/collection.png" alt="background" style={{paddingTop: 70}} />
            </Box>
            <Box style={{position: 'absolute', bottom: -50, left: 0, paddingLeft: 50, width: '-webkit-fill-available', background: 'rgba(11, 10, 12, 0.3)', backdropFilter: "blur(26.117px)"}}>
                <Typography style={{fontSize: 40, fontWeight: 800, paddingTop: 20}}>WELCOME TO THE</Typography>
                <Typography style={{fontSize: 40, fontWeight: 800, paddingBottom: 20, color: 'rgba(207, 254, 0, 1)'}}>VOLTED DRAGONS SAILORS CLUB</Typography>
            </Box>
        </BackImg>
        <Box style={{display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', width: "-webkit-fill-available", marginTop: 100}}>
            <Box style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: "-webkit-fill-available", paddingRight: 50, paddingLeft: 50, flexWrap: 'wrap', gap: 30}}>
                <Typography style={{fontSize: 16, minWidth: 300, fontWeight: 400, flex: 2, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus elementum, placerat libero nec, placerat eros. Nullam mollis, neque ut porttitor aliquam, dui leo fringilla nisi, sit amet sodales tortor diam a velit. Ut mollis vulputate felis vel pharetra. Sed ut nulla porta, consequat ante vel, vestibulum purus. Etiam blandit varius nisl. Sed est sapien, accumsan vel leo at, hendrerit varius felis.</Typography>
                <Box style={{flex: 2, display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: 30, flexWrap: 'wrap'}}>
                    <img src="img/rabbit.png" alt="rabbit" style={{flex: 1, maxWidth: 200}} />
                    <img src="img/bear.png" alt="bear" style={{flex: 1, maxWidth: 200}} />
                </Box>
            </Box>
        </Box>
        <Box style={{marginTop: 18, paddingLeft: 50, paddingRight: 50}}>
            <Typography style={{color: 'rgba(207, 254, 0, 1)', fontSize: 18, fontWeight: 400, marginBottom: 7}}>FAIR DISTRIBUTION</Typography>
            <Typography style={{fontSize: 14, fontWeight: 400, marginBottom: 7}}>(BONDING CURVES ARE A PONZI)</Typography>
            <Typography style={{fontSize: 16, fontWeight: 400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus elementum, placerat libero nec, placerat eros. Nullam mollis, neque ut porttitor aliquam, dui leo fringilla nisi, sit amet sodales tortor diam a velit. Ut mollis vulputate felis vel pharetra. Sed ut nulla porta, consequat ante vel, vestibulum purus. Etiam blandit varius nisl. Sed est sapien, accumsan vel leo at, hendrerit varius felis.</Typography>
        </Box>
        <Box style={{marginTop: 61, marginLeft: 50, marginRight: 50, padding: '23px 26px', flexWrap: 'wrap', gap: 20, display: 'flex', justifyContent: 'space-around', alignItems: 'center', background: 'rgba(207, 254, 0, 1)'}}>
            <Typography style={{fontSize: 18, fontWeight: 800, color: 'black', flex: 1}}>BUY AN VDSC</Typography>
            <Box style={{flex: 2, minWidth: 300}}>
                <Typography style={{fontSize: 14, fontWeight: 400, paddingLeft: 50, color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                <Typography style={{fontSize: 14, fontWeight: 400, paddingLeft: 50, color: 'black'}}>Cras eget lacus elementum, placerat libero nec, placerat eros.</Typography>
            </Box>
            <Box onClick={() => {onClickMint()}} style={{background: 'black', color: 'rgba(207, 254, 0, 1)', padding: '25px 70px', cursor: 'pointer', flex: 1, textAlign: 'center'}}>
                {mintBtnCaption}
            </Box>
        </Box>
        <Box style={{marginTop: 65, paddingLeft: 50, paddingRight: 50, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: 50}}>
            <img src="img/dinosaurs.png" alt="dinosaurs" style={{width: 337, height: 337, maxWidth: 300, flex: 1}} />
            <Box style={{flex: 1, minWidth: 300}}>
                <Typography style={{color: 'rgba(207, 254, 0, 1)', fontSize: 18, fontWeight: 400}}>THE SPECS</Typography>
                <Typography style={{fontSize: 14, fontWeight: 400, marginTop: 7}}>(BONDING CURVES ARE A PONZI)</Typography>
                <Typography style={{fontSize: 16, fontWeight: 400, marginTop: 7}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus elementum, placerat libero nec, placerat eros. Nullam mollis, neque ut porttitor aliquam, dui leo fringilla nisi, sit amet sodales tortor diam a velit. Ut mollis vulputate felis vel pharetra. Sed ut nulla porta, consequat ante vel, vestibulum purus. Etiam blandit varius nisl. Sed est sapien, accumsan vel leo at, hendrerit varius felis.</Typography>
            </Box>
        </Box>
        <Box style={{marginTop: 90, paddingLeft: 50, paddingRight: 50}}>
            <Typography style={{color: 'rgba(207, 254, 0, 1)', fontSize: 18, fontWeight: 400}}>WELCOME O THE CLUB</Typography>
            <Typography style={{fontSize: 14, fontWeight: 400, marginTop: 7}}>(BONDING CURVES ARE A PONZI)</Typography>
            <Typography style={{fontSize: 16, fontWeight: 400, marginTop: 7}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus elementum, placerat libero nec, placerat eros. Nullam mollis, neque ut porttitor aliquam, dui leo fringilla nisi, sit amet sodales tortor diam a velit. Ut mollis vulputate felis vel pharetra. Sed ut nulla porta, consequat ante vel, vestibulum purus. Etiam blandit varius nisl. Sed est sapien, accumsan vel leo at, hendrerit varius felis.</Typography>
        </Box>
        <Box style={{marginTop: 90, paddingLeft: 50, paddingRight: 50, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: 118}}>
            <Box style={{flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Box style={{width: 187, height: 187, background: 'white'}}></Box>
                <Typography style={{fontSize: 16, fontWeight: 400, marginTop: 19}}>Lorem ipsum</Typography>
            </Box>
            <Box style={{flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Box style={{width: 187, height: 187, background: 'white'}}></Box>
                <Typography style={{fontSize: 16, fontWeight: 400, marginTop: 19}}>Lorem ipsum</Typography>
            </Box>
            <Box style={{flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Box style={{width: 187, height: 187, background: 'white'}}></Box>
                <Typography style={{fontSize: 16, fontWeight: 400, marginTop: 19}}>Lorem ipsum</Typography>
            </Box>
            <Box style={{flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Box style={{width: 187, height: 187, background: 'white'}}></Box>
                <Typography style={{fontSize: 16, fontWeight: 400, marginTop: 19}}>Lorem ipsum</Typography>
            </Box>
        </Box>
        <Typography style={{paddingLeft: 50, color: 'rgba(207, 254, 0, 1)', fontSize: 18, fontWeight: 400, marginTop: 100}}>COMMUNITY TOOLS</Typography>
        <Box style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingLeft: 50, paddingRight: 100, flexWrap: 'wrap', gap: 50}}>
            <Typography style={{fontSize: 16, fontWeight: 400, marginLeft: 50, minWidth: 300, flex: 1, paddingLeft: 50, marginTop: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget lacus elementum, placerat libero nec, placerat eros. Nullam mollis, neque ut porttitor aliquam, dui leo fringilla nisi, sit amet sodales tortor diam a velit.</Typography>
            <Box style={{background: '#1E1E1E', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <Box style={{background: 'rgba(207, 254, 0, 1)', color: 'black', padding: '15px 70px', fontSize: 16, fontWeight: 800, cursor: 'pointer'}}>BUTTON</Box>
                <Box style={{background: 'rgba(207, 254, 0, 1)', color: 'black', padding: '15px 70px', fontSize: 16, fontWeight: 800, marginTop: 16, cursor: 'pointer'}}>BUTTON</Box>
            </Box>
        </Box>
        <Box style={{background: 'white', height: 2, width: '-webkit-fill-available', marginLeft: 50, marginRight: 19, marginTop: 167}}></Box>
        <Typography style={{paddingLeft: 50, marginTop: 36, paddingRight: 50}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nibh elementum, pulvinar metus ut, auctor lectus. Phasellus in hendrerit turpis, fringilla varius velit. Suspendisse massa felis, pellentesque eget interdum eu, lacinia non felis. Ut semper, augue malesuada aliquam aliquam.</Typography>
        <Box style={{marginBottom: 67, marginTop: 89, marginLeft: 50, marginRight: 50}}>
            <Typography style={{fontSize: 11, fontWeight: 400}}>GET ON THE LIST</Typography>
            <Box style={{display: 'flex',flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                <Box style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '-webkit-fill-available', flexWrap: 'wrap', gap: 170}}>
                    <Box style={{flex: 2, display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                        <input type="text" value={whitelistAddress} onChange={(event) => {setWhitelistAddress(event.target.value)}} style={{paddingLeft: 20, border: 'none', outline: 'none', width: '-webkit-fill-available', height: '28px', color: 'white', background: 'rgba(77, 77, 77, 0.3)'}} />
                        <img src="img/rightarray.png" onClick={() => {onClickSearchWhitelist()}} alt="array button" style={{width: 36, height: 28, cursor: 'pointer'}} />
                    </Box>
                    <img src="img/logo.png" onClick={() => {navigate('/')}} alt="logo" style={{flex: 1, maxWidth: 127, height: 60, cursor: 'pointer'}} />
                    <Box style={{flex: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center', maxWidth: 140}}>
                        <img src="img/instagram.png" style={{width: '13px', height: '13px', marginLeft: 20, cursor: 'pointer'}} alt="logo" />
                        <img src="img/discord.png" style={{width: '13px', height: '13px', marginLeft: 20, cursor: 'pointer'}} alt="logo" />
                        <img src="img/youtube.png" style={{width: '13px', height: '13px', marginLeft: 20, cursor: 'pointer'}} alt="logo" />
                        <img src="img/twitter.png" style={{width: '13px', height: '13px', marginLeft: 20, cursor: 'pointer'}} alt="logo" />
                    </Box>
                </Box>
                {isSearchWhitelist && <Box style={{marginTop: 10}}>
                    {isWhitelist ? <Typography style={{color: 'white', fontSize: 14, fontWeight: 600}}>You are included in whitelist.</Typography> :
                    <Typography style={{color: 'red', fontSize: 14, fontWeight: 600}}>You aren't included in whitelist.</Typography>}
                </Box>}
            </Box>
        </Box>
        {/* { account === ownerAddr ?
            <Box>
                <Typography style={{margin: '100px 200px'}}>Admin Owner Page</Typography>
                <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography>Please input 1 ~ 3 for Presale and 4 for Claim</Typography>
                    <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                        <Button onClick={() => onClickSetStep()} style={{border: '1px solid black',borderRadius: 10, marginRight: 20, padding: '10px 20px', cursor: 'pointer'}}>Set Step</Button>
                        <input type="text" placeholder="step" style={{height: 30, border: 'none', outline: 'none', background: 'white', color: 'black'}} />
                    </Box>
                </Box>
            </Box> :
            <Box style={{margin: '100px 200px'}}>
                <Typography>User Page</Typography>
                <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    {stepVal > 0 && stepVal < 4 ? <Button onClick={() => onClickMint()} style={{fontSize: 20, padding: '10px 40px'}}>Mint NFT</Button> : 
                     <Button onClick={() => onClickClaim()} style={{fontSize: 20, padding: '10px 40px'}}>Claim</Button>}
                </Box>
            </Box>
        } */}
    </Box>
}

export default NFTList;