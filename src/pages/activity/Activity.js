import CloseIcon from "@mui/icons-material/Close";
import { Box, Container, Dialog, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { zubgback, zubgtext } from "../../Shared/color";
import sunlotteryhomebanner from "../../assets/sunlotteryhomebanner.jpg";
import Layout from "../../component/Layout/Layout";
import "../income/MainPageOFIncome";
import MainPageOFIncome from "../income/MainPageOFIncome";

function Activity() {
  const [openDialogBoxHomeBanner, setopenDialogBoxHomeBanner] = useState(false);

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
      >
        <Box sx={style.header}>
          <Box></Box>
          <Typography
            variant="body1"
            color="initial"
            sx={{ mt: 2, fontSize: "16px", fontWeight: "600" }}
          >
            Income Report
          </Typography>
          <Box></Box>
        </Box>

        <MainPageOFIncome className="!-h-[100%]"/>
        {/* <Box className="bgcardbox">
          {game_data?.map((i, index) => {
            return (
              <Box
                onClick={() => toast("Comming Soon !")}
                key={index}
                className="bgcardboxda   !cursor-pointer hover:!scale-95 hover:!duration-1000"
                sx={{ background: zubgmid }}
              >
                <Box sx={{ width: "100%", height: "160px" }} >
                  <Box
                    sx={{
                      width: "60%",
                      height: "50%",
                      marginLeft: "20%",
                      marginTop: "10%",

                    }}
                  >
                    <Box
                      component="img"
                      src={i.src}
                      sx={{ width: "100%", height: "100%" }}
                    ></Box>
                  </Box>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{
                      textAlign: "center",
                      mt: "10px",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "white",
                    }}
                  >
                    {i.name}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box> */}
        {openDialogBoxHomeBanner && (
          <Dialog PaperProps={{ width: "500px", height: "500px" }} open={openDialogBoxHomeBanner}>
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

export default Activity;

const style = {
  header: {
    padding: "8px",
    background: zubgtext,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&>p": { color: "white !important", ml: "-30px" },
    "&>a>svg": { color: "white", fontSize: "25px" },
  },
  dashboardTitle: {
    textAlign: "center",
    color: "white !important",
    fontSize: "21px",
    fontWeight: "500",
  },
};
