
import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import HistoryIcon from "@mui/icons-material/History";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography
} from "@mui/material";
import axios from "axios";
import CryptoJS from "crypto-js";
import { useFormik } from "formik";
import * as React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../Shared/CustomCircularProgress";
import {
  gray,
  zubgback,
  zubgbackgrad,
  zubgmid,
  zubgshadow,
  zubgtext,
  zubgwhite,
} from "../../Shared/color";
import audiovoice from "../../assets/bankvoice.mp3";
import cip from "../../assets/cip.png";
import dot from "../../assets/images/circle-arrow.png";
import payment from "../../assets/images/deposit (1).png";
import user from "../../assets/images/manuscript.png";
import playgame from "../../assets/images/playgame.jpg";
import balance from "../../assets/images/send.png";
import payNameIcon2 from "../../assets/payNameIcon2.png";
import Layout from "../../component/Layout/Layout";
import { get_user_data_fn } from "../../services/apicalling";
import { endpoint } from "../../services/urls";

function Recharge() {
  const dispatch = useDispatch();
  const aviator_login_data = useSelector(
    (state) => state.aviator.aviator_login_data
  );
  const deposit_amount = localStorage.getItem("amount_set");

  const audioRefMusic = React.useRef(null);
  const login_data =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;
  const user_id = login_data && JSON.parse(login_data)?.UserID;
  const [deposit_req_data, setDeposit_req_data] = React.useState();
  const [loding, setLoding] = React.useState(false);
  const [amount, setAmount] = React.useState({
    wallet: 0,
    winning: 0,
    cricket_wallet: 0,
  });

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  React.useEffect(() => {
    handlePlaySound();
  }, []);

  React.useEffect(() => {
    if (!aviator_login_data) {
      get_user_data_fn(dispatch);
    }
  }, [aviator_login_data, dispatch]);

  const handlePlaySound = async () => {
    try {
      if (audioRefMusic?.current?.paused) {
        await audioRefMusic?.current?.play();
      } else {
        await audioRefMusic?.current?.pause();
      }
    } catch (error) {
      console.error("Error during play:", error);
    }
  };

  const walletamountFn = async () => {
    try {
      const response = await axios.get(
        `${endpoint.userwallet}?userid=${user_id}`
      );
      setAmount(response?.data?.data);
    } catch (e) {
      toast.error(e?.message || "Error fetching wallet amount");
    }
  };

  React.useEffect(() => {
    walletamountFn();
  }, [user_id]);

  const formik = useFormik({
    initialValues: {
      txtamount: deposit_amount || 0,
    },
    onSubmit: (values) => {
      payment(values.txtamount);
    },
  });

  async function payment(amnt) {
    setLoding(true);
    if (!amnt) {
      toast.error("Please enter an amount");
      setLoding(false);
      return;
    }
    const formdata = {
      userid: Number(user_id),
      txtamount: Number(amnt),
    };
    try {
      const response = await axios.post(`${endpoint.deposit_request}`, formdata);
      toast(response?.data?.message)
      setDeposit_req_data(response?.data?.data);
    } catch (e) {
      toast.error(e?.message || "Error processing payment");
    }
    setLoding(false);
  }

  const audio = React.useMemo(() => {
    return (
      <audio ref={audioRefMusic} hidden>
        <source src={`${audiovoice}`} type="audio/mp3" />
      </audio>
    );
  }, []);

  const rechargeInstruction = React.useMemo(() => {
    return (
      <Box
        sx={{
          padding: "10px",
          width: "95%",
          margin: "auto",
          mt: "20px",
          background: zubgwhite,
          borderRadius: "10px",
          mb: 5,
        }}
      >
        <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
          <Box component="img" src={user} width={30}></Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "15px", color: zubgtext, ml: "10px" }}
          >
            Recharge instructions
          </Typography>
        </Stack>
        <Box
          sx={{
            border: "1px solid white",
            padding: 2,
            borderRadius: "10px",
          }}
        >
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box component="img" src={dot} width={15}></Box>
            <Typography variant="body1" color="initial">
              If the transfer time is up, please fill out the deposit form
              again.
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box component="img" src={dot} width={15}></Box>
            <Typography variant="body1" color="initial">
              The transfer amount must match the order you created, otherwise
              the money cannot be credited successfully.
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box component="img" src={dot} width={15}></Box>
            <Typography variant="body1" color="initial">
              If you transfer the wrong amount, our company will not be
              responsible for the lost amount!
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box component="img" src={dot} width={15}></Box>
            <Typography variant="body1" color="initial">
              Note: do not cancel the deposit order after the money has been
              transferred.
            </Typography>
          </Stack>
        </Box>
      </Box>
    );
  }, []);

  const paymentButtons = React.useMemo(() => {
    return (
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          mt: "10px",
        }}
      >
        {[110, 500, 1000, 5000, 10000, 15000].map((amount) => (
          <Button
            key={amount}
            sx={style.paytmbtn}
            onClick={() => {
              formik.setFieldValue("txtamount", amount);
              setDeposit_req_data(null);
            }}
          >
            ₹ {amount.toLocaleString()}
          </Button>
        ))}
      </Stack>
    );
  }, [formik]);

  React.useEffect(() => {
    if (deposit_req_data) {
      window.open(deposit_req_data);
    }
  }, [deposit_req_data]);
  return (
    <Layout>
      {audio}
      <Container
        className="no-scrollbar"
        sx={{
          background: zubgback,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 4,
        }}
      >
        <Box sx={style.header}>
          <Box component={NavLink} onClick={goBack}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">
            Deposit
          </Typography>
          <Box component={NavLink} to="/depositHistory">
            <HistoryIcon />
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "10px",
            padding: "30px 20px",
            width: "95%",
            margin: "auto",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={playgame}
            sx={{
              position: "absolute",
              opacity: "0.9",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          ></Box>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Box
              component="img"
              src={balance}
              width={50}
              sx={{
                position: "relative",
                zIndex: 10,
              }}
            ></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "16px ",
                fontWeight: 500,
                color: "white",
                ml: "10px",
                position: "relative",
                zIndex: 10,
              }}
            >
              {" "}
              Balance
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              mt: "10px",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "30px ",
                fontWeight: "600",
                color: "white",
                mr: "10px",
                position: "relative",
                zIndex: 10,
              }}
            >
              {(
                Number(deposit_amount ? amount?.cricket_wallet || 0
                  : Number(amount?.wallet || 0) + Number(amount?.winning || 0)).toFixed(2)
              )}
             

            </Typography>
            <CachedIcon
              sx={{
                color: "white",
                position: "relative",
                zIndex: 10,
              }}
            />
          </Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              mt: "20px",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Box component="img" src={cip} width={50}></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "14px ",
                color: "white",
                ml: "10px",
                position: "relative",
                zIndex: 10,
              }}
            >
              **** **** **** ****
            </Typography>
          </Stack>
        </Box>
        <Box sx={style.paymentBoxOuter}>
          <Box sx={style.paymentlink} component={NavLink}>
            <Box
              component="img"
              src={payNameIcon2}
              sx={{ width: "100px", height: "80px", borderRadius: "10px" }}
            ></Box>
            <Typography variant="body1" color="initial">
              UPI
            </Typography>
          </Box>
        </Box>
        <Box>
         
            <Box
              sx={{
                padding: "10px",
                width: "95%",
                margin: "auto",
                mt: "20px",
                background: zubgwhite,
                boxShadow: zubgshadow,
                borderRadius: "10px",
                mb: 2,
              }}
            >
              {paymentButtons}
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  mt: "10px",
                }}
              >
                <OutlinedInput
                  fullWidth
                  placeholder="Enter amount"
                  className="wallet-textfield"
                  type="number"
                  id="txtamount"
                  name="txtamount"
                  value={formik.values.txtamount}
                  onChange={formik.handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <CloseIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {formik.touched.txtamount && formik.errors.txtamount && (
                  <div className="error">{formik.errors.txtamount}</div>
                )}
                <Button sx={style.paytmbtntwo} onClick={formik.handleSubmit}>
                  Deposit
                </Button>

              </Stack>
            </Box>
        

          {rechargeInstruction}
        </Box>
       
        <CustomCircularProgress isLoading={loding} />

      </Container>
    </Layout>
  );
}

