import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import { Box, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { kidarkgreen, kigreen, zubgtext } from "../../../../Shared/color";
import MediationRoundedIcon from '@mui/icons-material/MediationRounded';
import WalletRoundedIcon from '@mui/icons-material/WalletRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';


function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "0px",
        width: "100%",
        backgroundColor: "transparent",
      }}
    >
      <Box sx={style.root}>
        <Stack direction="row" sx={style.stack}>
          <Box sx={{ ...style.nav, background: location.pathname == "/dashboard" ? kigreen : '' }} onClick={() => navigate("/dashboard")}>
            {location.pathname == "/dashboard" && (
              <HomeRoundedIcon sx={{ color: kidarkgreen }} />

            )}
            {location.pathname !== "/dashboard" && (
              <HomeRoundedIcon sx={{ color: 'white' }} />
            )}
            <Typography variant="body1" className="kip13" sx={{ color: 'white' }}>
              Home
            </Typography>
          </Box>
          <Box sx={{ ...style.nav, background: location.pathname == "/menu" ? kigreen : '' }} onClick={() => navigate("/menu")}>
            {location.pathname == "/menu" && (
              <StorefrontRoundedIcon sx={{ color: kidarkgreen }} />
            )}
            {location.pathname !== "/menu" && (
              <StorefrontRoundedIcon sx={{ color: 'white' }} />
            )}
            <Typography variant="body1" className="kip13" sx={{ color: 'white' }}>
              Product
            </Typography>
          </Box>
          <Box sx={{ ...style.nav, background: location.pathname == "/promotion" ? kigreen : '' }} onClick={() => navigate("/promotion")}>
            {location.pathname == "/promotion" && (
              <MediationRoundedIcon sx={{ color: kidarkgreen }} />
            )}
            {location.pathname !== "/promotion" && (
              <MediationRoundedIcon sx={{ color: 'white' }} />
            )}
            <Typography variant="body1" className="kip13" sx={{ color: 'white' }}>
              Promotion
            </Typography>
          </Box>
          <Box onClick={() => navigate("/wallet")} sx={{ ...style.nav, background: location.pathname == "/wallet" ? kigreen : '' }} >
            {location.pathname == "/wallet" && (
              <WalletRoundedIcon sx={{ color: kidarkgreen }} />
            )}
            {location.pathname !== "/wallet" && (
              <WalletRoundedIcon sx={{ color: 'white' }} />
            )}
            <Typography variant="body1" className="kip13" sx={{ color: 'white' }}>
              Wallet
            </Typography>
          </Box>
          <Box sx={{ ...style.nav, background: location.pathname == "/account" ? kigreen : '' }} onClick={() => navigate("/account")}>
            {location.pathname == "/account" && (
              <MenuOpenRoundedIcon sx={{ color: kidarkgreen }} />
            )}
            {location.pathname !== "/account" && (
              <MenuOpenRoundedIcon sx={{ color: 'white' }} />
            )}
            <Typography variant="body1" className="kip13" sx={{ color: 'white' }}>
              Account
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Footer;

const style = {
  root: {
    background: kidarkgreen,
    height: "60px",
    borderRadius: "5px 5px 0px 0px",
    // padding: "10px 20px 0px 20px",
    maxWidth: "575px",
    margin: "auto",
    position: 'relative',
    zIndex: 5000000,
    overflow: 'hidden',
  },
  icon: { fontSize: "25px", "&>path": { color: "white !important" } },
  text: { fontSize: "13px", fontWeight: 500, color: zubgtext },
  stack: { alignItems: "end", justifyContent: "space-between" },
  nav: {
    width: '20%',

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60px",
  },
};
