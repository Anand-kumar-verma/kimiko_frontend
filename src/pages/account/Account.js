import { Calculate, Coffee, CreditCard, Description, Download, LocalOffer, Lock, PhoneAndroid, Receipt, Shield, ShoppingCart, Spa, Support } from "@mui/icons-material";
import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  Box,
  Button,
  Container,
  Dialog,
  Divider,
  IconButton,
  List, ListItem, ListItemIcon,
  Stack,
  Typography
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../Shared/CustomCircularProgress";
import { kidarkgreen, kigreen, zubgmid, zubgtext } from "../../Shared/color";
import cip from "../../assets/cip.png";
import edit from "../../assets/images/banking.png";
import buy from "../../assets/images/casino.png";
import gift from "../../assets/images/gift-box-with-a-bow.png";
import hand from "../../assets/images/hand.png";
import namer from "../../assets/images/namer.png";
import notification from "../../assets/images/notification (1).png";
import notification1 from "../../assets/images/notification.png";
import bgms from "../../assets/images/playgame.jpg";
import dp1 from "../../assets/images/pr.png";
import balance from "../../assets/images/send.png";
import trans from "../../assets/images/translate.png";
import s from "../../assets/images/wallet (1).png";
import dpt from "../../assets/images/wallet (3).png";
import wtd from "../../assets/images/withdraw.png";
import withdraw from '../../assets/kiimages/hand.png';
import recharge from '../../assets/kiimages/mobile.png';
import profile from "../../assets/kiimages/profile.png";
import logo from "../../assets/logokimi.png";
import sunlotteryhomebanner from "../../assets/sunlotteryhomebanner.jpg";
import Layout from "../../component/Layout/Layout";
import { walletamount } from "../../services/apicalling";
import { baseUrl, fron_end_main_domain } from "../../services/urls";


