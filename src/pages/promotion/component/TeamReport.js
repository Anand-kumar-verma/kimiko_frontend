import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import {
  Box,
  Container,
  Typography
} from "@mui/material";
import * as React from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { kidarkgreen, kigrad, zubgback, zubgshadow, zubgtext, zubgwhite } from "../../../Shared/color";
import Layout from "../../../component/Layout/Layout";
import { MygetdataFn } from "../../../services/apicalling";
import logo from "../../../assets/logokimi.png";
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';

function TeamReports() {
  const { isLoading, data } = useQuery(
    ["get_level"],
    () => MygetdataFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );
  const result = data?.data?.data;

  return (
    <Layout>
      <Container
        sx={{
          background: zubgback,
          width: "100%",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <CustomCircularProgress isLoading={isLoading} />
        <div className="flex items-center justify-center " style={{ width: '100%', background: kidarkgreen, padding: '15px' }}>
          <Box component="img" src={logo} sx={{ width: "120px", margin: 'auto', }}></Box>
        </div>
        <Box sx={{ background: kigrad, padding: '10px', color: 'white' }} className="kip15"><ReceiptLongOutlinedIcon sx={{ fontSize: '20px', mb: '6px' }} />Team Report</Box>

        <Box sx={{ paddingTop: 2 }}>
          <Box
            className="w95"
            sx={{
              background: '$E7E7E7',
              borderRadius: "10px",
              "&>div": { mb: 1 },
              "&>div>div:nth-child(1)": {
                borderRight: "1px solid black",
                width: "50%",
                textAlign: "center",
              },
              "&>div>div:nth-child(2)": { width: "50%", textAlign: "center" },
              "&>div>div>p": {
                color: zubgtext,
                fontSize: "14px",
                fontWeight: 500,
              },
            }}
          >
            <div style={{ color: 'white', background: zubgtext, padding: '10px', borderRadius: '5px', width: '100%' }} >
              <span style={{ display: 'inline-block', width: '10%' }} className="kip13">S.No.</span>
              <span style={{ display: 'inline-block', width: '20%' }} className="kip13">User Id</span>
              <span style={{ display: 'inline-block', width: '30%' }} className="kip13">Name</span>
              <span style={{ display: 'inline-block', width: '30%' }} className="kip13">Mobile No</span>
              <span style={{ display: 'inline-block', width: '10%' }} className="kip13">Recharge</span>

            </div>
            {result?.filter((j) => j?.LEVEL === 1)?.map((i, index) => {
              return (
                <div style={{ color: 'white', background: kidarkgreen, borderRadius: '5px', padding: '10px 20px', width: '100%' }} >
                  <span style={{ display: 'inline-block', width: '10%' }} className="!items-start kip13" >{index + 1}</span>
                  <span style={{ display: 'inline-block', width: '20%' }} className="kip13">{i?.username}</span>
                  <span style={{ display: 'inline-block', width: '30%' }} className="!text-center kip13">{i?.full_name || "No data found"}</span>
                  <span style={{ display: 'inline-block', width: '30%' }} className="kip13">{i?.mobile || "987654210"}</span>
                  <span style={{ display: 'inline-block', width: '10%' }} className="kip13">{i?.recharge_amount || "0"}</span>

                </div>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default TeamReports;

const style = {
  header: {
    padding: "15px 8px",
    background: zubgtext,
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
};
