import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import * as React from "react";
import { useQuery } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { kidarkgreen, kigrad, kigreen, zubgback, zubgbackgrad, zubgmid, zubgshadow, zubgtext, zubgwhite } from "../../../Shared/color";
import deposit from "../../../assets/images/list.png";
import Layout from "../../../component/Layout/Layout";
import {
  withdrawlHistoryFunction
} from "../../../services/apicalling";
import logo from "../../../assets/logokimi.png";
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

function WithdravalHistory() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { isLoading, data } = useQuery(
    ["deposit_history"],
    () => withdrawlHistoryFunction(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retryOnMount: false,
      refetchOnWindowFocus: false
    }
  );

  const res = data?.data?.data || []

  return (
    <Layout>
      <Container
        sx={{
          background: zubgback,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 5,
        }}
        className="no-scrollbar"
      >
        <CustomCircularProgress isLoading={isLoading} />
        <div className="flex items-center justify-center " style={{ width: '100%', background: kidarkgreen, padding: '15px' }}>
          <Box component="img" src={logo} sx={{ width: "120px", margin: 'auto', }}></Box>
        </div>
        <Box sx={{ background: kigrad, padding: '10px', color: 'white' }} className="kip15"><ReceiptLongOutlinedIcon sx={{ fontSize: '20px', mb: '6px' }} /> Withdrawal history</Box>


        <Box>
          <Box
            sx={{
              padding: "10px",
              background: '#E7E7E7',
              boxShadow: zubgshadow,
              borderRadius: "0px",
              mb: 5,
            }}
          >
            <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
            </Stack>
            {res?.map((i) => {
              return (
                <Box
                  sx={{
                    mb: 2,
                    padding: "15px",
                    borderRadius: "10px",
                    border: "1px solid white",
                    background: kigreen,
                    boxShadow: zubgshadow,
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      paddingBottom: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid white",
                    }}
                  >
                    <Box>
                      <Button
                        sx={{
                          background: kidarkgreen,
                          color: "white",
                          textTransform: "capitalize",
                        }}
                      >
                        Withdrawal
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        sx={{ color: "green", textTransform: "capitalize" }}
                        className={`${i?.status === "Success"
                          ? "!text-green-500"
                          : "!text-green-500"
                          }`}
                      >
                        {i?.status}
                      </Button>
                      <IconButton>
                        <ArrowForwardIcon sx={{ color: 'white' }} />
                      </IconButton>
                    </Box>
                  </Stack>

                  <Stack
                    direction="row"
                    sx={{
                      mb: "10px",
                      mt: '10px',
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: 'white' },
                    }}
                  >
                    <Typography variant="body1" className="kip13">
                      Balance
                    </Typography>
                    <Typography variant="body1" className="kip13">
                      ₹ {i?.amount}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      mb: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: 'white' },
                    }}
                  >
                    <Typography variant="body1" className="kip13">
                      Date/Time
                    </Typography>
                    <Typography variant="body1" className="kip13">
                      {moment(i?.date)?.format("DD-MM-YYYY")}{" "}
                      {moment(i?.date)?.format("HH:mm:ss")}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      mb: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: 'white' },
                    }}
                  >
                    <Typography variant="body1" className="kip13">
                      Status
                    </Typography>
                    <Typography variant="body1" className="kip13">
                      {i?.status}{" "}
                    </Typography>
                  </Stack>
                  {i?.approve_date !== null && i?.approve_date !== "" && <Stack
                    direction="row"
                    sx={{
                      mb: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: 'white' },
                    }}
                  >
                    <Typography variant="body1" className="kip13">
                      Success Date/Time
                    </Typography>
                    <Typography variant="body1" color="initial" className="!text-green-500">
                      {moment(i?.approve_date)?.format("DD-MM-YYYY")}{" "}
                      {moment(i?.approve_date)?.format("HH:mm:ss")}
                    </Typography>
                  </Stack>}
                  <Stack
                    direction="row"
                    sx={{
                      mb: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: 'white' },
                    }}
                  >
                    <Typography variant="body1" className="kip13">
                      Trans number
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{

                        alignItems: "center",
                        justifyContent: "space-between",
                        "&>p": { color: 'white' },
                      }}
                    >
                      <Typography variant="body1" className="kip13">
                        {i?.tran_id}
                      </Typography>
                      <IconButton>
                        <ContentCopyIcon sx={{ color: 'white' }} />
                      </IconButton>
                    </Stack>
                  </Stack>
                </Box>
              );
            })}
            {/* <Button sx={style.paytmbtntwo}>All history</Button> */}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default WithdravalHistory;

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
    background: zubgbackgrad,
    color: "white !important",
    width: "100%",
    mt: 2,
    border: "1px solid white",
    padding: "10px",
    "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
  },
  rechargeinstext: {
    mb: "10px",
    alignItems: "center",
    justifyContent: "start",
    "&>p": { marginLeft: "10px", color: "white !important", fontSize: "14px" },
  },
};