function Account() {
  const menuItems = [
    { icon: <CreditCard />, text: "Link Bank Account" },
    { icon: <Description />, text: "Terms of Partnership" },
    { icon: <Shield />, text: "Compliance Statement" },
    { icon: <ShoppingCart />, text: "My Order" },
    { icon: <LocalOffer />, text: "My Coupon" },
    { icon: <Receipt />, text: "Bill Record" },
    { icon: <Spa />, text: "Coffee Beans" },
    { icon: <Spa />, text: "Coffee Beans Record" },
    { icon: <Calculate />, text: "Income Calculator" },
    { icon: <Lock />, text: "Reset Password" },
    { icon: <Support />, text: "Customer Service" },
    { icon: <Download />, text: "APP Download" },
  ];
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const transactionId = searchParams?.get("order_id");
  const client = useQueryClient();
  const navigate = useNavigate();
  const [openDialogBoxHomeBanner, setopenDialogBoxHomeBanner] = useState(false);

  const { isLoading, data } = useQuery(["walletamount"], () => walletamount(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    retryOnMount: false,
    refetchOnWindowFocus: false
  });
  const amount = data?.data?.data || 0;

  async function sendUrlCallBackToBackend(transactionId) {
    try {
      const res = await axios.get(
        `${baseUrl}/api/deposit-collback?order_id=${transactionId}`
      );
      if (res?.data?.status === "200") {
        window.location.href = `${fron_end_main_domain}/account`;
      }
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    client.refetchQueries("walletamount");
    if (transactionId) {
      sendUrlCallBackToBackend(transactionId);
    }
  }, []);


  return (
    <Layout>
      <Container sx={style.container}>
        <div className="flex items-center justify-center " style={{ width: '100%', background: kidarkgreen, padding: '15px' }}>
          <Box component="img" src={logo} sx={{ width: "120px", margin: 'auto', }}></Box>
        </div>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2, width: '95%', marginLeft: '2.5%' }}>
          <Box sx={{ width: '49%', p: 1, background: 'white', borderRadius: '10px', '&>p': { textAlign: 'center' }, '&>h6': { textAlign: 'center' } }}>
            <Typography variant="h6" className="kip13" sx={{ color: '#5aaa1e' }}>₹0 </Typography>
            <Typography variant="body1" className="kip13">Recharge Balance</Typography>
          </Box>
          <Box sx={{ width: '49%', p: 1, background: 'white', borderRadius: '10px', '&>p': { textAlign: 'center' }, '&>h6': { textAlign: 'center' } }}>
            <Typography variant="h6" className="kip13" sx={{ color: '#5aaa1e' }}>₹0</Typography>
            <Typography variant="body1" className="kip13">Withdraw Balance</Typography>
          </Box>
        </Box>
        <Box sx={{ flexWrap: 'wrap', background: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2, width: '95%', marginLeft: '2.5%' }}>
          <Box sx={{ width: '49%', p: 1, '&>p': { textAlign: 'center' }, '&>h6': { textAlign: 'center' } }}>
            <Typography variant="h6" className="kip13" sx={{ color: '#5aaa1e' }}>₹0 </Typography>
            <Typography variant="body1" className="kip13">Teams Income</Typography>
          </Box>
          <Box sx={{ width: '49%', p: 1, '&>p': { textAlign: 'center' }, '&>h6': { textAlign: 'center' } }}>
            <Typography variant="h6" className="kip13" sx={{ color: '#5aaa1e' }}>₹0</Typography>
            <Typography variant="body1" className="kip13">Today Income</Typography>
          </Box>
          <Box sx={{ width: '49%', p: 1, '&>p': { textAlign: 'center' }, '&>h6': { textAlign: 'center' } }}>
            <Typography variant="h6" className="kip13" sx={{ color: '#5aaa1e' }}>₹0 </Typography>
            <Typography variant="body1" className="kip13">Total Income</Typography>
          </Box>
          <Box sx={{ width: '49%', p: 1, '&>p': { textAlign: 'center' }, '&>h6': { textAlign: 'center' } }}>
            <Typography variant="h6" className="kip13" sx={{ color: '#5aaa1e' }}>₹0</Typography>
            <Typography variant="body1" className="kip13">Teams Income</Typography>
          </Box>
        </Box>
        <Typography variant="body1" className="kip15" mt={2} sx={{ textAlign: 'center' }}>SHOP LEVEL 0 AGENT</Typography>
        <Box sx={{ mt: 1 }} className="w95 flexs">

          <Box sx={{}}>
            <Box sx={{ width: '80px ', height: '80px', objectFit: 'cover', borderRadius: '50%', }} component='img' src={profile}></Box>
          </Box>
          <Box sx={{ ml: 5 }}>
            <Typography variant="body1" className="kip13" mb={1}>ID : 333962</Typography>
            <Typography variant="body1" className="kip13" mb={1}><PhoneAndroid className="kip13" /> : +915896587458</Typography>
            <Typography variant="body1" className="kip13" mb={1}><Coffee className="kip13" /> : 0 Coffee Beans</Typography>

          </Box>
        </Box>
        <Box sx={{ width: '95%', ml: '2.5%', padding: 2, borderRadius: '10px', background: kidarkgreen, mb: 2, mt: 2 }}>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '12px', mb: 1 }}>
            You are already a <span style={{ color: kigreen, textDecoration: 'underline', fontWeight: '600', fontSize: '13px' }}>SHOP LEVEL 0 AGENT</span> You can withdraw cash <span style={{ color: kigreen, textDecoration: 'underline', fontWeight: '600', fontSize: '13px' }}>0 times </span> a day, with a maximum withdrawal amount of 3,000 Rs each time and a daily withdrawal limit of <span style={{ color: kigreen, textDecoration: 'underline', fontWeight: '600', fontSize: '13px' }}>₹0</span>
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '12px', mb: 1 }}>
            You can continue to purchase other SHOP agent products to improve your level. The higher the level, the more cash you can withdraw every day.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2, width: '95%', marginLeft: '2.5%' }}>
          <Button component={NavLink} sx={{
            width: '49.8%', p: '10px', background: kidarkgreen, color: 'white', '&:hover': {
              backgroundColor: kigreen,
            }, borderRadius: '5px 0px 0px 5px', '&>p': { textAlign: 'center', ml: 2, }, '&>h6': { textAlign: 'center' }
          }}>
            <Box component='img' src={withdraw} sx={{ width: '30px' }}></Box>
            <Typography variant="body1" className="kip13"> Withdraw</Typography>
          </Button>
          <Button component={NavLink} sx={{
            width: '49.8%', p: '10px', background: kidarkgreen, color: 'white', '&:hover': {
              backgroundColor: kigreen,
            }, borderRadius: '0px 5px 5px 0px', '&>p': { textAlign: 'center', ml: 2, }, '&>h6': { textAlign: 'center' }
          }}>
            <Box component='img' src={recharge} sx={{ width: '30px' }}></Box>
            <Typography variant="body1" className="kip13"> Recharge</Typography>
          </Button>
        </Box>

        <Box
          className='w95'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2,
          }}
        >
          <Box
            sx={{
              border: `1px solid ${kigreen}`,
              borderRadius: '5px',
              padding: 1,
              backgroundColor: '#fff',
              textAlign: 'center',
              width: '49%',
            }}
          >
            <Typography variant="h6" className="kip15">
              ₹0
            </Typography>
            <Typography variant="body2" className="kip13" mb={1}>
              Today's Product Income
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: kidarkgreen,
                color: '#fff',
                borderRadius: '5px',
                padding: '7px 0',
                width: '100%',
                fontWeight: 'bold',
              }}
            >
              OBTAIN
            </Button>
          </Box>

          <Box
            sx={{
              border: `1px solid ${kigreen}`,
              borderRadius: '5px',
              padding: 1,
              backgroundColor: '#fff',
              textAlign: 'center',
              width: '49%',
            }}
          >
            <Typography variant="h6" className="kip15">
              ₹0
            </Typography>
            <Typography variant="body2" className="kip13" mb={1}>
              This Month’s Dividends
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: kidarkgreen,
                color: '#fff',
                borderRadius: '5px',
                padding: '7px 0',
                width: '100%',
                fontWeight: 'bold',
              }}
            >
              OBTAIN
            </Button>
          </Box>
        </Box>


        <Box
          className="w95"
          sx={{
            margin: 'auto',
            backgroundColor: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            mt: 2,
          }}
        >
          <List>
            {menuItems.map((item, index) => (
              <>
                <ListItem sx={{ padding: '8px', display: 'flex', justifyContent: 'space-between', color: kidarkgreen, }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ListItemIcon sx={{ color: kidarkgreen, minWidth: '35px !important', }}>
                      {item.icon}
                    </ListItemIcon>
                    <Typography variant="body1" className="kip13">{item.text} </Typography>
                  </Box>
                  <ListItemIcon sx={{ color: kidarkgreen }}>➔</ListItemIcon>
                </ListItem>
                {index < menuItems.length - 1 && <Divider />}
              </>
            ))}
          </List>
        </Box>

        <Button
          variant="contained"
          className="w95"
          sx={{
            width: '100%',
            padding: '8px 0',
            backgroundColor: kidarkgreen,
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: 1,
            mt: 2,
          }}
        >
          LOGOUT
        </Button>

        <Stack direction="row" sx={style.header}>
          <Box sx={style.profileBox}>
            <Box
              component="img"
              src={dp1}
              sx={style.profileImage}
            />
          </Box>
          <Box sx={style.userInfo}>
            <Stack direction="row" alignItems="center">
              <Typography variant="" color="initial" sx={{ mr: 2 }}>
                {amount?.full_name}
              </Typography>
              <Box component="img" src={namer} sx={{ width: "50px" }} />
            </Stack>
            <Typography variant="body1" color="initial" sx={{ mt: 1 }}>
              UID | {amount?.custid || 0}{" "}
              <ContentCopyOutlinedIcon sx={{ fontSize: "15px", ml: 2 }} />
            </Typography>
          </Box>
        </Stack>
        <Box sx={style.balanceContainer}>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Box component="img" src={balance} sx={style.cardImage} />
            <Typography variant="body1" color="initial" sx={style.balanceText}>
              Total Balance
            </Typography>
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center", mt: "10px" }}>
            <Typography variant="body1" color="initial" sx={style.totalBalance}>
              ₹
              {(
                Number(
                  Number(amount?.winning || 0) +
                  Number(amount?.wallet || 0)
                ) || 0
              )?.toFixed(0)}
            </Typography>
            <CachedIcon sx={style.cachedIcon} />
          </Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              mt: "20px",
            }}
          >
            <Box component="img" src={cip} sx={style.cardImage} />
            <Typography variant="body1" color="initial" sx={style.cardNumber}>
              Rererral Code: {amount?.referral_code}
            </Typography>
          </Stack>
        </Box>
        <Box sx={style.actionContainer}>
          <Box sx={style.actionBox} component={NavLink} to="/wallet">
            <Box component="img" src={s} sx={style.actionImage} />
            <Typography variant="body1" color="initial" sx={style.actionText}>
              Wallet
            </Typography>
          </Box>
          <Box sx={style.actionBox} component={NavLink} to="/wallet/Recharge">
            <Box component="img" src={dpt} sx={style.actionImage} />
            <Typography variant="body1" color="initial" sx={style.actionText}>
              Deposit
            </Typography>
          </Box>
          <Box sx={style.actionBox} component={NavLink} to="/Withdrawal">
            <Box component="img" src={wtd} sx={style.actionImage} />
            <Typography variant="body1" color="initial" sx={style.actionText}>
              Withdraw
            </Typography>
          </Box>
          <Box sx={style.actionBox} component={NavLink} to="/rent">
            <Box component="img" src={buy} sx={style.actionImage} />
            <Typography variant="body1" color="initial" sx={style.actionText}>
              Buy History
            </Typography>
          </Box>
          <Box sx={style.actionBox} component={NavLink} to="/add-bank-details">
            <Box component="img" src={edit} sx={style.actionImage} />
            <Typography variant="body1" color="initial" sx={style.actionText}>
              Add Bank
            </Typography>
          </Box>
        </Box>

        <Box sx={style.actionContainertwo}>
          <Stack
            sx={{
              padding: "10px",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <Stack
              component={NavLink}
              to="/notification"
              direction="row"
              sx={{
                borderBottom: `1px solid ${zubgtext}`,
                padding: "10px",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  src={notification}
                  sx={{ width: "20px", height: "20px", marginRight: "10px" }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: zubgtext, fontSize: "13px", fontWeight: "600" }}
                >
                  Notification
                </Typography>
              </Stack>
              <Box>
                <KeyboardDoubleArrowRightIcon
                  sx={{ color: zubgtext, fontSize: "23px", fontWeight: "600" }}
                />
              </Box>
            </Stack>
            <Stack
              component={NavLink}
              to="/gift"
              direction="row"
              sx={{
                borderBottom: `1px solid ${zubgtext}`,
                padding: " 10px 10px 10px 5px",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  src={gift}
                  sx={{ width: "30px", height: "30px", marginRight: "10px" }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: zubgtext, fontSize: "13px", fontWeight: "600" }}
                >
                  Gifts
                </Typography>
              </Stack>
              <Box>
                <KeyboardDoubleArrowRightIcon
                  sx={{ color: zubgtext, fontSize: "23px", fontWeight: "600" }}
                />
              </Box>
            </Stack>
            {/* <Stack
              component={NavLink}
              to="/gamestaticks"
              direction="row"
              sx={{
                borderBottom: `1px solid ${zubgtext}`,
                padding: " 10px 10px 10px 5px",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  src={graph}
                  sx={{ width: "25px", height: "25px", marginRight: "10px" }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: zubgtext, fontSize: "13px", fontWeight: "600" }}
                >
                  Game statistics
                </Typography>
              </Stack>
              <Box>
                <KeyboardDoubleArrowRightIcon
                  sx={{ color: zubgtext, fontSize: "23px", fontWeight: "600" }}
                />
              </Box>
            </Stack> */}
            <Stack
              component={NavLink}
              to="/Language"
              direction="row"
              sx={{
                borderBottom: `1px solid ${zubgtext}`,
                padding: " 10px 10px 10px 5px",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  src={trans}
                  sx={{ width: "25px", height: "25px", marginRight: "10px" }}
                ></Box>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{ color: zubgtext, fontSize: "13px", fontWeight: "600" }}
                >
                  Language
                </Typography>
              </Stack>
              <Box>
                <Typography
                  sx={{ color: zubgtext, fontSize: "13px", fontWeight: "500" }}
                >
                  English
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "95%",
            marginLeft: "2.5%",
            borderRadius: "10px",
            background: zubgmid,
            padding: "10px",
            mt: "20px",
            "&>:nth-child(1)": {
              color: "white",
              fontSize: "15px",
              fontWeight: "600",
              mb: "25px",
            },
          }}
        >
          <Typography variant="body1" color="initial">
            Service center
          </Typography>

          <div className="!w-full !grid !grid-cols-3 !place-items-center">
            {[
              // {
              //   to: "/fund",
              //   name: "Fund Transfer",
              //   logo: balance,
              // },
              {
                to: "/activity",
                name: "Report",
                logo: hand,
              },
              // {
              //   to: "/SettingCenter",
              //   name: "Setting",
              //   logo: setting,
              // },
              {
                to: "/gameNotification",
                name: "Notification",
                logo: notification1,
              },
              // {
              //   to: "/SettingCenter/LoginPassword",
              //   name: "Change Password",
              //   logo: user2,
              // },
              // {
              //   to: "/promotion/customerLine/",
              //   name: "Customer service",
              //   logo: customer,
              // },

            ]?.map((i) => {
              return (
                <Box
                  component={NavLink}
                  to={i.to}
                  sx={{
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: "10px",
                    "&>p": {
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "500",
                      mt: "5px",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={i.logo}
                    sx={{ width: "30px", height: "30px" }}
                  ></Box>
                  <Typography>{i.name}</Typography>
                </Box>
              );
            })}
          </div>
        </Box>
        <Box
          sx={{
            width: "95%",
            marginLeft: "2.5%",
            borderRadius: "10px",
            mt: "20px",
            pb: 5,
          }}
        >
          <Button
            sx={{
              background: zubgtext,
              width: "100%",
              color: "white",
              borderRadius: "10px",
              padding: 1.5,
            }}
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Logout
          </Button>
        </Box>
        {openDialogBoxHomeBanner && (
          <Dialog
            PaperProps={{ width: "500px", height: "500px" }}
            open={openDialogBoxHomeBanner}
          >
            <div>
              <p>
                <IconButton onClick={() => setopenDialogBoxHomeBanner(false)}>
                  <CloseIcon />
                </IconButton>
              </p>
              <p>
                <img src={sunlotteryhomebanner} />
              </p>
            </div>
          </Dialog>
        )}
        <CustomCircularProgress isLoading={isLoading} />
      </Container>
    </Layout>
  );
}

export default Account;

const style = {
  container: { background: '#E7E7E7', mb: "64px" },
  header: {
    alignItems: "center",
    paddingTop: "20px",
    width: "95%",
    margin: "auto",
    mb: 2,
  },
  profileBox: {
    width: "60px",
    height: "60px",
    borderRadius: "20px",
    overflow: "hidden",
  },
  profileImage: { width: "100%", height: "100%", borderRadius: "20px" },
  userInfo: {
    ml: 3,
    "& > :nth-child(1)": {
      fontSize: "18px",
      fontWeight: "600",
      color: zubgtext,
    },
    "& > :nth-child(2)": {
      fontSize: "14px",
      fontWeight: "400",
      color: "white",
      padding: "0px 20px",
      background: zubgmid,
      borderRadius: "20px",
    },
  },
  rankImage: { width: "100px", height: "100px" },
  balanceContainer: {
    backgroundImage: `url(${bgms})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    borderRadius: "10px",
    padding: "20px",
    width: "95%",
    margin: "auto",
    marginTop: "2px",
  },
  balanceText: {
    fontSize: "16px",
    fontWeight: "500",
    color: "white",
    marginLeft: "10px",
  },
  totalBalance: {
    fontSize: "30px",
    fontWeight: "600",
    color: "white",
    marginRight: "10px",
  },
  cachedIcon: { color: "white" },
  cardImage: { width: "50px" },
  cardNumber: { fontSize: "14px", color: "white", marginLeft: "10px" },
  actionContainer: {
    borderRadius: "10px",
    padding: "10px",
    width: "95%",
    margin: "auto",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionBox: { width: "20%" },
  actionImage: { width: "30px", height: "30px", margin: "auto" },
  actionText: {
    color: zubgtext,
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "500",
  },
  actionContainertwo: {
    flexDirection: "column",
    borderRadius: "10px",
    width: "95%",
    margin: "auto",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};
