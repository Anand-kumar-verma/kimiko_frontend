import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CloseIcon from "@mui/icons-material/Close";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import {
  Box,
  Container,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import copy from "clipboard-copy";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import CustomCircularProgress from "../../Shared/CustomCircularProgress";
import {
  kidarkgreen,
  kigreen,
  zubggray,
  zubgtext
} from "../../Shared/color";
import bgms from "../../assets/images/bgs.jpg";
import copyIimage from "../../assets/images/copy.png";
import sort from "../../assets/images/data-flow.png";
import donut from "../../assets/images/database.png";
import book from "../../assets/images/rules.png";
import money from "../../assets/images/salary.png";
import logo from "../../assets/logokimi.png";
import sunlotteryhomebanner from "../../assets/sunlotteryhomebanner.jpg";
import Layout from "../../component/Layout/Layout";
import { MygetdataFn, walletamount } from "../../services/apicalling";
import { fron_end_main_domain } from "../../services/urls";

function Promotion() {
  const [openDialogBoxHomeBanner, setopenDialogBoxHomeBanner] = useState(false);

  const { isLoading, data } = useQuery(["get_level"], () => MygetdataFn(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  const result = data?.data?.data;
  const { data: amount } = useQuery(["walletamount"], () => walletamount(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
  });

  const newdata = amount?.data?.data || 0;

  const functionTOCopy = (value) => {
    copy(value);
    toast.success("Copied to clipboard!");
  };
  return (
    <Layout>
      <Container sx={{ background: "#E7E7E7" }}>
        <CustomCircularProgress isLoading={isLoading} />
        <div
          className="flex items-center justify-center "
          style={{ width: "100%", background: kidarkgreen, padding: "15px" }}
        >
          <Box
            component="img"
            src={logo}
            sx={{ width: "120px", margin: "auto" }}
          ></Box>
        </div>
        <Box sx={style.subcordinateBox} className="w95">
          <Stack direction="row" sx={{ width: "100%" }}>
            <Box sx={style.subordinatesleft}>
              <EmojiPeopleOutlinedIcon />
              <Typography variant="body1" color="initial">
                {" "}
                Direct subordinates
              </Typography>
            </Box>
            <Box sx={style.subordinatesRight}>
              <Groups2OutlinedIcon />
              <Typography variant="body1" color="initial">
                Team subordinates
              </Typography>
            </Box>
          </Stack>
          <Box sx={style.boxStyles}>
            <Box sx={style.innerBoxStyles}>
              <Box sx={style.subcordinatelist}>
                <Typography
                  variant="body1"
                  color="initial"
                  className="!text-white"
                >
                  {result?.filter((entry) => entry.LEVEL === 1).length || 0}
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  className="!text-white"
                >
                  {" "}
                  Number of register
                </Typography>
              </Box>
              <Box sx={style.subcordinatelist}>
                <Typography
                  variant="body1"
                  color="initial"
                  className="!text-white"
                >
                  {result?.filter(
                    (level) =>
                      level.LEVEL === 1 && Number(level.recharge_amount) > 0
                  ).length || 0}
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  className="!text-white"
                >
                  {" "}
                   Number of Recharge Members
                </Typography>
              </Box>
              <Box sx={style.subcordinatelist}>
                <Typography
                  variant="body1"
                  color="initial"
                  className="!text-white"
                >
                  {result
                    ?.filter((j) => j?.LEVEL === 1)
                    ?.reduce((a, b) => a + Number(b?.recharge_amount || 0), 0) ||
                    0}
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  className="!text-white"
                >
                  {" "}
                 Recharge amount
                </Typography>
              </Box>
            </Box>

            <Box sx={style.innerBoxStylestwo}>
              <Box sx={style.subcordinatelist}>
                <Typography variant="body1" color="initial">
                  {result?.filter((j) => j?.LEVEL !== 0)?.length || 0}
                </Typography>
                <Typography variant="body1" color="initial">
                  {" "}
                  Number of register{" "}
                </Typography>
              </Box>
              <Box sx={style.subcordinatelist}>
                <Typography variant="body1" color="initial">
                  {result?.filter(
                    (level) =>
                      level.LEVEL !== 0 && Number(level.recharge_amount) > 0
                  ).length || 0}
                </Typography>
                <Typography variant="body1" color="initial">
                  {" "}
                   Number of Recharge Members
                </Typography>
              </Box>
              <Box sx={style.subcordinatelist}>
                <Typography variant="body1" color="initial">
                  {result
                    ?.filter((j) => j?.LEVEL !== 0)
                    ?.reduce((a, b) => a + Number(b?.recharge_amount || 0), 0) ||
                    0}
                </Typography>
                <Typography variant="body1" color="initial">
                  {" "}
                 Recharge amount
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={style.invitebtn}>
            <NavLink
              onClick={() =>
                functionTOCopy(
                  `${fron_end_main_domain}/register?ref=${newdata?.referral_code}`
                )
              }
            >
              <Typography sx={{}}>INVITATION LINK</Typography>
            </NavLink>
          </Box>
        </Box>
        <Box sx={style.invitebutton} className="invitebutton">
          <Box sx={style.invitbox}>
            <Stack direction="row">
              <Box
                component="img"
                src={copyIimage}
                className="!cursor-pointer"
                onClick={() => functionTOCopy(newdata?.referral_code)}
              ></Box>
              <Typography variant="body1" color="initial">
                Copy invitation code
              </Typography>
            </Stack>
            <Stack direction="row">
              <Typography variant="body1" color="initial">
                {newdata?.referral_code}
              </Typography>
              <ArrowForwardIosOutlinedIcon />
            </Stack>
          </Box>
          <NavLink to="/promotion/TeamReport">
            <Box sx={style.invitbox}>
              <Stack direction="row">
                <Box component="img" src={donut}></Box>
                <Typography variant="body1" color="initial">
                  Subordinate data
                </Typography>
              </Stack>
              <Stack direction="row">
                <ArrowForwardIosOutlinedIcon />
              </Stack>
            </Box>
          </NavLink>
          <NavLink to="/promotion/TeamReport/data">
            <Box sx={style.invitbox}>
              <Stack direction="row">
                <Box component="img" src={donut}></Box>
                <Typography variant="body1" color="initial">
                  Team data
                </Typography>
              </Stack>
              <Stack direction="row">
                <ArrowForwardIosOutlinedIcon />
              </Stack>
            </Box>
          </NavLink>
          <NavLink to="/promotion/TeamReport/">
            <Box sx={style.invitbox}>
              <Stack direction="row">
                <Box component="img" src={sort}></Box>
                <Typography variant="body1" color="initial">
                  Team Report
                </Typography>
              </Stack>
              <Stack direction="row">
                <ArrowForwardIosOutlinedIcon />
              </Stack>
            </Box>
          </NavLink>

          <NavLink to="/promotion/PromotionRule">
            <Box sx={style.invitbox}>
              <Stack direction="row">
                <Box component="img" src={book}></Box>
                <Typography variant="body1" color="initial">
                  Invitation rules
                </Typography>
              </Stack>
              <Stack direction="row">
                <ArrowForwardIosOutlinedIcon />
              </Stack>
            </Box>
          </NavLink>

          <Box sx={style.promotionBoxOuter}>
            <Box sx={style.promotionBox}>
              <Stack direction="row">
                {/* <Box component='img' src={download}></Box> */}
                <Box component="img" src={money}></Box>
                <Typography variant="body1" color="initial">
                  Promotion data
                </Typography>
              </Stack>
            </Box>

            <Stack direction="row">
              <Box>
                <Typography variant="body1" color="initial">
                {result
                    ?.filter((j) => j?.LEVEL === 1)
                    ?.reduce((a, b) => a + Number(b?.total_deposit_today || 0), 0) ||
                    0}
                </Typography>
                <Typography variant="body1" color="initial">
                  Direct Deposit Today
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="initial">
                {result
                    ?.filter((j) => j?.LEVEL !== 0)
                    ?.reduce((a, b) => a + Number(b?.total_deposit_today || 0), 0) ||
                    0}
                </Typography>
                <Typography variant="body1" color="initial">
                  Team Deposit Today
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box sx={style.promotionBoxOutertwo}></Box>
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
      </Container>
    </Layout>
  );
}

export default Promotion;

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
      color: "white",
    },
  },
  commitionboxOuter: {
    width: "100%",
    backgroundImage: `url(${bgms})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    "&>img": { width: "100%", height: "100%" },
  },
  commitionbox: {
    margin: "auto",
    width: "70%",
    textAlign: "center",
    py: 5,
    "&>p:nth-child(1)": { fontSize: "25px", fontWeight: "500" },
    "&>p:nth-child(2)": {
      fontSize: "13px",
      fontWeight: "400",
      padding: "5px 0px",
      background: zubggray,
      borderRadius: "20px",
    },
    "&>p:nth-child(3)": {
      fontSize: "13px",
      fontWeight: "400",
      marginTop: "5px",
    },
  },
  subordinatesleft: {
    width: "50%",
    textAlign: "center",
    py: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: kidarkgreen,
    borderTopLeftRadius: "10px",
    borderRight: "2px solid white",
    "&>svg": { color: "white", fontSize: "25px", marginRight: "10px" },
    "&>p": { color: "white", fontSize: "14px", fontWeight: "500" },
  },
  subordinatesRight: {
    width: "50%",
    textAlign: "center",
    py: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: kidarkgreen,
    borderTopRightRadius: "10px",
    "&>svg": { color: "white", fontSize: "25px", marginRight: "10px" },
    "&>p": { color: "white", fontSize: "14px", fontWeight: "500" },
  },
  boxStyles: {
    background: kigreen,
    padding: "30px 15px",
    display: "flex",
    borderRadius: " 0px 0px 10px 10px",
  },
  innerBoxStyles: {
    width: "50%",
    borderRight: "1px solid white",
    borderBottomLeftRadius: "10px",
    padding: "0px 0px",
  },
  innerBoxStylestwo: { width: "50%", padding: "0px 0px" },
  subcordinatelist: {
    textAlign: "center",
    "&>p": { color: "white !important", fontSize: "13px" },
    mb: 1,
  },
  subcordinateBox: {
    width: "100%",
    mt: 2,
  },
  invitebutton: {
    width: "100%",
    background: "#E7E7E7",
    mt: 2,
  },
  invitebtn: {
    mt: 2,
    "&>a>p": {
      width: "100%",
      borderRadius: "5px",
      textAlign: "center",
      padding: "10px",
      background: zubgtext,
      color: "white",
      fontSize: "17px",
      fontWeight: 600,
    },
  },
  invitbox: {
    width: "95%",
    background: kidarkgreen,
    padding: "10px",
    mb: "20px",
    borderRadius: "10px",
    marginLeft: "2.5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&>div>img": { width: "30px", marginRight: "10px" },
    "&>div>p": { fontSize: "14px", color: "white !important" },
    "&>div": { alignItems: "center" },
    "&>div:nth-child(2)>p": { marginRight: "20px", color: "white !important" },
    "&>div:nth-child(2)>svg": {
      fontSize: "14px",
      marginRight: "10px",
      color: "white !important",
    },
  },
  promotionBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&>div:nth-child(1)": { alignItems: "center" },
    "&>div:nth-child(1)>img": { width: "35px", marginRight: "10px" },
    "&>div:nth-child(1)>p": {
      fontSize: "17px",
      fontWeight: 500,
      color: "white !important",
    },
  },
  promotionBoxOuter: {
    width: "95%",
    background: zubgtext,
    padding: "10px",
    mt: "20px",
    borderRadius: "5px",
    marginLeft: "2.5%",
    paddingBottom: "15px",
    "&>div:nth-child(2)>div:nth-child(1)": {
      my: "10px",
      borderRight: "1px solid gray",
      width: "50%",
      textAlign: "center",
    },
    "&>div:nth-child(2)>div:nth-child(2)": {
      my: "10px",
      width: "50%",
      textAlign: "center",
    },
    "&>div:nth-child(2)>div>p:nth-child(1)": { color: "white !important" },
    "&>div:nth-child(2)>div>p:nth-child(2)": {
      fontSize: "13px",
      fontWeight: 500,
      color: "white !important",
    },
    "&>div:nth-child(3)>div:nth-child(1)": {
      my: "10px",
      borderRight: "1px solid gray",
      width: "50%",
      textAlign: "center",
    },
    "&>div:nth-child(3)>div:nth-child(2)": {
      my: "10px",
      width: "50%",
      textAlign: "center",
    },
    "&>div:nth-child(3)>div>p:nth-child(1)": { color: "white !important" },
    "&>div:nth-child(3)>div>p:nth-child(2)": {
      fontSize: "13px",
      fontWeight: 500,
      color: "white !important",
    },
  },
  promotionBoxOutertwo: {
    width: "90%",
    background: "#e7e7e7",
    padding: "10px",
    borderRadius: "5px",
    marginLeft: "5%",
    paddingBottom: "70px",
  },
};
