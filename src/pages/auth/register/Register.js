import { ArrowRightAltTwoTone } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import CryptoJS from "crypto-js";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";
import { storeCookies } from "../../../Shared/CookieStorage";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { signupSchemaValidataon } from "../../../Shared/Validation";
import { kidarkgreen, kigrad, kigreen, zubgbackgrad } from "../../../Shared/color";
import logo from "../../../assets/logokimi.png";
import { CandidateNameFn } from "../../../services/apicalling";
import { endpoint } from "../../../services/urls";
function Register() {
  const url = new URL(window.location.href);
  const [refParam, setrefParam] = useState(url.searchParams.get("ref") || "");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [show_confirm_password, set_show_confirm_password] =
    React.useState(false);
  const [loding, setloding] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handle_confirm_ClickShowPassword = () =>
    set_show_confirm_password(!show_confirm_password);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const initialValue = {
    email: "",
    mobile: "",
    name: "",
    password: "",
    confirmed_password: "",
    // referral_code: refParam?.substring(1, refParam.length - 1) || "",
    referral_code: refParam,
  };

  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    validationSchema: signupSchemaValidataon,
    onSubmit: () => {
      if (fk.values.password !== fk.values.confirmed_password)
        return toast("Password and confirm password should be same.");
      if (!fk.values.privacy_policy)
        return toast("Please confirm the privacy policy.");
      const reqbody = {
        email: fk.values.email,
        mobile: String(fk.values.mobile) || "",
        password: fk.values.password,
        confirmed_password: fk.values.confirmed_password,
        referral_code: fk.values.referral_code,
        name: fk.values.name,
        privacy_policy: false,
      };

      signupFunction(reqbody);
    },
  });

  const signupFunction = async (reqbody) => {
    setloding(true);
    const fd = new FormData();
    fd.append("email", reqbody.email);
    fd.append("mobile", reqbody.mobile);
    fd.append("name", reqbody.name);
    fd.append("password", reqbody.password);
    fd.append("confirmed_password", reqbody.confirmed_password);
    fd.append("referral_code", reqbody.referral_code);

    try {
      const response = await axios.post(endpoint.signup, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      });

      if (response?.data?.status === "200") {
        const value = CryptoJS.AES.encrypt(
          JSON.stringify(response?.data),
          "anand"
        )?.toString();
        localStorage.setItem("logindataen", value);
        sessionStorage.setItem("isAvailableUser", true);
        sessionStorage.setItem("isAvailableCricketUser", true);
        navigate("/dashboard");
        storeCookies();
        document.location.reload();
      }

      toast.success(response?.data?.msg);
      // if (response?.data?.status === "200") {
      //   navigate("/dashboard");
      // }
    } catch (e) {
      toast.error(e?.message);
      console.error(e);
    }
    setloding(false);
  };

  const { data } = useQuery(
    ["getname", fk.values.referral_code],
    () => CandidateNameFn({ reffral_id: fk.values.referral_code }),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      retryOnMount: false,
      refetchOnWindowFocus: false
    }
  );

  const result = data?.data?.data;
  return (
    <Container
      sx={{
        background: kigrad,
        minHeight: "100vh",
        pb: '30px !important',
      }}
    >
      <Typography variant="body1" color="initial" sx={{ textAlign: 'center', py: 2, fontWeight: '600', fontSize: '17px' }}>Register</Typography>
      <Box>
        <Box
          sx={{
            width: "95%",
            marginLeft: "2.5%",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ width: "100%", py: "5vh" }}>
            <Box
              component="img"
              src={logo}
              sx={{ width: "200px", margin: "auto" }}
            ></Box>
          </Box>
          <Box

          >
            <Box
              component="form"
              sx={{
                width: "95%",
                marginLeft: "2.5%",
                transition: "0.3s",
              }}
              onSubmit={fk.handleSubmit}
            >
              <Box mt={3}>
                <FormControl fullWidth>
                  <TextField
                    id="referral_code"
                    placeholder="Enter Referral Code"
                    className="loginfields"
                    name="referral_code"
                    value={fk.values.referral_code}
                    onChange={fk.handleChange}
                    onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                  />
                  {fk.touched.referral_code && fk.errors.referral_code ? (
                    <div className="error">{fk.errors.referral_code}</div>
                  ) : result ? (
                    <div className="no-error" style={{ textAlign: 'center' }}>Referral From: {result}</div>
                  ) : (
                    <div className="error" style={{ textAlign: 'center' }}>Invalid Referral Id</div>
                  )}
                </FormControl>
              </Box>
              <Box mt={3}>
                <FormControl fullWidth>

                  <TextField
                    id="name"
                    placeholder="Enter Name"
                    className="loginfields"
                    name="name"
                    type="text"
                    value={fk.values.name}
                    onChange={fk.handleChange}
                    onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                  />
                  {fk.touched.name && fk.errors.name && (
                    <div className="error">{fk.errors.name}</div>
                  )}
                </FormControl>
              </Box>
              <Box mt={4}>
                <FormControl fullWidth>

                  <TextField
                    id="fullWidth"
                    placeholder="Enter Mobile Number"
                    className="loginfields"
                    name="mobile"
                    type="number"
                    value={fk.values.mobile}
                    onChange={fk.handleChange}
                    onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                    InputProps={{
                      startAdornment: <InputAdornment position="start" sx={{ color: 'white !important' }}>+91</InputAdornment>,
                    }}
                  />
                  {fk.touched.mobile && fk.errors.mobile && (
                    <div className="error">{fk.errors.mobile}</div>
                  )}
                </FormControl>
              </Box>
              <Box mt={4}>
                <FormControl fullWidth>

                  <TextField
                    id="fullWidth"
                    type="email"
                    placeholder="Enter email"
                    className="loginfields"
                    name="email"
                    value={fk.values.email}
                    onChange={fk.handleChange}
                    onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                  />
                  {fk.touched.email && fk.errors.email && (
                    <div className="error">{fk.errors.email}</div>
                  )}
                </FormControl>
              </Box>
              <Box mt={4}>
                <FormControl fullWidth>

                  <OutlinedInput
                    placeholder="Enter password"
                    name="password"
                    value={fk.values.password}
                    onChange={fk.handleChange}
                    onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                    className="loginfieldspass2"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOff sx={{ color: zubgbackgrad }} />
                          ) : (
                            <Visibility sx={{ color: zubgbackgrad }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {fk.touched.password && fk.errors.password && (
                    <div className="error">{fk.errors.password}</div>
                  )}
                </FormControl>
              </Box>
              <Box mt={4}>
                <FormControl fullWidth>

                  <OutlinedInput
                    className="loginfieldspass2"
                    name="confirmed_password"
                    id="confirmed_password"
                    value={fk.values.confirmed_password}
                    onChange={fk.handleChange}
                    onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                    placeholder="Enter confirm password"
                    type={show_confirm_password ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handle_confirm_ClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {show_confirm_password ? (
                            <VisibilityOff sx={{ color: zubgbackgrad }} />
                          ) : (
                            <Visibility sx={{ color: zubgbackgrad }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {fk.touched.confirmed_password &&
                    fk.errors.confirmed_password && (
                      <div className="error">
                        {fk.errors.confirmed_password}
                      </div>
                    )}
                </FormControl>
              </Box>
              <Box mt={1}>
                <FormControl fullWidth>
                  <FormControlLabel

                    control={
                      <Checkbox
                        checked={fk.values.privacy_policy}
                        sx={{ color: kidarkgreen, ml: 5 }}
                        onClick={() =>
                          fk.setFieldValue(
                            "privacy_policy",
                            !fk.values.privacy_policy
                          )
                        }
                      />
                    }
                    label={<Typography sx={{ color: 'kidarkgreen', fontSize: '12px !important', fontWeight: '400 !important' }}> I have read and agree 【Privacy Agreement】</Typography>}
                  />
                </FormControl>
              </Box>
              <Stack direction="row" className="loginbtnbox" >
                <Button
                  component={NavLink}
                  className="btnLogin"
                  onClick={fk.handleSubmit}
                >
                  Register
                </Button>
              </Stack>
              <Box sx={{ width: '100%', textAlign: 'center' }} mt={5}>
                <Typography variant="body1" sx={{ color: kidarkgreen, fontSize: '13px !important', fontWeight: '500 !important' }}>already have an account</Typography>
                <NavLink to="/auth">
                  <Typography variant="body1" sx={{ color: kigreen, fontSize: '17px', fontWeight: '600', mt: 1, }}>Login Now <ArrowRightAltTwoTone /></Typography>
                </NavLink>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <CustomCircularProgress isLoading={loding} />
    </Container>
  );
}

export default Register;
