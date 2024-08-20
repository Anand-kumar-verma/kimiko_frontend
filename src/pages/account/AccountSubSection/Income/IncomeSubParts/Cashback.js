import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { Box, Container, Table, TableBody, TableCell, TableHead, TablePagination, TableRow ,IconButton} from "@mui/material";
import moment from "moment";
import * as React from "react";
import { useQuery } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import CustomCircularProgress from "../../../../../Shared/CustomCircularProgress";
import {
  zubgback,
  zubgbackgrad,
  zubgmid,
  zubgshadow,
  zubgtext,
  zubgwhite,
} from "../../../../../Shared/color";
import nodatafoundimage from "../../../../../assets/images/nodatafoundimage.png";
import Layout from "../../../../../component/Layout/Layout";
import toast from "react-hot-toast";
import { endpoint } from "../../../../../services/urls";
import axios from "axios";
import CryptoJS from "crypto-js";

function Cashback() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [filter, setFilter] = React.useState("0");
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  
  const [visibleRows, setVisibleRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const value =
  (localStorage.getItem("logindataen") &&
    CryptoJS.AES.decrypt(
      localStorage.getItem("logindataen"),
      "anand"
    )?.toString(CryptoJS.enc.Utf8)) ||
  null;
const user_id = value && JSON.parse(value)?.UserID; 

  const Cashback_bonus_functoin = async () => {    
    const reqbody = {
        userid: user_id || "",
        type: 4,
        start: startDate,
        end: endDate
    };
    try {
        const response = await axios.post(`${endpoint.report_income}`, reqbody);
        return response?.data;
      } catch (e) {
        toast.error(e?.message || 'An error occurred');
        return { data: [] };
      }
    };


  const { isLoading, data } = useQuery(
    ["cashback_bonus"],
    () => Cashback_bonus_functoin(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
  const res = React.useMemo(() => {
    if (startDate && endDate && filter) {
      return data?.earning?.rid?.filter(
        (i) =>
          moment(i?.l01_date)?.format("YYYY-MM-DD") >=
            moment(startDate)?.format("YYYY-MM-DD") &&
          moment(i?.l01_date)?.format("YYYY-MM-DD") <=
            moment(endDate)?.format("YYYY-MM-DD") &&
          i?.l01_transection_type?.includes(filter)
      );
    }
    
    return filter === "0"
      ? data?.earning?.rid
      : data?.earning?.rid?.filter((i) =>
          i?.l01_transection_type?.includes(filter)
        );
  }, [filter, data?.earning?.rid, startDate && endDate]);

  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    setVisibleRows(
      res?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      )
    );
  }, [page, rowsPerPage, res]);

  if (!isLoading && !res)
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
        >
          <Box sx={style.header}>
            <Box component={NavLink} onClick={goBack}>
              <KeyboardArrowLeftOutlinedIcon />
            </Box>
            <p>Cashback Income</p>
          </Box>
          <div>
            <img className="" src={nodatafoundimage} />
          </div>
        </Container>
      </Layout>
    );
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
        <Box sx={style.header}>
          <Box component={NavLink} onClick={goBack}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <p>Cashback Income</p>
        </Box>
        <div
          className="!flex !w-fullpx-5 justify-between py-1 items-center"
          style={{ background: zubgwhite, boxShadow: zubgshadow }}
        >
          <div className="flex mx-1 flex-col">
            <label className="!text-sm "> Start Date:</label>
            <input
              value={startDate}
              type="date"
              className="px-1 rounded-sm"
              placeholder="Start Date"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          {filter !== "0" || (startDate && endDate) ? (
            <IconButton
              className="!pt-8"
              onClick={() => {
                setFilter("0");
                setStartDate();
                setEndDate();
              }}
            >
              <FilterAltOffIcon />{" "}
            </IconButton>
          ) : (
            <IconButton className="!pt-8">
              <FilterAltIcon />
            </IconButton>
          )}

          <div className="flex flex-col mx-1">
            <label className="!text-sm"> End Date:</label>
            <input
              value={endDate}
              type="date"
               className="px-1 rounded-sm"
              placeholder="Start Date"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      

        <div className="!overflow-x-auto">
        <Table  sx={{background: zubgwhite, boxShadow: zubgshadow }}>
          <TableHead>
            <TableRow >
            <TableCell  className=" !font-bold !border !text-xs !border-r  !text-center !border-b !border-white">S.No</TableCell>
             <TableCell  className=" !font-bold !border !text-xs !border-r !text-center  !border-b !border-white">Date/Time</TableCell>
              <TableCell  className=" !font-bold !border !text-xs !border-r !text-center  !border-b !border-white">Amount</TableCell>
              <TableCell  className="!font-bold !border !text-xs !border-r !text-center  !border-b !border-white">Income Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows?.map((i , index ) => (
              <TableRow key={i?.id}>
                <TableCell  className="!border !border-r !text-xs !text-center !mt-5  !border-b !border-white">{index+1}</TableCell>
                <TableCell  className="!border !border-r !text-xs !text-center  !border-b !border-white">
                  {moment(i?.l01_date).format("DD-MM-YYYY HH:mm:ss")}
                </TableCell>
                <TableCell  className="!border !border-r !text-xs !text-center  !border-b !border-white">{i?.m_cramount}</TableCell>
                <TableCell  className="!border !border-r !text-xs !text-center !border-b !border-white">{i?.m_description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
       <Box className="paginationTable !mb-10">
        <TablePagination
          sx={{
            background: zubgtext,
            color: "white",
            borderRadius: "10px",
            marginTop: "10px",
          }}
          rowsPerPageOptions={[10,15 ,25,35 ]}
          component="div"
          count={res?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Rows"
        />
      </Box>
        </div>
      </Container>
    </Layout>
  );
}

export default Cashback;

const style = {
  header: {
    padding: "10px 8px",
    background: zubgtext,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > p": {
      fontSize: "15px",
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
