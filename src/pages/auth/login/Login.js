import {
  Box,
  Container,
  Typography
} from "@mui/material";
import CryptoJS from 'crypto-js';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logokimi.png";
import { kigrad } from "../../../Shared/color";
import LoginWithMobile from "./LoginWithMobile";
function Login() {
  const navigate = useNavigate()
  const [Nav, setNav] = useState(1);



  const logindata = localStorage.getItem("logindataen") && CryptoJS.AES.decrypt(localStorage.getItem("logindataen"), "anand")?.toString(CryptoJS.enc.Utf8) || null

  useEffect(() => {
    (logindata) && navigate('/dashboard')
  }, [])

  return (
    <Container
      sx={{
        background: kigrad,
        minHeight: "100vh",
        pb: '100px !important',
      }}
    >
      <Typography variant="body1" color="initial" sx={{ textAlign: 'center', py: 2, fontWeight: '600', fontSize: '17px' }}>Login</Typography>
      <Box sx={{}}>
        <Box
          sx={{
            width: "95%",
            marginLeft: "2.5%",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ width: "100%", pt: "5vh" }}>
            <Box
              component="img"
              src={logo}
              sx={{ width: "200px", margin: "auto" }}
            ></Box>
          </Box>
          {/* <Box
            sx={{
              mt: "3vh",
              background: "white",
              borderRadius: "10px",
              padding: "20px 10px",
              "& > p:nth-child(1)": {
                fontSize: "20px",
                fontWeight: "500",
                color: "white",
              },
              "& > p:nth-child(2)": {
                fontSize: "12px",
                fontWeight: "400",
                color: "white",
              },
              background: "rgba(255, 255, 255, 0.15)",
              WebkitBackdropFilter: "blur(17px)",
              backdropFilter: "blur(60px)",
              border: "1px solid rgba(255, 255, 255, 0.075)",
            }}
          >
          <Typography variant="body1" color="initial">
              Login{" "}
            </Typography>
            <Typography variant="body1" color="initial">
              Please log in with your phone number or email If you forget your
              password, please contact customer service
            </Typography>
          <Box>
              <Stack direction="row">
                <Box
                  component={NavLink}
                  onClick={() => setNav(1)}
                  className={Nav === 1 ? "activeNav nav" : "nav"}
                >
                  <Typography variant="h3">LOGIN WITH PHONE</Typography>
                </Box>
                <Box
                  component={NavLink}
                  onClick={() => setNav(2)}
                  className={Nav === 2 ? "activeNav nav" : " nav"}
                >
                  <Typography variant="h3">LOGIN WITH EMAIL</Typography>
                </Box>
              </Stack>
            </Box>
          {Nav === 1 ?  : <LoginWithEmail />}
          </Box> */}
          <LoginWithMobile />
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