export default Recharge;

const style = {
  header: {
    padding: "15px 8px",
    background: zubgtext,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: 3,
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: "white",
    },
    "& > a > svg": {
      color: "white",
      fontSize: "35px",
    },
  },
  wthui: {
    textAlign: "center",
    width: "32%",
    minHeight: "15vh",
    background: zubgmid,
    borderRadius: "10px",
    mb: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>div>p": { color: "white" },
  },
  paymentlink: {
    width: "32%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    background: zubgtext,
    boxShadow: zubgshadow,
    padding: "10px 0px",
    borderRadius: "10px",
    "&>p": {
      color: "white",
      fontSize: "12px",
      fontWeight: "500",
      textAlign: "center",
      mt: "5px",
    },
  },
  paymentBoxOuter: {
    width: "95%",
    margin: "auto",
    my: "20px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paytmbtn: {
    mb: 2,
    background: zubgtext,
    color: "white !important",
    width: "31%",
    border: "1px solid white",
    padding: "10px",
    "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
  },
  paytmbtntwo: {
    borderRadius: "5px",
    textTransform: "capitalize",
    mb: 2,
    background: zubgmid,
    color: "white !important",
    width: "100%",
    mt: "20px",
    border: "1px solid white",
    padding: "10px",
    "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": {
      marginLeft: "10px",
      color: zubgtext,
      fontSize: "14px",
    },
  },
};
