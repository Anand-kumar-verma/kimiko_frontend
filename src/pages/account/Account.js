import { CreditCard, Description, Download, Lock, PhoneAndroid, ShoppingCart, Support } from "@mui/icons-material";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TranslateIcon from '@mui/icons-material/Translate';
import {
  Box,
  Button,
  Container,
  Divider,
  List, ListItem, ListItemIcon,
  Typography
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../Shared/CustomCircularProgress";
import { kidarkgreen, kigreen, zubgmid, zubgtext } from "../../Shared/color";
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import bgms from "../../assets/images/playgame.jpg";
import withdraw from '../../assets/kiimages/hand.png';
import recharge from '../../assets/kiimages/mobile.png';
import profile from "../../assets/kiimages/profile.png";
import logo from "../../assets/logokimi.png";
import Layout from "../../component/Layout/Layout";
import { MyProfileDataFn, SelIncomefFn, walletamount } from "../../services/apicalling";
import { baseUrl, fron_end_main_domain } from "../../services/urls";


function Account() {
  const menuItems = [
    { path: '/add-bank-details', icon: <CreditCard />, text: "Link Bank Account" },
    { path: '/add-bank-details/pre-added-bank-details', icon: <Description />, text: "Bank Account" },
    // { path: '#', icon: <Shield />, text: "Compliance Statement" },
    { path: '/rent', icon: <ShoppingCart />, text: "My Order" },
    // { path: '#', icon: <LocalOffer />, text: "My Coupon" },
    { path: '/Language', icon: <TranslateIcon />, text: "Language" },
    { path: '/gameNotification',icon: <NotificationsActiveIcon /> , text: "Notification" },
    // { path: '/notification', icon: <Receipt />, text: "Game Notification" },
    // { path: '#', icon: <Calculate />, text: "Income Calculator" },
    { path: '/SettingCenter/LoginPassword', icon: <Lock />, text: "Reset Password" },
    { path: '#', icon: <Support />, text: "Customer Service" },
    { path: '#', icon: <Download />, text: "APP Download" },
  ];

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const transactionId = searchParams?.get("order_id");
  const client = useQueryClient();
  const navigate = useNavigate();

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

  const { data: profiled } = useQuery(
    ["myprofile"],
    () => MyProfileDataFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );

  const result = profiled?.data?.data || [];


  const { data: self } = useQuery(
    ["selfincome"],
    () => SelIncomefFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );

  const income = self?.data?.data || [];

  return (
    <Layout>
      <Container sx={style.container}>
        <div className="flex items-center justify-center " style={{ width: '100%', background: kidarkgreen, padding: '15px' }}>
          <Box component="img" src={logo} sx={{ width: "120px", margin: 'auto', }}></Box>
        </div>
        <Box sx={{ display: 'flex', gap:"10px" ,alignItems: 'center', justifyContent: 'space-between', mt: 2, width: '95%', marginLeft: '2.5%' }}>
          <Box sx={{ width: '49%', p: 1, background: 'white', borderRadius: '10px', '&>p': { textAlign: 'center' }, '&>h6': { textAlign: 'center' } }}>
            <Typography variant="h6" className="kip13" sx={{ color: '#5aaa1e' }}>₹ {Number(income?.total_deposit)?.toFixed(0,2) || 0}</Typography>
            <Typography variant="body1" className="kip13">Recharge Balance</Typography>
          </Box>
          <Box sx={{ width: '49%', p: 1, background: 'white', borderRadius: '10px', '&>p': { textAlign: 'center' }, '&>h6': { textAlign: 'center' } }}>
            <Typography variant="h6" className="kip13" sx={{ color: '#5aaa1e' }}>₹ {Number(income?.self_total_income )?.toFixed(0,2) || 0} </Typography>
            <Typography variant="body1" className="kip13">Self Total Income</Typography>
          </Box>
          <Box sx={{ width: '49%', p: 1, background: 'white', borderRadius: '10px', '&>p': { textAlign: 'center' }, '&>h6': { textAlign: 'center' } }}>
            <Typography variant="h6" className="kip13" sx={{ color: '#5aaa1e' }}>₹ {Number(income?.total_withdrawl) ?.toFixed(0,2) || 0}</Typography>
            <Typography variant="body1" className="kip13">Withdrawal Balance</Typography>
          </Box>
        </Box>
        <Box sx={{ flexWrap: 'wrap', background: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2, width: '95%', marginLeft: '2.5%' }}>
          <Box sx={{ width: '49%', p: 1, '&>p': { textAlign: 'center' }, '&>h6': { textAlign: 'center' } }}>
            <Typography variant="h6" className="kip13" sx={{ color: '#5aaa1e' }}>₹ {Number(income?.team_total_income) ?.toFixed(0,2) || 0}</Typography>
            <Typography variant="body1" className="kip13">Team Total Income</Typography>
          </Box>
          <Box sx={{ width: '49%', p: 1, '&>p': { textAlign: 'center' }, '&>h6': { textAlign: 'center' } }}>
            <Typography variant="h6" className="kip13" sx={{ color: '#5aaa1e' }}> ₹ {Number(income?.team_total_income_today)?.toFixed(0,2) || '0.00'}</Typography>
            <Typography variant="body1" className="kip13">Team Total Income Today </Typography>
          </Box>
         </Box>
        <Box sx={{ flexWrap: 'wrap', background: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2, width: '95%', marginLeft: '2.5%' }}>
         
          <Box sx={{ width: '100%', p: 1, '&>p': { textAlign: 'center' }, '&>h6': { textAlign: 'center' } }}>
            <Typography variant="h6" className="kip13" sx={{ color: '#5aaa1e' }}>₹ {Number(income?.self_total_income_today )?.toFixed(0,2) || 0}</Typography>
            <Typography variant="body1" className="kip13">Self Total Income Today</Typography>
          </Box>
        
        </Box>
      
        <Typography variant="body1" className="kip15" mt={2} sx={{ textAlign: 'center' }}>{result?.full_name}</Typography>
        <Box sx={{ mt: 1 }} className="w95 flexs">

          <Box sx={{}}>
            <Box sx={{ width: '80px ', height: '80px', objectFit: 'cover', borderRadius: '50%', }} component='img' src={profile}></Box>
          </Box>
          <Box sx={{ ml: 5 }}>
            <Typography variant="body1" className="kip13" mb={1}>ID : {result?.custid}</Typography>
            <Typography variant="body1" className="kip13" mb={1}><PhoneAndroid className="kip13" /> : +91{result?.mobile}</Typography>
            <Typography variant="body1" className="kip13" mb={1}><EnergySavingsLeafIcon className="kip13" /> : {result?.email}</Typography>

          </Box>
        </Box>
        <Box sx={{ width: '95%', ml: '2.5%', padding: 2, borderRadius: '10px', background: kidarkgreen, mb: 2, mt: 2 }}>
         <p className="text-center text-white pb-2 font-bold"> Terms & Conditions</p>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '12px' }}>
         Withdrawal Timing :  <span style={{ color: kigreen, textDecoration: 'underline', fontWeight: '600', fontSize: '13px' }}>Mon to Fri (10 AM to 6 PM)</span> <br/> Arrival in 2 : <span style={{ color: kigreen, textDecoration: 'underline', fontWeight: '600', fontSize: '13px' }}>36 Hrs .</span>
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '12px', mb: 1 }}>
          Withdrawal Charge : <span style={{ color: kigreen, textDecoration: 'underline', fontWeight: '600', fontSize: '13px' }}> 5 %  </span> <br/> Minimum Withdrawal: <span style={{ color: kigreen, textDecoration: 'underline', fontWeight: '600', fontSize: '13px' }}> 199/-  </span>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2, width: '95%', marginLeft: '2.5%' }}>
          <Button component={NavLink} to='/Withdrawal' sx={{
            width: '49.8%', p: '10px', background: kidarkgreen, color: 'white', '&:hover': {
              backgroundColor: kigreen,
            }, borderRadius: '5px 0px 0px 5px', '&>p': { textAlign: 'center', ml: 2, }, '&>h6': { textAlign: 'center' }
          }}>
            <Box component='img' src={withdraw} sx={{ width: '30px' }}></Box>
            <Typography variant="body1" className="kip13"> Withdraw</Typography>
          </Button>
          <Button component={NavLink} to='/wallet/Recharge' sx={{
            width: '49.8%', p: '10px', background: kidarkgreen, color: 'white', '&:hover': {
              backgroundColor: kigreen,
            }, borderRadius: '0px 5px 5px 0px', '&>p': { textAlign: 'center', ml: 2, }, '&>h6': { textAlign: 'center' }
          }}>
            <Box component='img' src={recharge} sx={{ width: '30px' }}></Box>
            <Typography variant="body1" className="kip13"> Recharge</Typography>
          </Button>
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
                <NavLink to={`${item.path}`}>
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
                </NavLink >
              </>
            ))}
          </List>
        </Box>

        <Button
          variant="contained"
          className="w95"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
          sx={{
            width: '100%',
            padding: '8px 0',
            backgroundColor: kidarkgreen,
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: 1,
            mt: 2,
            mb: 3
          }}
        >
          LOGOUT
        </Button>
        {/* 
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
        </Box> */}

        {/* <Box sx={style.actionContainertwo}>
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
            <Stack
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
            </Stack> 
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
        </Box> */}
        {/* <Box
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
              {
                to: "/activity",
                name: "Report",
                logo: hand,
              },
              {
                to: "/gameNotification",
                name: "Notification",
                logo: notification1,
              },
              {
                to: "/SettingCenter/LoginPassword",
                name: "Change Password",
              },


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
        </Box> */}
        {/* {openDialogBoxHomeBanner && (
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
                <img src={sunlotteryhomebanner} alt="" />
              </p>
            </div>
          </Dialog>
        )} */}
        <CustomCircularProgress isLoading={isLoading} />
      </Container>
    </Layout >
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
