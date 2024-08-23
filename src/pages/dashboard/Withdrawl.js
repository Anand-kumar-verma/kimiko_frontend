import CachedIcon from "@mui/icons-material/Cached";
import HistoryIcon from "@mui/icons-material/History";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  Box,
  Button,
  Container,
  Dialog,
  FormControl,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import * as React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../Shared/CustomCircularProgress";
import { withdraw_amount_validation_schema } from "../../Shared/Validation";
import logo from "../../assets/logokimi.png";
import {
  kidarkgreen,
  kigrad,
  zubgback,
  zubgbackgrad,
  zubgmid,
  zubgshadow,

  zubgwhite,
} from "../../Shared/color";
import cip from "../../assets/cip.png";
import payment from "../../assets/kiimages/info.png";
import playgame from "../../assets/images/playgame.jpg";
import balance from "../../assets/images/send.png";
import audiovoice from "../../assets/images/withdrawol_voice.mp3";
import Layout from "../../component/Layout/Layout";
import { BankListDetails, get_user_data_fn } from "../../services/apicalling";
import { endpoint, rupees } from "../../services/urls";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CryptoJS from "crypto-js";
function Withdrawl() {
  const location = useLocation();
  const dispatch = useDispatch();
  const aviator_login_data = useSelector(
    (state) => state.aviator.aviator_login_data
  );
  const { type } = location.state || {};
  const login_data =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;
  const user_id = login_data && JSON.parse(login_data)?.UserID;
  const [amount, setAmount] = React.useState({
    wallet: 0,
    winning: 0,
    cricket_wallet: 0,
  });
  const [lodint, setloding] = React.useState(false);
  const audioRefMusic = React.useRef(null);
  const [openDialogBox, setOpenDialogBox] = React.useState(false);

  React.useEffect(() => {
    !aviator_login_data && get_user_data_fn(dispatch);
  }, []);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const walletamountFn = async () => {
    try {
      const response = await axios.get(
        `${endpoint.userwallet}?userid=${user_id}`
      );

      setAmount(response?.data?.data);
      // console.log(response,"response")
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
  };

  React.useEffect(() => {
    walletamountFn();
  }, []);

  const { isLoading, data } = useQuery(
    ["bank_list_details"],
    () => BankListDetails(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const result = React.useMemo(() => data?.data?.data, [data]);

  const initialValues = {
    amount: "",
    // email: "",
    // mobile: "",
    description: "",
    // bank_name: "",
    // name: "",
    // ifsc: "",
    // account_number: "",
    withdrawl_type: "Withdrawl Type",
    bank_id: "Select Bank",
  };

  const fk = useFormik({
    initialValues: initialValues,
    validationSchema: withdraw_amount_validation_schema,
    onSubmit: () => {
      if (type) {
        if (Number(amount?.cricket_wallet || 0) < Number(fk.values.amount || 0))
          return toast("Your Wallet Amount is low");
      }
      if (fk.values.bank_id === "Select Bank")
        return toast("Select Bank Account");

      if (fk.values.withdrawl_type === "Withdrawl Type")
        return toast("Select Withdrawl Type");

      if (Number(fk.values.amount) < 199 && Number(fk.values.amount) > 50000)
        return toast("Amount shoulb be minimum 110 and maximum 50,000");

      const data = result?.find((i) => i?.id === fk.values.bank_id);
      if (!data) return toast("Data not found");
      const fd = new FormData();

      fd.append("type", type ? 2 : 1);
      fd.append("Bankid", data?.id);
      fd.append("TransactionID", `${Date.now()}${user_id}`);
      fd.append("Description", fk.values.description);
      fd.append("Amount", fk.values.amount);
      fd.append("Mobile", data?.mobile);
      fd.append("user_id", user_id);

      // return toast(
      //   "We are upgrading for smooth and fast payout please wait..."
      // );

      if (fk.values.withdrawl_type === "game_withdrawl")
        withdraw_payment_Function(fd);
      else if (fk.values.withdrawl_type === "main_withdrawl")
        payoutRequestNew(fd);
    },
  });

  const withdraw_payment_Function = async (fd) => {
    setloding(true);
    try {
      const response = await axios.post(`${endpoint.withdraw_payment}`, fd);
      if (response?.data?.msg === "Successfully Data Found") {
        walletamountFn();
        fk.handleReset();
        setOpenDialogBox(true);
      } else {
        if (response?.data?.msg === "") {
          toast(
            <div>
              {response?.data?.msg} First, you have to place a bet of{" "}
              <span className="!text-lg !text-[#FBA343] !font-bold">
                {rupees}{" "}
                {response?.data?.remaining_bet && response?.data?.remaining_bet}
              </span>{" "}
              rupees before you can withdraw
            </div>
          );
        } else {
          toast(response?.data?.msg);
        }
      }
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
    setloding(false);
  };
  const payoutRequestNew = async (fd) => {
    setloding(true);
    try {
      const response = await axios.post(`${endpoint.payout_request_new}`, fd);
      console.log(response);
      if (response?.data?.msg === "Withdrawal Request Placed Successfully") {
        walletamountFn();
        fk.handleReset();
        setOpenDialogBox(true);
      } else {
        toast(response?.data?.msg);
      }
    } catch (e) {
      toast(e?.message);
      console.log(e);
    }
    setloding(false);
  };

  const handlePlaySound = async () => {
    try {
      if (audioRefMusic?.current?.pause) {
        await audioRefMusic?.current?.play();
      } else {
        await audioRefMusic?.current?.pause();
      }
    } catch (error) {
      // Handle any errors during play
      console.error("Error during play:", error);
    }
  };

  React.useEffect(() => {
    handlePlaySound();
  }, []);

  return (
    <Layout>
      {React.useMemo(() => {
        return (
          <audio ref={audioRefMusic} hidden>
            <source src={`${audiovoice}`} type="audio/mp3" />
          </audio>
        );
      }, [])}

      <Container
        className="no-scrollbar"
        sx={{
          background: '#E7E7E7',
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 4,
        }}
      >
        <CustomCircularProgress isLoading={isLoading || lodint} />
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
            background: kigrad,
            mt: 2,
          }}
        >
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              position: "relative",
              zIndex: 10,
            }}
          >
            <Box component="img" src={balance} width={50}></Box>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: "16px ",
                fontWeight: 500,
                color: "white",
                ml: "10px",
              }}
            >
              {" "}
              Balance
            </Typography>
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center", mt: "10px" }}>
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
              ₹{" "}
              {type
                ? Number(amount?.cricket_wallet || 0).toFixed(2)
                : Number(
                  Number(amount?.wallet || 0) + Number(amount?.winning || 0)
                )?.toFixed(2)}
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
            <Box
              component="img"
              src={cip}
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
            <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
              <Box component="img" src={payment} width={30}></Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "15px ", color: 'white', ml: "10px" }}
              >
                Withdrawal amount
              </Typography>
            </Stack>
            <Box mt={2} component="form" onSubmit={fk.handleSubmit}>

              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: 'white' }}>
                    Enter amount <span style={{ color: 'white' }}>*</span>
                  </Typography>
                </Stack>
                <TextField
                  id="amount"
                  name="amount"
                  type="number"
                  value={fk.values.amount}
                  onChange={fk.handleChange}
                  placeholder="Enter amount *"
                  className="withdrawalfield"
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                />
                {fk.touched.amount && fk.errors.amount && (
                  <div className="error">{fk.errors.amount}</div>
                )}
              </FormControl>

              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: 'white' }}>
                    Select Bank <span style={{ color: 'white' }}>*</span>
                  </Typography>
                </Stack>
                <TextField
                  select
                  id="bank_id"
                  name="bank_id"
                  value={fk.values.bank_id}
                  onChange={fk.handleChange}
                  className="withdrawalfield"
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                  InputProps={{
                    style: {
                      borderColor: "#ffffff",

                      color: kidarkgreen,
                      background: "#fff",
                      borderRadius: "5px",

                    },
                  }}
                >
                  <MenuItem value={"Select Bank"}>Select Bank</MenuItem>
                  {result?.map((i, index) => {
                    return (
                      <MenuItem value={i?.id}>
                        {i?.bank_name} ({i?.account})
                      </MenuItem>
                    );
                  })}
                </TextField>
                {fk.touched.bank_id && fk.errors.bank_id && (
                  <div className="error">{fk.errors.bank_id}</div>
                )}
              </FormControl>
              {/* withdrawl type */}
              <FormControl fullWidth sx={{ mt: "10px" }}>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3" sx={{ color: 'white' }}>
                    Withdrawl Type <span style={{ color: 'white' }}>*</span>
                  </Typography>
                </Stack>
                <TextField
                  select
                  id="withdrawl_type"
                  name="withdrawl_type"
                  value={fk.values.withdrawl_type}
                  onChange={fk.handleChange}
                  className="withdrawalfield"
                  InputProps={{
                    style: {


                      color: kidarkgreen,
                      background: "#fff",
                      borderRadius: "5px",
                    },
                  }}
                >
                  <MenuItem value={"Withdrawl Type"}>Withdrawl Type</MenuItem>
                  <MenuItem value={"main_withdrawl"}>Main Withdrawl</MenuItem>
                  <MenuItem value={"game_withdrawl"}>Game Withdrawl</MenuItem>
                </TextField>
              </FormControl>

              <Button
                sx={style.paytmbtntwo}
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  fk.handleSubmit();
                }}
              >
                Withdrawal{" "}
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="w95" sx={{ background: kidarkgreen, padding: 1, borderRadius: '10px', mb: 5, }}>
          <Box
            sx={{ "&>p": { color: "white", fontSize: "12px", } }}
          >

            <p className="  !text-green-600 !m-1">
              ⭐️ Withdraw time 10:00-5:59{" "}
            </p>

            <p className="  !text-green-600 !m-1">
              ⭐️ Withdrawal minimum amount range ₹ 199.00
            </p>
            <p className="  !text-green-600 !m-1">
              ⭐️ Please confirm your beneficial account information before
              withdrawing.
            </p>
            <p className="  !text-green-600 !m-1">
              ⭐️ If your information is incorrect, our company will
              not be able for the amount of loss .
            </p>
            <p className="  !text-green-600 !m-1">
              ⭐️ If your beneficial information is incorrect, please contact
              customer service
            </p>
          </Box>
        </Box>
        <Dialog open={openDialogBox}>
          <div className="!p-5 !max-w-[300px]">
            <p className="!font-bold text-center flex-col">
              <span className="!text-lg">
                Your withdrawl amount will be add in your bank account within 24
                Hrs.
              </span>
              <p className="!text-green-500">Thank You!</p>
              <Button
                onClick={() => setOpenDialogBox(false)}
                className="!mt-1"
                variant="contained"
              >
                OK
              </Button>
            </p>
          </div>
        </Dialog>
      </Container >
    </Layout >
  );
}

export default Withdrawl;

const style = {
  header: {
    padding: "15px 8px",
    background: 'white',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
    height: "15vh",
    background: zubgmid,
    borderRadius: "10px",
    mb: "10px",
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
    my: "10px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paytmbtn: {
    mb: 2,
    background: zubgback,
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
    background: kigrad,
    color: kidarkgreen,
    width: "100%",
    mt: "20px",
    border: "1px solid white",
    padding: "10px",
    "&:hover": { background: kigrad, border: "1px solid transparent" },
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": { marginLeft: "10px", color: "white !important", fontSize: "14px" },
  },
};
