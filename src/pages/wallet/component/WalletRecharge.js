import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Slide,
  Stack,
  Typography
} from "@mui/material";
import axios from "axios";
import CryptoJS from "crypto-js";
import { useFormik } from "formik";
import * as React from "react";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { cashDepositRequestValidationSchema } from "../../../Shared/Validation";
import {
  gray,
  kidarkgreen,
  kigrad,
  kigreen,
  zubgback,
  zubgtext
} from "../../../Shared/color";
import audiovoice from "../../../assets/bankvoice.mp3";
import cip from "../../../assets/cip.png";
import dot from "../../../assets/images/circle-arrow.png";
import balance from "../../../assets/images/send.png";
import user from "../../../assets/kiimages/order-history.png";
import logo from "../../../assets/logokimi.png";
import payNameIcon2 from "../../../assets/payNameIcon2.png";
import Layout from "../../../component/Layout/Layout";
import { get_user_data_fn } from "../../../services/apicalling";
import { endpoint } from "../../../services/urls";
import Msg from "./Msg";
import { useQuery } from "react-query";

function WalletRecharge() {
  const dispatch = useDispatch();
  const aviator_login_data = useSelector(
    (state) => state.aviator.aviator_login_data
  );
  const [poicy, setpoicy] = React.useState(false);
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
  const [loding, setloding] = React.useState(false);
  const [amount, setAmount] = React.useState({
    wallet: 0,
    winning: 0,
    cricket_wallet: 0,
  });
  const handleClosemsg = () => {
    setpoicy(false);
  };


  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  React.useEffect(() => {
    handlePlaySound();
  }, []);

  React.useEffect(() => {
    !aviator_login_data && get_user_data_fn(dispatch);
  }, []);

  const handlePlaySound = async () => {
    try {
      if (audioRefMusic?.current?.pause) {
        await audioRefMusic?.current?.play();
      } else {
        await audioRefMusic?.current?.pause();
      }
    } catch (error) {
      console.error("Error during play:", error);
    }
  };
  const { data: wllet } = useQuery(["wallet_a"], () => main_wallet_functoin(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    retryOnMount: false,
    refetchOnWindowFocus: false
  })

  const response = wllet || []
 
  const main_wallet_functoin = async () => {
    const reqbody = {
      userid: user_id || "",
      type: 1,
    };

    try {
      const response = await axios.post(`${endpoint.get_balance}`, reqbody);
      return response?.data;
    } catch (e) {
      toast.error(e?.message || 'An error occurred');
      return { data: [] };
    }
  };

  const walletamountFn = async () => {
    try {
      const response = await axios.get(
        `${endpoint.userwallet}?userid=${user_id}`
      );

      setAmount(response?.data?.data);
      setpoicy(true)
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  React.useEffect(() => {
    walletamountFn();

  }, []);

  const formik = useFormik({
    initialValues: {
      txtamount: deposit_amount || 110,
    },
    validationSchema: cashDepositRequestValidationSchema,
    onSubmit: (values) => {
      payment(values.txtamount);
    },
  });

  async function payment(amnt) {
    setloding(true);
    if (!amnt) {
      toast.error("Please enter an amount");
      setloding(false);
      return;
    }
    const formdata = {
      userid: Number(user_id),
      txtamount: Number(amnt),
    };
    try {
      const res = await axios.post(`${endpoint.deposit_request}`, formdata);
      const msg = res?.data?.earning?.msg;
      let qr_url = "";
      if (msg) {
        try {
          qr_url = JSON.parse(msg)?.msg || "";
        } catch (error) {
          qr_url = msg;
        }
      }

      if (qr_url) {
        setDeposit_req_data(qr_url);
      } else {
        toast.error("Received unexpected response format");
      }
    } catch (e) {
      console.error("Payment processing error:", e);
      toast.error("Error processing payment");
    }
    setloding(false);
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
          background: kidarkgreen,
          borderRadius: "10px",
          mb: 5,
        }}
      >
        <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
          <Box component="img" src={user} width={30}></Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: "15px ", color: 'white', ml: "10px" }}
          >
            {" "}
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
            <Box component="img" src={dot} width={15} sx={{ filter: 'hue-rotate(156deg)' }}></Box>
            <Typography variant="body1" color="initial">
              If the transfer time is up, please fill out the deposit form
              again.
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box component="img" src={dot} width={15} sx={{ filter: 'hue-rotate(156deg)' }}></Box>
            <Typography variant="body1" color="initial">
              The transfer amount must match the order you created, otherwise
              the money cannot be credited successfully.
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box component="img" src={dot} width={15} sx={{ filter: 'hue-rotate(156deg)' }}></Box>
            <Typography variant="body1" color="initial">
              If you transfer the wrong amount, our company will not be
              responsible for the lost amount!
            </Typography>
          </Stack>
          <Stack direction="row" sx={style.rechargeinstext}>
            <Box component="img" src={dot} width={15} sx={{ filter: 'hue-rotate(156deg)' }}></Box>
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
        <Button
          className="kip15" sx={style.paytmbtn}
          onClick={() => {
            formik.setFieldValue("txtamount", 110);
            setDeposit_req_data(null);
          }}
        >
          {" "}
          ₹   110
        </Button>
        <Button
          className="kip15" sx={style.paytmbtn}
          onClick={() => {
            formik.setFieldValue("txtamount", 500);
            setDeposit_req_data(null);
          }}
        >
          {" "}
          ₹   500
        </Button>
        <Button
          className="kip15" sx={style.paytmbtn}
          onClick={() => {
            formik.setFieldValue("txtamount", 1000);
            setDeposit_req_data(null);
          }}
        >
          {" "}
          ₹   1k
        </Button>
        <Button
          className="kip15" sx={style.paytmbtn}
          onClick={() => {
            formik.setFieldValue("txtamount", 5000);
            setDeposit_req_data(null);
          }}
        >
          {" "}
          ₹   5k
        </Button>
        <Button
          className="kip15" sx={style.paytmbtn}
          onClick={() => {
            formik.setFieldValue("txtamount", 10000);
            setDeposit_req_data(null);
          }}
        >
          ₹  10k
        </Button>
        <Button
          className="kip15" sx={style.paytmbtn}
          onClick={() => {
            formik.setFieldValue("txtamount", 15000);
            setDeposit_req_data(null);
          }}
        >
          ₹  15k
        </Button>

      </Stack>
    );
  }, [formik]);

  if (deposit_req_data) {
    window.open(deposit_req_data);

  }
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
        <div className="flex items-center justify-center " style={{ width: '100%', background: kidarkgreen, padding: '15px' }}>
          <Box component="img" src={logo} sx={{ width: "120px", margin: 'auto', }}></Box>

        </div>
        <Box
          sx={{
            borderRadius: "10px",
            padding: "30px 20px",
            width: "95%",
            margin: "auto",
            position: "relative",
            mt: 2,
            background: kigrad,
          }}
        >

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
              justifyContent: "start",
            
              position: "relative",
              zIndex: 10,
              color: "white",
            }}
          >
          Main Wallet  :
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "14px ",
                fontWeight: "600",
                color: "white",
                ml: "10px",
                position: "relative",
                zIndex: 10,
              }}
            >
           {Number(response?.main_balance || 0)}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "start",
            
              position: "relative",
              zIndex: 10,
              color: "white",
            }}
          >
          Fund Wallet  :
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "14px ",
                fontWeight: "600",
                color: "white",
                ml: "10px",
                position: "relative",
                zIndex: 10,
              }}
            >
           {Number(response?.fund_balance || 0)}
            </Typography>
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
          <Box sx={style.paymentlink} >
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
              background: kidarkgreen,
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
                className="wallet-textfield !text-green-500"
                type="number"
                id="txtamount"
                name="txtamount"
                value={formik.values.txtamount}
                onChange={formik.handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <CloseIcon SX={{ color: kidarkgreen }} />
                    </IconButton>
                  </InputAdornment>
                }
              />
              {formik.touched.txtamount && formik.errors.txtamount && (
                <div className="error">{formik.errors.txtamount}</div>
              )}
              <Button sx={style.paytmbtntwo}
                onClick={() => {
                  setDeposit_req_data(null);
                  formik.handleSubmit()
                }}
              >
                Deposit
              </Button>

            </Stack>
          </Box>


          {rechargeInstruction}
        </Box>
        {poicy && (
          <Dialog
            open={poicy}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClosemsg}
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{ className: `!max-w-[400px] ${gray}` }}
          >
            <div
              style={{
                background: kidarkgreen,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "15px",
              }}
            >

              <p style={{ color: "white", fontSize: "14px" }}>
                Deposit  Instruction
              </p>

              <RxCross2
                style={{ color: "white" }}
                onClick={() => {
                  setDeposit_req_data(null);
                  handleClosemsg()
                }}
              />
            </div>
            <DialogContent style={{ background: zubgback }}>

              <Msg handleClosemsg={handleClosemsg} />

            </DialogContent>
          </Dialog>
        )}
        <CustomCircularProgress isLoading={loding} />

      </Container>
    </Layout>
  );
}

export default WalletRecharge;

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
    background: zubgtext,
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
    background: kidarkgreen,
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
    background: kigrad,
    color: kidarkgreen,
    width: "31%",
    // border: "1px solid white",
    padding: "10px",
    "&:hover": { background: zubgtext, border: "1px solid transparent" },
  },
  paytmbtntwo: {
    borderRadius: "5px",
    textTransform: "capitalize",
    mb: 2,
    background: kigrad,
    color: kidarkgreen,
    width: "100%",
    mt: "20px",
    // border: "1px solid white",
    padding: "10px",
    "&:hover": { background: kigreen, border: "1px solid transparent" },
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": {
      marginLeft: "10px",
      color: 'white',
      fontSize: "14px",
    },
  },
};
