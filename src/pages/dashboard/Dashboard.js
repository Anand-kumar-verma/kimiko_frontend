import StartIcon from '@mui/icons-material/ArrowRightAlt';
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, Button, Container, Dialog, DialogContent, Slide, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import copy from "clipboard-copy";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { checkTokenValidity } from "../../Shared/CookieStorage";
import CustomCircularProgress from "../../Shared/CustomCircularProgress";
import { gray, kidarkgreen, kigrad, kigreen, zubgback, zubgshadow, zubgtext } from "../../Shared/color";
import gmbg from "../../assets/images/gmbg.jpg";

import logo from "../../assets/logokimi.png";
import Layout from "../../component/Layout/Layout";
import {
  please_reconnect_the_serverFun,
  waitingAviatorFun,
} from "../../redux/slices/counterSlice";
import {
  get_user_data_fn,
  GetProductListFn,
  walletamount
} from "../../services/apicalling";
import {
  endpoint,
  fron_end_main_domain,
  support_mail,
  telegram_url
} from "../../services/urls";

import { Close, CurrencyExchangeTwoTone, NavigateNextRounded } from "@mui/icons-material";
import SwipeRightAltRoundedIcon from '@mui/icons-material/SwipeRightAltRounded';
import solor from '../../Kimassets/images/service-5.jpg';
import kislider1 from '../../assets/kiimages/banner1.jpg';
import kislider2 from '../../assets/kiimages/banner2.jpg';
import kislider3 from '../../assets/kiimages/banner3.jpg';
import bonus from '../../assets/kiimages/bonus.png';
import task from '../../assets/kiimages/clipboard.png';
import coffeem1 from '../../assets/kiimages/coffeem1.jpg';
import withdraw from '../../assets/kiimages/hand.png';
import about from '../../assets/kiimages/messages.png';
import recharge from '../../assets/kiimages/mobile.png';
import wdrlhistory from '../../assets/kiimages/order-history.png';
import order from '../../assets/kiimages/order-now.png';
import dpsthistory from '../../assets/kiimages/transaction-history.png';
import wingo from '../../assets/kiimages/wingo.png';
import Notification from './Notification';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Dashboard() {
  const dispatch = useDispatch();
  const aviator_login_data = useSelector(
    (state) => state.aviator.aviator_login_data
  );

  const isAvailableUser = sessionStorage.getItem("isAvailableUser");
  const navigate = useNavigate();
  const [poicy, setpoicy] = React.useState(false);
  const [type_of_game, settype_of_game] = React.useState("");
  const [winnner_data, setwinnerdata] = useState([]);
  const [openbannerurl, setopenbannerurl] = useState("");
  const [loding, setloding] = useState(false);
  const [lodingBanner, setlodingBanner] = useState(false);


  useEffect(() => {
    if (!checkTokenValidity()) {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/";
    }
  }, []);

  const functionTOCopy = (value) => {
    copy(value);
    toast.success("Copied to clipboard!");
  };

  const top11WinnerFunction = async () => {
    setloding(true);
    try {
      const response = await axios.get(`${endpoint.top11winner}`);
      setwinnerdata(response?.data?.data);
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
    setloding(false);
  };

  useEffect(() => {
    top11WinnerFunction();
  }, []);

  const { isLoading, data } = useQuery(["walletamount"], () => walletamount(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,

  });

  const newdata = data?.data?.data || 0;

  useEffect(() => {
    openbannerFunction();
    localStorage.removeItem("amount_set");
    localStorage.removeItem("Deposit_type");
    localStorage.removeItem("server_provider");
  }, []);

  const openbannerFunction = async () => {
    setlodingBanner(true);
    try {
      const response = await axios.get(`${endpoint.openbannerUrl}`);
      setopenbannerurl(response?.data?.image);
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
    setlodingBanner(false);
  };
  const initialValues = {
    referrel_code: `${fron_end_main_domain}/register?ref=${newdata?.referral_code}`,
  };

  const fk = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: () => {
      console.log("This is handle submit");
    },
  });

  const handleClosepolicy = () => {
    setpoicy(false);
    sessionStorage.removeItem("isAvailableUser");
  };
  useEffect(() => {
    if (isAvailableUser) {
      // setpoicy(true);
    }
  }, []);

  useEffect(() => {
    dispatch(waitingAviatorFun(true));
    dispatch(please_reconnect_the_serverFun(false));
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    !aviator_login_data && get_user_data_fn(dispatch);
  }, []);


  const {data:product } = useQuery(
    ["product_list"],
    () => GetProductListFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );

  const products = product?.data?.data || [];


  return (
    <Layout>
      <Box sx={styles.root}>
        <Container className="!h-[100%] !overflow-auto no-scrollbar " sx={{ background: '#e7e7e7' }}>
          <div className="flex items-center justify-center " style={{ width: '100%', background: kidarkgreen, padding: '15px' }}>
            <Box component="img" src={logo} sx={{ width: "120px", margin: 'auto', }}></Box>
          </div>
          <Box className="w95">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{ delay: 25000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwipertwo"
            >
              <SwiperSlide>
                <Box
                  component="img"
                  src={kislider1}
                  alt="Slide 1"
                  sx={styles.kiswiperImage}

                />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src={kislider2}
                  alt="Slide 2"
                  sx={styles.kiswiperImage}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component="img"
                  src={kislider3}
                  alt="Slide 3"
                  sx={styles.kiswiperImage}
                />
              </SwiperSlide>
            </Swiper>
          </Box>
          <Box sx={{ px: 2, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', }}>
            <Stack sx={styles.kiNavOuter} component={NavLink} to='/wallet/Recharge'>
              <Box sx={styles.kiNavInner}>
                <Box component='img' src={recharge} sx={styles.KiNavImg}></Box>
              </Box>
              <Box sx={{ padding: '8px 0px' }}>
                <Typography variant="body1" color="initial" sx={styles.kiNavText}>Recharge</Typography>
              </Box>
            </Stack>
            <Stack sx={styles.kiNavOuter} component={NavLink} to='/Withdrawal'>
              <Box sx={styles.kiNavInner}>
                <Box component='img' src={withdraw} sx={styles.KiNavImg}></Box>
              </Box>
              <Box sx={{ padding: '8px 0px' }}>
                <Typography variant="body1" color="initial" sx={styles.kiNavText}>Withdraw</Typography>
              </Box>
            </Stack>
            <Stack sx={styles.kiNavOuter} component={NavLink} to='/income'>
              <Box sx={styles.kiNavInner}>
                <Box component='img' src={bonus} sx={styles.KiNavImg}></Box>
              </Box>
              <Box sx={{ padding: '8px 0px' }}>
                <Typography variant="body1" color="initial" sx={styles.kiNavText}>Bonus</Typography>
              </Box>
            </Stack>
            </Box>
            <Box sx={{ px: 2, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', }}>
            <Stack sx={styles.kiNavOuter} component={NavLink} to='/rent'>
              <Box sx={styles.kiNavInner}>
                <Box component='img' src={order} sx={styles.KiNavImg}></Box>
              </Box>
              <Box sx={{ padding: '8px 0px' }}>
                <Typography variant="body1" color="initial" sx={styles.kiNavText}>Order</Typography>
              </Box>
            </Stack>
        <Stack sx={styles.kiNavOuter} component={NavLink} to="/depositHistory">
              <Box sx={styles.kiNavInner}>
                <Box component='img' src={dpsthistory} sx={styles.KiNavImg}></Box>
              </Box>
              <Box sx={{ padding: '8px 0px' }}>
                <Typography variant="body1" color="initial" sx={styles.kiNavText}>DPST HTRY</Typography>
              </Box>
            </Stack>
            <Stack sx={styles.kiNavOuter} component={NavLink} to="/withdravalHistory">
              <Box sx={styles.kiNavInner}>
                <Box component='img' src={wdrlhistory} sx={styles.KiNavImg}></Box>
              </Box>
              <Box sx={{ padding: '8px 0px' }}>
                <Typography variant="body1" color="initial" sx={styles.kiNavText}>WDRL HTRY</Typography>
              </Box>
            </Stack>
          </Box>
          <Button variant="outlined" sx={styles.kibutton1} startIcon={<CurrencyExchangeTwoTone />}>Solor Energy Exchange</Button>
          <Box sx={styles.referralLinkContainer}>
            <Typography variant="body1" sx={styles.referralLinkTitle}>
              Referral Link
            </Typography>
            <Stack direction="row" sx={styles.referralLinkInputContainer}>
              <TextField
                className="dbinput"
                fullWidth
                id="referrel_code"
                name="referrel_code"
                value={fk.values.referrel_code}
                sx={styles.referralLinkInput}
              />
              <Button
                variant="contained"
                sx={styles.referralLinkButton}
                onClick={() => functionTOCopy(fk.values.referrel_code)}
              >
                Copy
              </Button>
            </Stack>
            <Stack direction="row" sx={styles.socialButtonsContainer}>
              <Button
                className="telegrambtn"
                sx={styles.telegramButton}
                onClick={() => window.open(`${telegram_url}`, "_blank")}
              >
                <Stack>
                  <Box sx={styles.socialButtonIcon}>
                    <TelegramIcon sx={styles.socialIcon} />
                  </Box>
                  <Box sx={styles.socialButtonText}>Telegram</Box>
                </Stack>
              </Button>

              <Button className="supportbtn" sx={styles.supportButton}>
                <a href={`mailto:${support_mail}`}>
                  <Stack>
                    <HelpOutlineIcon sx={styles.socialIconinfo} />
                    <Box sx={styles.socialButtonText}>Support</Box>
                  </Stack>
                </a>
              </Button>
            </Stack>
          </Box>
          <Box sx={{ ...styles.flexbetween, ...styles.gamemenubox }} className="w95">
            <Box sx={{ ...styles.gameimgbox }}>
              <Box component='img' src={solor} sx={{ ...styles.gameimg }}></Box>
            </Box>
            <Box sx={{ ...styles.gamenamebox }}>
              <Box sx={{ ...styles.flexbetween }}>
                <Typography variant="h6" sx={{ fontWeight: '700', color: 'white' }} >Solor Energy</Typography>
              </Box>
              <Box sx={{ ...styles.flexbetween, my: 1, ...styles.maxwin }}>
                <Typography variant="body2" className="kip13" SX={{ textAlign: 'center' }}>The Highest Income in History</Typography>
                <Typography variant="body2" className="kip15" sx={{ color: 'white', fontWeight: '600', textAlign: 'center' }}>9856.66</Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              color="primary"
              className="blinking-button"
              sx={{ ...styles.playbutton }}
              onClick={() => navigate('/menu')}
            >
              Rent Now <StartIcon ml={2} />
            </Button>
          </Box>
          <Box sx={{ ...styles.flexbetween, ...styles.gamemenubox }} className="w95">
            <Box sx={{ ...styles.gameimgbox }}>
              <Box component='img' src={wingo} sx={{ ...styles.gameimg }}></Box>
            </Box>
            <Box sx={{ ...styles.gamenamebox }}>
              <Box sx={{ ...styles.flexbetween }}>
                <Typography variant="h6" sx={{ fontWeight: '700', color: 'white' }} >Win Go</Typography>
              </Box>
              <Box sx={{ ...styles.flexbetween, my: 1, ...styles.maxwin }}>
                <Typography variant="body2" className="kip13" SX={{ textAlign: 'center' }}>The Highest Bonus in History</Typography>
                <Typography variant="body2" className="kip15" sx={{ color: 'white', fontWeight: '600', textAlign: 'center' }}>98456.66</Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              color="primary"
              className="blinking-button"
              sx={{ ...styles.playbutton }}
              onClick={() => navigate('/win')}
            >
              Play Now <StartIcon ml={2} />
            </Button>
          </Box>
          <Box sx={{ width: '95%', ml: '2.5%', padding: 2, borderRadius: '10px', background: kidarkgreen, mb: 2 }}>
            <Typography variant="body1" sx={{ color: 'white', fontSize: '12px', mb: 1 }}>
              You are already a <span style={{ color: kigreen, textDecoration: 'underline', fontWeight: '600', fontSize: '13px' }}>SHOP LEVEL 0 AGENT</span> You can withdraw cash <span style={{ color: kigreen, textDecoration: 'underline', fontWeight: '600', fontSize: '13px' }}>0 times </span> a day, with a maximum withdrawal amount of 3,000 Rs each time and a daily withdrawal limit of <span style={{ color: kigreen, textDecoration: 'underline', fontWeight: '600', fontSize: '13px' }}>₹0</span>
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', fontSize: '12px', mb: 1 }}>
              You can continue to purchase other SHOP agent products to improve your level. The higher the level, the more cash you can withdraw every day.
            </Typography>
          </Box>
          <Typography variant="body1" color="initial" sx={styles.kiHeadline}><SwipeRightAltRoundedIcon /> Level Product</Typography>
          <Box sx={{ width: '95%', ml: '2.5%', mb: 5 }}>
            {
              products?.map((item) => (
                <Box sx={styles.kiproductbox}>
                  <Typography variant="body1" color="initial" sx={styles.kiproductTitle}>
                    {item?.m_pack_name}
                  </Typography>
                  <Stack direction={'row'} sx={styles.kiproflex}>
                    <Box sx={styles.kiimageBox}>
                      <Box component={'img'} src={coffeem1} sx={styles.kiimage}></Box>
                    </Box>
                    <Box sx={{ width: '55%', mr: 2 }}>
                      <Stack direction={'row'} sx={styles.kipriceStack}>
                        <Typography variant="body2" sx={styles.kipriceLabel}>Price :</Typography>
                        <Typography variant="body1" sx={styles.kipriceValue}> ₹ {item?.m_pack_fee || 0}</Typography>
                      </Stack>
                      <Stack direction={'row'} sx={styles.kipriceStack}>
                        <Typography variant="body2" sx={styles.kipriceLabel}>Cycle :</Typography>
                        <Typography variant="body1" sx={styles.kipriceValue}> {item?.m_pack_roi_days || 0} Days</Typography>
                      </Stack>
                      <Stack direction={'row'} sx={styles.kipriceStack}>
                        <Typography variant="body2" sx={styles.kipriceLabel}>Total :</Typography>
                        <Typography variant="body1" sx={styles.kipriceValue}>₹ {item?.m_total_income || 0}  </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                  <Stack direction={'row'} sx={{ mt: 2, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={styles.kipercentageBox}>
                      <Typography variant="body1" color="initial" sx={styles.kipercentageLabel}></Typography>
                      <Box sx={{ ...styles.kiprogressBar }}></Box>
                    </Box>
                    <Button onClick={() => navigate(`/menu/menu-details/${item?.m_pack_id}`)} sx={styles.kibutton} variant="contained">Rent Now {item.date} <NavigateNextRounded /></Button>
                  </Stack>
                </Box>
              ))
            }
          </Box >
          
          
          {
            poicy && !lodingBanner && (
              <Dialog
                open={poicy}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClosepolicy}
                aria-describedby="alert-dialog-slide-description"
               
              >
                
                <DialogContent style={{ background: kidarkgreen }}>
                  {!openbannerurl ||
                    openbannerurl === "" ? (
                    <Notification handleClosepolicy={handleClosepolicy} />
                  ) : (
                    <img src={openbannerurl} className="w-[100%] h-[100%]" alt="" />
                  )}
                </DialogContent>
              </Dialog>
            )
          }


        </Container >
      </Box >
      <CustomCircularProgress isLoading={isLoading || isLoading} />
    </Layout >
  );
}

export default Dashboard;

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
  kiNavOuter: { width: '52%', borderRadius: 1, border: `1px solid ${kidarkgreen}`, maxWidth: '150px', mb: 2 },
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






