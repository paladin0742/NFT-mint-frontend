import { useState } from 'react';
import { Box, Typography } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { Button } from "../Components/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import {
    includedWhiteList,
    getStep,
} from '../hooks/useTokenInfo';

const Banner = styled(Box)`
    background: rgba(11, 10, 12, 0.56);
    backdrop-filter: blur(130.56px);
    position: relative;
    >img:first-child {
        width: -webkit-fill-available;
        margin-top: 50px;
    }
    >img:last-child {
        width: -webkit-fill-available;
        margin-top: 50px;
        position: absolute;
        top: -50px;
        left: 35%;
        width: 400px;
        height: 400px;
        @media (max-width: 1200px) {
            top: -30%;
            left: 30%;
        }
        @media (max-width: 1000px) {
            top: -40%;
            left: 25%;
        }
        @media (max-width: 771px) {
            top: -40%;
            left: 20%;
            width: 300px;
            height: 300px;
        }
        @media (max-width: 530px) {
            top: -60%;
            left: 10%;
            width: 300px;
            height: 300px;
        }
        @media (max-width: 425px) {
            top: -60%;
            left: 10%;
            width: 250px;
            height: 250px;
        }
        @media (max-width: 375px) {
            top: -60%;
            left: 10%;
            width: 230px;
            height: 230px;
        }
    }
`;
const Group = styled(Box)`
    position: relative;
    width: 600px;
    height: 187px;
    flex: 3;
    >img {
        position: absolute;
        top: 0;
        left: 0;
        @media (max-width: 1009px) {
            height: 150px;
        }
    }
    >div {
        position: relative;
        >p:first-child {
            position: absolute;
            top: 0;
            left: 0px;
            font-size: 55px;
            font-weight: 400;
            @media (max-width: 1175px) {
                font-size: 40px;
            }
            @media (max-width: 1009px) {
                font-size: 30px;
            }
        }
        >p:nth-child(2) {
            position: absolute;
            top: 70px;
            left: 70px;
            font-size: 55px;
            font-weight: 400;
            @media (max-width: 1175px) {
                font-size: 40px;
            }
            @media (max-width: 1009px) {
                font-size: 30px;
                top: 50px;
            }
        }
        >p:last-child {
            position: absolute;
            top: 140px;
            left: 180px;
            font-size: 55px;
            font-weight: 400;
            @media (max-width: 1175px) {
                font-size: 40px;
            }
            @media (max-width: 1009px) {
                font-size: 30px;
                top: 100px;
            }
        }
    }
`;
const EnterBtn = styled(Box)`
    background: rgba(207, 254, 0, 1);
    color: black;
    padding: 10px 30px;
    max-width: 100px;
    margin-bottom: -10px;
    margin-left: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    cursor: pointer;
    >p {
        font-size: 14px;
        font-weight: 700;    
    }
`;
const Welcome = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
`;
const BigBox = styled(Box)`
    width: 70%;
    @media (max-width: 1100px) {
        width: 90%;
    }
`;
const Footer = styled(Box)`
    margin-bottom: 67px;
    margin-top: 49px;
    height: 100%;
    width: 70%;
    > div > div {
        gap: 170px;
        @media (max-width: 1009px) {
            gap: 100px;
        }
        @media (max-width: 700px) {
            gap: 50px;
        }
    }
    @media (max-width: 1100px) {
        width: 90%;
        margin-bottom: 90px;
    }
`;

const Landing = () => {
    const [isSearchWhitelist, setIsSearchWhitelist] = useState(false);
    const [isWhitelist, setIsWhitelist] = useState(false);
    const [whitelistAddress, setWhitelistAddress] = useState('');

    const { account } = useAuth();
    let navigate = useNavigate();

    const onClickSearchWhitelist = async () => {
        const val = await includedWhiteList(whitelistAddress);
        setIsSearchWhitelist(true);
        setIsWhitelist(val);
    }

    return <Box
        display="flex"
        flexDirection="column"
        width="-webkit-fill-available"
        zIndex="0"
        height={"-webkit-fill-available"}
        style={{background: '#1E1E1E', height: '100%'}}
        >
            <Banner>
                <img src="img/banner.png" alt="banner" />
                <img src="img/dragon.png" alt="dragon" />
            </Banner>
            <Box style={{display: 'flex', justifyContent: 'center', marginTop: 34, flexDirection: 'column', alignItems: 'center'}}>
                <BigBox>
                    <Welcome>
                        <Group>
                            <img src="img/pattern.png" alt="pattern" />
                            <Box>
                                <Typography>WELCOME TO</Typography>
                                <Typography style={{color: 'rgba(207, 254, 0, 1)'}}>VOLTED DRAGONS</Typography>
                                <Typography style={{color: 'rgba(207, 254, 0, 1)'}}>SAILORS CLUB</Typography>
                            </Box>
                        </Group>
                        <EnterBtn>
                            <Typography onClick={() => navigate("/NFTList")}>ENTER</Typography>
                            <img src="img/rightarray.png" alt="right arrow" style={{width: 32, height: 32}} />
                        </EnterBtn>
                    </Welcome>
                    <Box style={{background: 'rgba(255, 255, 255, 1)', height: 2, width: '-webkit-fill-available', marginTop: 70}}></Box>
                    <Typography style={{color: 'rgba(255, 255, 255, 1)', fontSize: 14, fontWeight: 500, marginTop: 36}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nibh elementum, pulvinar metus ut, auctor lectus. Phasellus in hendrerit turpis, fringilla varius velit. Suspendisse massa felis, pellentesque eget interdum eu, lacinia non felis. Ut semper, augue malesuada aliquam aliquam.</Typography>
                </BigBox>
                <Footer>
                    <Typography style={{fontSize: 11, fontWeight: 400}}>GET ON THE LIST</Typography>
                    <Box style={{display: 'flex',flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
                        <Box style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '-webkit-fill-available', flexWrap: 'wrap'}}>
                            <Box style={{flex: 2, display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                                <input type="text" value={whitelistAddress} onChange={(event) => {setWhitelistAddress(event.target.value)}} style={{paddingLeft: 20, border: 'none', outline: 'none', width: '-webkit-fill-available', height: '28px', color: 'white', background: 'rgba(77, 77, 77, 0.3)'}} />
                                <img src="img/rightarray.png" onClick={() => {onClickSearchWhitelist()}} alt="array button" style={{width: 36, height: 28, cursor: 'pointer'}} />
                            </Box>
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
                </Footer>
            </Box>
    </Box>
}

export default Landing;