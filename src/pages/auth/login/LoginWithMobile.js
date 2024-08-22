import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
// import * as uuid from "uuid";
import { ArrowRightAltTwoTone } from "@mui/icons-material";
import CryptoJS from 'crypto-js';
import { storeCookies } from "../../../Shared/CookieStorage";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { LoginMobileSchemaValidaton } from "../../../Shared/Validation";
import { kidarkgreen, kigreen, kilightgreen } from "../../../Shared/color";
import { endpoint } from "../../../services/urls";
function LoginWithMobile() {
  // const device_id = uuid.v4();
  const [showPassword, setShowPassword] = React.useState(false);
  const [loding, setloding] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const initialValue = {
    mob: "",
    pass: "",
    isAllowCheckBox: false,
    // device_id: device_id || uuid.v4(),
  };

  const fk = useFormik({
    initialValues: initialValue,
    validationSchema: LoginMobileSchemaValidaton,
    onSubmit: () => {
      const reqbody = {
        username: fk.values.mob,
        password: fk.values.pass,
        // device_id: device_id,
      };
      loginFunction(reqbody);
    },
  });

  const loginFunction = async (reqbody) => {
    setloding(true);
    try {
      const response = await axios.post(endpoint.login, reqbody, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      toast.success(response?.data?.msg);
      if (response?.data?.error === "200") {
        const value = CryptoJS.AES.encrypt(JSON.stringify(response?.data), "anand")?.toString();
        localStorage.setItem("logindataen", value);
        sessionStorage.setItem("isAvailableUser", true);
        sessionStorage.setItem("isAvailableCricketUser", true);
        // get_user_data(response?.data?.UserID);
        setloding(false);
        storeCookies();
        navigate("/dashboard");
        window.location.reload();
      }
    } catch (e) {
      toast.error(e?.message);
      console.error(e);
    }
    setloding(false);
  };

  const get_user_data = async (id) => {
    try {
      const response = await axios.get(
        `${endpoint.get_data_by_user_id}?id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (response?.data?.error === "200") {
        localStorage.setItem(
          "aviator_data",
          JSON.stringify(response?.data?.data)
        );
        sessionStorage.setItem("isAvailableUser", true);
      }
    } catch (e) {
      toast(e?.message);
      console.error(e);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        width: "95%",
        marginLeft: "2.5%",
        transition: "0.3s",
      }}
      onSubmit={fk.handleSubmit}
    >
      <Box mt={10}>
        <FormControl fullWidth>
          <TextField
            InputProps={{
              startAdornment: <InputAdornment position="start" sx={{ color: 'white !important' }}>+91</InputAdornment>,
            }}
            id="mob"
            name="mob"
            type="number"
            value={fk.values.mob}
            onChange={fk.handleChange}
            onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
            placeholder="Enter phone number"
            className="loginfields"
          />
          {fk.touched.mob && fk.errors.mob ? (
            <div className="error">{fk.errors.mob}</div>
          ) : (
            String(fk.values.mob)?.includes(".") && (
              <div className="error">Dot not allowed in mob no</div>
            )
          )}
        </FormControl>
      </Box>
      <Box mt={3}>
        <FormControl fullWidth>
          <OutlinedInput
            id="pass"
            name="pass"
            value={fk.values.pass}
            onChange={fk.handleChange}
            placeholder="Enter password"
            onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
            className="loginfieldspass"
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
                    <VisibilityOff sx={{ color: kilightgreen }} />
                  ) : (
                    <Visibility sx={{ color: kilightgreen }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          {fk.touched.pass && fk.errors.pass && (
            <div className="error">{fk.errors.pass}</div>
          )}
          <Box mt={2}>
            <p className="!text-end col-span-1 ">
              <span
                style={{ color: kidarkgreen, fontWeight: '600' }}
                className=" !cursor-pointer"
                onClick={() => navigate("/forget-password")}
              >
                Forget Password?
              </span>
            </p>
          </Box>
        </FormControl>
      </Box>
      {/* <Box mt={1}>
        <FormControl fullWidth>
          <FormControlLabel
            required
            onClick={() =>
              fk.setFieldValue("isAllowCheckBox", !fk.values.isAllowCheckBox)
            }
            control={
              <Checkbox
                checked={fk.values.isAllowCheckBox}
                sx={{ color: zubgtext }}
              />
            }
            label="Remember password"
            sx={{ color: 'white', fontSize: '13px', fontWeight: '800' }}
          />
        </FormControl>
      </Box> */}
      <Button
        type="submit"
        value="Submit"
        component={NavLink}
        className="btnLogin"
        onClick={fk.handleSubmit}
      >
        Login
      </Button>
      <Box sx={{ width: '100%', textAlign: 'center' }} mt={10}>
        <Typography variant="body1" sx={{ color: kidarkgreen, fontSize: '13px !important', fontWeight: '500 !important' }}>"Don't have an account yet? "</Typography>
        <NavLink to="/register">
          <Typography variant="body1" sx={{ color: kigreen, fontSize: '17px', fontWeight: '600', mt: 1, }}>Register Now <ArrowRightAltTwoTone /></Typography>
        </NavLink>
      </Box>
      <CustomCircularProgress isLoading={loding} />
    </Box>
  );
}

export default LoginWithMobile;
