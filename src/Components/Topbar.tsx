import { Box, Button as MuiButton, Typography } from "@mui/material";

import { FC, useState } from "react";
import useAuth from "../hooks/useAuth";
import { shortAddr } from "../utils/calculation";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "./Global";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
    mode?: string;
    onChangePage: (page: number) => void
}

const Topbar: FC<SidebarProps> = (props: SidebarProps) => {
    const { account, logout, login } = useAuth();
    const [open, setOpen] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false);

    const navigate = useNavigate();

    const copyAddress = () => {
        navigator.clipboard.writeText(account || "")
    }

    return <Box position="relative" width="-webkit-fill-available" zIndex="20">
        <Box
            display="flex"
            alignItems="center"
            py="7px"
            height="100%"
            bgcolor="black"
            width="-webkit-fill-available"
            color="#FCF686"
            justifyContent={'space-around'}
            zIndex="20"
        >
            <img src="img/logo.png" onClick={() => {navigate('/NFTList')}} style={{width: '127px', height: '60px', marginTop: 5, cursor: 'pointer'}} alt="logo" />
            <DesktopMenu>
                <Typography style={{color: 'white', fontSize: 10, fontWeight: 800, cursor: 'pointer'}}>BUY AN VDSC</Typography>
                <Typography style={{color: 'white', marginLeft: 30, fontSize: 10, fontWeight: 800, cursor: 'pointer'}}>ROADMAP</Typography>
                <Typography style={{color: 'white', marginLeft: 30, fontSize: 10, fontWeight: 800, cursor: 'pointer'}}>TEAM</Typography>
                <Typography style={{color: 'white', marginLeft: 30, fontSize: 10, fontWeight: 800, cursor: 'pointer'}}>GALLERY</Typography>
                <Typography style={{color: 'white', marginLeft: 30, fontSize: 10, fontWeight: 800, cursor: 'pointer'}}>PROVENANCE</Typography>
                <Typography style={{color: 'white', marginLeft: 30, fontSize: 10, fontWeight: 800, cursor: 'pointer'}}>MEMBERS</Typography>
            </DesktopMenu>
            <Box style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <MobileMenu>
                    <Typography onClick={() => setMobileMenu(!mobileMenu)} style={{cursor: 'pointer', fontWeight: 800}}>|||</Typography>
                    {mobileMenu && <Box style={{borderRadius: 10, background: '#212121', padding: 20, position: 'absolute', top: 30, left: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Typography style={{color: 'white', fontSize: 10, fontWeight: 800, cursor: 'pointer'}}>BUY AN VDSC</Typography>
                        <Typography style={{color: 'white', fontSize: 10,marginTop: 10, fontWeight: 800, cursor: 'pointer'}}>ROADMAP</Typography>
                        <Typography style={{color: 'white', fontSize: 10,marginTop: 10, fontWeight: 800, cursor: 'pointer'}}>TEAM</Typography>
                        <Typography style={{color: 'white', fontSize: 10,marginTop: 10, fontWeight: 800, cursor: 'pointer'}}>GALLERY</Typography>
                        <Typography style={{color: 'white', fontSize: 10,marginTop: 10, fontWeight: 800, cursor: 'pointer'}}>PROVENANCE</Typography>
                        <Typography style={{color: 'white', fontSize: 10,marginTop: 10, fontWeight: 800, cursor: 'pointer'}}>MEMBERS</Typography>
                    </Box>}
                </MobileMenu>
                <SocialLink>
                    <img src="img/instagram.png" style={{width: '13px', height: '13px', marginLeft: 20, cursor: 'pointer'}} alt="logo" />
                    <img src="img/discord.png" style={{width: '13px', height: '13px', marginLeft: 20, cursor: 'pointer'}} alt="logo" />
                    <img src="img/youtube.png" style={{width: '13px', height: '13px', marginLeft: 20, cursor: 'pointer'}} alt="logo" />
                    <img src="img/twitter.png" style={{width: '13px', height: '13px', marginLeft: 20, cursor: 'pointer'}} alt="logo" />
                </SocialLink>
                <ConnectWallet>
                    {props.mode === "staking" && !account &&
                        <Button style={{ fontWeight: 'bold', color: 'black', background: 'yellow' }} onClick={login}>Connect Wallet</Button>
                    }
                    {props.mode === "staking" && account &&
                        <Box display="flex" fontSize="15px" alignItems="center" style={{ cursor: 'pointer' }} position="relative" onClick={() => { setOpen(!open) }}>
                            <Box >{shortAddr(account || "")}</Box>
                            <Box position="absolute" color="#FCF686" display={open ? "flex" : "none"} alignItems="flex-start" flexDirection="column" borderRadius="6px" p="1vw" pr="1.5vw" left="-40%" width="150%" boxShadow="5px 4px 13px 7px #000000" top="calc(100% + 1vw)" bgcolor="#202020" zIndex={10}>
                                <Box component={MuiButton} color="#FCF686" style={{ textTransform: 'none' }} onClick={copyAddress} startIcon={<ContentCopyIcon />}>Copy Address</Box>
                                <MuiButton
                                    color="inherit"
                                    style={{ textTransform: 'none' }}
                                    startIcon={<OpenInNewIcon />}
                                    href={`https://etherscan.io/address/${account}`}
                                    target="_blank"
                                >
                                    View on Explorer
                                </MuiButton>
                                <Box component={MuiButton} color="#FCF686" style={{ textTransform: 'none' }} startIcon={<LogoutIcon />} onClick={logout} >Disconnect</Box>
                            </Box>
                        </Box>
                    }
                </ConnectWallet>
            </Box>
        </Box>
    </Box>
}

const ConnectWallet = styled(Box)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 10;
    margin-left: 30px;
    @media (max-width: 450px) {
        display: none;
    }
`;

const SocialLink = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1030px) {
        display: none;
    }
`;

const DesktopMenu = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
	@media (max-width: 888px) {
		display: none;
	}
    >p:hover {
        color: yellow !important;
    }
`

const MobileMenu = styled(Box)`
    padding-bottom: 4px;
    position: relative;
    margin-right: 30px;
	@media (min-width: 888px) {
		display: none;
	}
`

export default Topbar;