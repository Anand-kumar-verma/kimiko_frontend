import { Add, Edit } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import * as React from "react";
import { useQuery, useQueryClient } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import { kidarkgreen, kigrad, zubgback, zubgbackgrad, zubgmid, zubgshadow, zubgtext, zubgwhite } from "../../../Shared/color";
import deposit from "../../../assets/images/banking.png";
import Layout from "../../../component/Layout/Layout";
import { BankListDetails } from "../../../services/apicalling";
import logo from "../../../assets/logokimi.png";
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

function AddedBankDetailList() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const client = useQueryClient();
  React.useEffect(() => {
    client?.refetchQueries("bank_list_details");
  }, []);
  const { isLoading, data } = useQuery(
    ["bank_list_details"],
    () => BankListDetails(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retryOnMount: false,
      refetchOnWindowFocus: false
    }
  );
  const result = React.useMemo(() => data?.data?.data, [data]);

  console.log(result, "this is result");

  return (
    <Layout>
      <Container
        sx={{
          background: zubgback,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 7,
        }}
        className="no-scrollbar"
      >
        <div className="flex items-center justify-center " style={{ width: '100%', background: kidarkgreen, padding: '15px' }}>
          <Box component="img" src={logo} sx={{ width: "120px", margin: 'auto', }}></Box>
        </div>
        <Box sx={{ background: kigrad, padding: '10px', color: 'white' }} className="kip15"><ReceiptLongOutlinedIcon sx={{ fontSize: '20px', mb: '6px' }} /> Added Bank Details</Box>

        <Box>
          <Box
            sx={{
              padding: "10px",
              width: "95%",
              margin: "auto",
              mt: 2,
              background: kidarkgreen,
              borderRadius: "10px",
              mb: 5,
            }}
          >
            <div className="!flex !w-full !justify-between">
              <div
                className="!flex !items-center !cursor-pointer"
                onClick={() => navigate("/add-bank-details")}
              >
                <span style={{ color: 'white' }}>Add New</span>
                <IconButton>
                  <Add sx={{ color: 'white' }} />
                </IconButton>
              </div>
            </div>
            {result?.map((i, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    mb: 2,
                    padding: "15px",
                    borderRadius: "10px",
                    border: "1px solid white",
                    background: zubgback,
                  }}
                >
                  <div className="flex !justify-between">
                    <IconButton>
                      <AccountBalanceIcon sx={{ color: zubgtext }} />
                    </IconButton>
                    <IconButton onClick={() => navigate("/add-bank-details")}>
                      <Edit sx={{ color: zubgtext }} />
                    </IconButton>
                  </div>
                  <Divider className="!bg-red-100 !text-red-100 !bg-opacity-20" />
                  <Stack
                    direction="row"
                    sx={{
                      marginTop: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial">
                      Account Holder Name
                    </Typography>
                    <Typography variant="body1" color="initial">
                      {i?.holder_name}
                    </Typography>
                  </Stack>
                  {/* <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial">
                      Email
                    </Typography>
                    <Typography variant="body1" color="initial">
                      {i?.email}
                    </Typography>
                  </Stack> */}
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial">
                      Bank Name
                    </Typography>
                    <Typography variant="body1" color="initial">
                      {i?.bank_name}
                    </Typography>
                  </Stack>
                  {/* <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial">
                      Mobile No
                    </Typography>
                    <Typography variant="body1" color="initial">
                      {i?.mobile}
                    </Typography>
                  </Stack> */}
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial">
                      IFSC Code
                    </Typography>
                    <Typography variant="body1" color="initial">
                      {i?.ifsc}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial">
                      Account Number
                    </Typography>
                    <Typography variant="body1" color="initial">
                      {i?.account}
                    </Typography>
                  </Stack>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default AddedBankDetailList;

const style = {
  header: {
    padding: "10px 8px",
    background: zubgtext,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "center",
      color: 'white',
    },
    "& > a > svg": {
      color: 'white',
      fontSize: "35px",
    },
  },
  wthui: {
    textAlign: "center",
    width: "32%",
    minHeight: "15vh",
    background: zubgmid,
    borderRadius: "10px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>div>p": { color: zubgtext },
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

    "&>p": {
      color: zubgtext,
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
    borderRadius: "30px",
    textTransform: "capitalize",
    mb: 2,
    background: zubgbackgrad,
    color: "white !important",
    width: "100%",
    mt: "20px",
    border: "1px solid white",
    padding: "10px",
    "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
  },
  rechargeinstext: {
    alignItems: "center",
    justifyContent: "start",
    "&>p": { marginLeft: "10px", color: "white !important", fontSize: "14px" },
  },
};
