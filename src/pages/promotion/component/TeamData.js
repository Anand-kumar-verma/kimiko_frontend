import { Star } from "@mui/icons-material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { Box, Container, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import * as React from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { kidarkgreen, kigrad, zubgback, zubggray, zubgshadow, zubgtext, zubgwhite } from "../../../Shared/color";
import Layout from "../../../component/Layout/Layout";
import { MygetdataFn } from "../../../services/apicalling";
import { rupees } from "../../../services/urls";
import logo from "../../../assets/logokimi.png";
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';


function TeamData() {
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
          mb: 10
        }}
      >
        <CustomCircularProgress isLoading={isLoading} />
        <div className="flex items-center justify-center " style={{ width: '100%', background: kidarkgreen, padding: '15px' }}>
          <Box component="img" src={logo} sx={{ width: "120px", margin: 'auto', }}></Box>
        </div>
        <Box sx={{ background: kigrad, padding: '10px', color: 'white' }} className="kip15"><ReceiptLongOutlinedIcon sx={{ fontSize: '20px', mb: '6px' }} />  Team data</Box>

        {

          <Accordion className="!rounded-lg">
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ background: zubgtext, color: "white" }}
            >
              <div className="flexb" style={{ width: '100%' }}>
                <span className="">Levels</span>
                <p className="">Members</p>
                <p className="">Recharge Amount</p>
              </div>
            </AccordionSummary>
          </Accordion>
        }
        {[1, 2, 3, 4, 5]?.map((i, index) => {
          return (
            <Box sx={{ width: '95%', margin: '10px 2.5% 10px 2.5%', }}>
              <Accordion className="!rounded-lg" >
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon className="!text-white" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ background: kidarkgreen, color: "white", borderRadius: '5px' }}
                >
                  <div className="w-full grid grid-cols-3 pr-2">
                    <span className="">Level: {i}</span>
                    <p className="">{result?.filter((j) => j?.LEVEL === i)?.length}
                    </p>
                    <p className="">
                      {rupees}{" "}
                      <span className="text-green-200">
                        {result?.filter((j) => j?.LEVEL === i)?.reduce((a, b) => a + Number(b?.recharge_amount || 0), 0) || 0}
                      </span>{" "}
                    </p>
                  </div>
                </AccordionSummary>
                <AccordionDetails sx={{ color: "white", background: '' }}>
                  <Box >
                    <Box sx={style.accordian}>
                      <div className="flexb" style={{ width: '100%', color: 'white', borderBottom: `2px solid ${kidarkgreen}`, padding: '10px 0px', }}>
                        <span style={{ display: 'inline-block', width: '20%', color: kidarkgreen, }} >S.No.</span>
                        <span style={{ display: 'inline-block', width: '30%', color: kidarkgreen, }}  >User Id</span>
                        <span style={{ display: 'inline-block', width: '50%', color: kidarkgreen, }} >Name</span>

                      </div>
                      <div className="h-[2px] w-full "></div>
                      {result?.filter((j) => j?.LEVEL === i)?.map((i, index) => {
                        return (
                          <div style={{ color: 'white', background: zubgback, color: zubgtext, borderRadius: '5px', padding: '10px 20px', width: "100%" }} >
                            <span style={{ display: 'inline-block', width: '20%' }}>{index + 1}</span>
                            <span style={{ display: 'inline-block', width: '30%' }} className=" ">
                              {i?.username || "No data found"}
                            </span>
                            <span style={{ display: 'inline-block', width: '50%' }}>
                              {i?.full_name || "No data found"}
                            </span>

                          </div>
                        );
                      })}
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          );
        })}
      </Container >
    </Layout >
  );
}

export default TeamData;

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
  accordian: {

    "&>div": { mb: 1 },
    "&>div>div:nth-child(1)": {
      borderRight: "1px solid black",
    },
    "&>div>div:nth-child(2)": {
    },
    "&>div>div>p": {
      color: kidarkgreen,
      fontSize: "14px",
      fontWeight: 500,
    },
  },
};
