import { Box, Container, Slide, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { kidarkgreen, kigrad, kigreen, zubgback, zubgshadow, zubgtext } from "../../Shared/color";
import gmbg from "../../assets/images/gmbg.jpg";
import logo from "../../assets/logokimi.png";
import Layout from "../../component/Layout/Layout";
import { MoneyOffCsred } from "@mui/icons-material";
import withdraw from '../../assets/kiimages/hand.png';
import order from '../../assets/kiimages/order-now.png';
import dpsthistory from '../../assets/kiimages/transaction-history.png';

function Bonus() {
 
  return (
    <Layout>
      <Box sx={styles.root}>
        <Container className="!h-[100%]  !overflow-auto no-scrollbar " sx={{ background: '#e7e7e7' }}>
          <div className="flex items-center justify-center " style={{ width: '100%', background: kidarkgreen, padding: '15px' }}>
            <Box component="img" src={logo} sx={{ width: "120px", margin: 'auto', }}></Box>
          </div>
      
          <Box sx={{ px: 2, mt:5 , width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', }}>
            <Stack sx={styles.kiNavOuter} component={NavLink} to='/account/income-main/income'>
              <Box sx={styles.kiNavInner}>
                <Box  sx={styles.KiNavImg} className="!text-white"> <MoneyOffCsred/> </Box>
              </Box>
              <Box sx={{ padding: '8px 0px' }}>
                <Typography variant="body1" color="initial" sx={styles.kiNavText}>Direct income</Typography>
              </Box>
            </Stack>
            <Stack sx={styles.kiNavOuter} component={NavLink} to='/account/income-main/cashback'>
              <Box sx={styles.kiNavInner}>
                <Box component='img' src={withdraw} sx={styles.KiNavImg}></Box>
              </Box>
              <Box sx={{ padding: '8px 0px' }}>
                <Typography variant="body1" color="initial" sx={styles.kiNavText}>Cashback Inc</Typography>
              </Box>
            </Stack>
          
            <Stack sx={styles.kiNavOuter} component={NavLink} to='/account/income-main/level-income'>
              <Box sx={styles.kiNavInner}>
                <Box component='img' src={order} sx={styles.KiNavImg}></Box>
              </Box>
              <Box sx={{ padding: '8px 0px' }}>
                <Typography variant="body1" color="initial" sx={styles.kiNavText}>Level Income</Typography>
              </Box>
            </Stack>
         
         
            <Stack sx={styles.kiNavOuter} component={NavLink} to="/account/income-main/roi-income">
              <Box sx={styles.kiNavInner}>
                <Box component='img' src={dpsthistory} sx={styles.KiNavImg}></Box>
              </Box>
              <Box sx={{ padding: '8px 0px' }}>
                <Typography variant="body1" color="initial" sx={styles.kiNavText}>ROI Income</Typography>
              </Box>
            </Stack>
           
          </Box>
       
        </Container >
      </Box >
    </Layout >
  );
}

export default Bonus;

const styles = {
  root: { background: "#F6F7FE", pb: 6 },
  dashboardTitle: {
    textAlign: "center",
    color: "#E71D1E !important",
    fontSize: "21px",
    fontWeight: "500",
  },
  swiperImage: { width: "100%", height: "auto" },
  kiswiperImage: { width: "100%", maxHeight: '30vh', height: "auto", borderRadius: '10px', my: 2 },
  depositWithdrawContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    mt: 4,
    width: "95%",
    marginLeft: "2.5%",
  },
  depositWithdrawIcon: { width: "30px", height: "30px" },
  referralLinkContainer: {
    background: kigreen,
    boxShadow: zubgshadow,
    padding: "15px 15px",
    borderRadius: "5px",
    mb: 2,
    width: "95%",
    marginLeft: "2.5%",
  },
  referralLinkTitle: {
    color: 'white',
    fontSize: "14px",
    fontWeight: "500 !important",
    mb: 1,
  },
  referralLinkInputContainer: { alignItems: "center" },
  referralLinkInput: {
    width: "100%",
    background: "#E7E7E7",
    boxShadow: zubgshadow,
    borderRadius: "5px",
    "&>div>input": { color: kidarkgreen },
  },
  referralLinkButton: { marginLeft: 2, background: kidarkgreen },
  socialButtonsContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    mt: 2,
  },
  telegramButton: {
    fontSize: "14px",
    color: "white !important",
    textTransform: "capitalize",
    fontWeight: "400",
    background: kidarkgreen,
    "&:hover": { background: kigrad },
  },
  supportButton: {
    fontSize: "14px",
    color: "white !important",
    textTransform: "capitalize",
    fontWeight: "400",
    background: kidarkgreen,
    "&:hover": { background: kigrad },
  },
  socialButtonIcon: {
    margin: "auto",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: { fontSize: "30px", "&>path": { color: "white !important" } },
  socialIconinfo: {
    fontSize: "27px",
    margin: "auto",
    "&>path": { color: "white !important" },
  },
  socialButtonText: {
    color: "white !important",
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: "14px",
  },
  gameImage: {
    width: "90px",
    height: "80px",
    position: "absolute",
    top: "-20px",
    right: "0px",
  },
  gameTitle: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#E71D1E !important",
    transition: "all 0.3s",
  },
  gameDescription: {
    fontSize: "15px",
    fontWeight: "400",
    color: "#E71D1E !important",
    mt: 2,
    transition: "all 0.3s",
  },
  userImage: { width: "50px", height: "50px" },
  profileBox: {
    "&>.profile": { width: "80px", height: "80px", borderRadius: "50%" },
    position: "relative",
    mb: "15px",
  },
  stageBox: { width: "100%" },
  stageinner: {
    width: "32%",
    position: "absolute",
    top: "0%",
    left: "0%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  stageinnerTwo: {
    width: "32%",
    position: "absolute",
    top: "-18%",
    left: "34%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  stageinnerThree: {
    width: "32%",
    position: "absolute",
    top: "-4%",
    right: "0%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBox: {
    width: "50px",
    height: "50px",
    position: "absolute",
    top: "-23px",
    left: "-15px",
  },
  thirdimg: {
    width: "70px",
    height: "18px",
    position: "absolute",
    bottom: "0",
    left: "7px",
  },
  name: { color: "#8f5206", fontSize: "13px", fontWeight: 500 },
  rupee: {
    color: "#8f5206",
    fontSize: "13px",
    fontWeight: 500,
    background: "linear-gradient(180deg, #FAE59F 0%, #C4933F 100%)",
    padding: "6px 5px",
    borderRadius: "20px",
  },
  wininfoouter: {
    width: "95%",
    marginLeft: "2.5%",
    // background: zubgwhite,
    padding: "10px 5px",
    mt: "20px",
    borderRadius: "10px",
    boxShadow: zubgshadow,
    backgroundImage: `url(${gmbg})`,
    backgroundSize: "100% 100%",
    position: "relative",
  },
  wininfooutertwo: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "65%",
    // justifyContent: "space-around;",
    "&>img": {
      width: "80px",
      height: "40px",
      borderRadius: "10px",
      border: "1px solid #E71D1E",
      marginRight: "5px",
    },
    "&>div>p:nth-child(1)": {
      color: zubgtext,
      fontSize: "12px",
      fontWeight: "600",
      textAlign: "center",
    },
    "&>div>p:nth-child(2)": {
      color: zubgtext,
      fontSize: "11px",
      fontWeight: "400",
      textAlign: "center",
    },
  },
  wininfoouterone: {
    alignItems: "center",
    justifyContent: "start",
    width: "35%",
    // justifyContent: "space-around;",
    "&>p": { color: zubgtext, ml: "10px", fontSize: "11px", fontWeight: "600" },
  },
  wininfoinner: {
    alignItems: "center",
    justifyContent: "space-between",
    background: zubgback,
    padding: "10px 6px",
    borderRadius: "10px",
    boxShadow: zubgshadow,
    opacity: 0.9,
  },
  winner1: {
    position: "absolute",
    left: "42%",
    top: "31%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  winner2: {
    position: "absolute",
    left: "17%",
    bottom: "32%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  winner3: {
    position: "absolute",
    right: "18%",
    bottom: "28%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  flexbetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between;',
  },
  headertitle: { color: 'red' },
  winbox: {
    background: "#e9e9e9",
    borderRadius: "20px",
    height: "160px",
    marginBottom: "30px",
    position: "relative",
    boxShadow: "0 0.05333rem 0.10667rem #c5c5da42",
  },
  positiongame: {
    position: "absolute",
    top: "10px",
    left: "20px",
    "&>div>p": { fontSize: "12px", fontWeight: 400, color: "white" },
  },
  flexbetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between;',
    flexWrap: 'wrap',
  },
  gameheading: { fontSize: "20px", fontWeight: 700, color: "white" },
  gamemenubox: { padding: '8px 5px', background: kidarkgreen, mt: 2, mb: 2, borderRadius: '10px', width: '100%' },
  gameimgbox: { width: '25%', borderRadius: '10px', },
  gameimg: { width: '120px', maxHeight: '120px', borderRadius: '10px' },
  gamenamebox: { width: '70%', },
  playbutton: { background: kigrad, color: 'white', fontWeight: '600', fontSize: "15px", padding: '5px 30px', width: '100%', mt: 1, },
  maxwin: { background: kigrad, padding: '2px 5px 2px 5px', borderRadius: '5px' },
  kiNavOuter: { width: '22%', borderRadius: 1, border: `1px solid ${kidarkgreen}`, maxWidth: '120px', mb: 2 },
  kiNavInner: { padding: 1, background: kidarkgreen, },
  KiNavImg: { width: '30px', margin: 'auto', },
  kiNavText: { textAlign: 'center', fontSize: '12px', fontWeight: '600' },
  kibutton1: { width: '95%', ml: '2.5%', py: '10px', mb: 2, background: kigreen, color: 'white', '&:hover': { background: kidarkgreen } },
  kiHeadline: { color: kigreen, fontSize: '17px', fontWeight: '600', width: '95%', ml: '2.5%', mb: 2, },
  kiproductbox: { padding: '16px 0px 0px 16px', borderRadius: '10px', background: '#fff', width: '100%', mb: 2, boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;' },
  kiproflex: { alignItems: 'center', justifyContent: 'space-between' },
  kiproductTitle: { fontSize: '14px', fontWeight: '500', mb: 2, },
  kiimageBox: { width: '35%' },
  kiimage: { width: '100%', borderRadius: '10px' },
  kipriceStack: { alignItems: 'center', justifyContent: 'space-between', mb: 1 },
  kipriceLabel: { fontSize: '13px', fontWeight: '500', color: 'gray' },
  kipriceValue: { fontSize: '15px', fontWeight: '600', color: kigreen },
  kipercentageBox: { height: '20px', background: '#d2cdcd', width: '49%', borderRadius: '10px', overflow: 'hidden', position: 'relative' },
  kipercentageLabel: { textAlign: 'center', color: kidarkgreen, fontSize: '13px', fontWeight: '600', position: 'absolute', zIndex: 100, left: '45%', top: '1%' },
  kiprogressBar: { height: '100%', background: kigreen, borderRadius: '0px 30px 30px 0px', position: 'absolute', top: 0, left: 0 },
  kibutton: { width: '49%', borderRadius: '50px 0px 10px 0px', py: 1, px: 0, pl: 2, fontSize: '13px', '&>svg': { fontSize: '20px', mb: '3px' } },
};






