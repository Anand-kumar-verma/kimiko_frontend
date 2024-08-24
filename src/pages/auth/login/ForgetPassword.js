import {
  Box,
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import OtpInput from "react-otp-input";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logokimi.png";
import { endpoint } from "../../../services/urls";
import { kigrad } from "../../../Shared/color";
import CustomCircularProgress from "../../../Shared/CustomCircularProgress";
import { ForgetPasswordSchemaValidation } from "../../../Shared/Validation";
function ForgetPassword() {
  const [loding, setloding] = useState(false);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [openOTPBox, setopenOTPBox] = useState(false);
  const initialValue = {
    mobile: "",
    password: "",
  };

  const fk = useFormik({
    initialValues: initialValue,
    validationSchema: ForgetPasswordSchemaValidation,
    onSubmit: () => {
      openOTPBox
        ? veryFyOTPAndChangePassword(fk.values)
        : loginFunction(fk.values);
    },
  });

  const veryFyOTPAndChangePassword = async (reqbody) => {
    setloding(true);
    try {
      const response = await axios.get(
        `${endpoint.veryfy_otp}?mobile=${reqbody.mobile}&otp=${otp}&password=${reqbody.password}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (response?.data?.msg === "Successfully Otp Verify") {
        setopenOTPBox(false);
        fk.handleReset();
        navigate("/");
      }
      toast.success(response?.data?.msg);
    } catch (e) {
      toast.error(e?.message);
      console.error(e);
    }
    setloding(false);
  };
  const loginFunction = async (reqbody) => {
    setloding(true);
    try {
      const response = await axios.get(
        `${endpoint.send_otp}?mobile=${reqbody.mobile}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (response?.data?.msg === "Successfully Otp Send") {
        setopenOTPBox(true);
      }
      if (response?.data?.otp) {
        toast.success(
          response?.data?.msg + " " + "OTP is: " + response?.data?.otp
        );
      } else {
        toast.success(response?.data?.msg);
      }
    } catch (e) {
      toast.error(e?.message);
      console.error(e);
    }
    setloding(false);
  };

  return (
    <Container
      sx={{
        background: kigrad,
        minHeight: "100vh",
        pb: '100px !important',
      }}
    >
      <Typography variant="body1" color="initial" sx={{ textAlign: 'center', py: 2, fontWeight: '600', fontSize: '17px' }}>Forget Password</Typography>
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
              sx={{ width: "150px", margin: "auto" }}
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
              <FormControl fullWidth sx={{ mt: 10 }}>
                <>
                  <TextField
                    id="mobile"
                    type="number"
                    name="mobile"
                    placeholder="Enter  mobile no"
                    className="loginfields"
                    value={fk.values.email}
                    onChange={fk.handleChange}
                    onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                  />

                  {fk.touched.mobile && fk.errors.mobile && (
                    <div className="error">{fk.errors.mobile}</div>
                  )}
                </>
                {openOTPBox && (
                  <>
                    <>
                      <Stack direction="row" className="loginlabel mt-5">
                        <Typography variant="h3">Enter New Password</Typography>
                      </Stack>
                      <TextField
                        id="password"
                        type="text"
                        name="password"
                        placeholder="Enter Password"
                        className="loginfields"
                        value={fk.values.password}
                        onChange={fk.handleChange}
                        onKeyDown={(e) =>
                          e.key === "Enter" && fk.handleSubmit()
                        }
                      />
                    </>
                    <div className="!flex !justify-center mt-3">
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={
                          <span style={{ width: "10px" }}> </span>
                        }
                        renderInput={(props) => (
                          <input
                            {...props}
                            style={{
                              width: "50px",
                              height: "50px",
                              background: "transparent", // Set background to transparent
                              color: "blue", // Set text color to blue
                              border: "2px solid white",
                              textAlign: "center",
                            }}
                          />
                        )}
                      />
                    </div>
                  </>
                )}
              </FormControl>
              <div className="flex flex-col justify-center !mt-5">
                <Button
                  type="submit"
                  value="Submit"
                  component={NavLink}
                  className="btnLogin"
                  onClick={fk.handleSubmit}
                >
                  {openOTPBox ? "Submit" : "Forget Password"}
                </Button>
                <p className="!text-sm text-right" style={{ marginTop: '30PX' }}>
                  <span
                    className="!cursor-pointer"
                    onClick={() => navigate("/auth")}
                  >
                    Return to Login
                  </span>
                </p>
              </div>
              <Stack direction="row" className="loginbtnbox" mt={2}></Stack>
              <CustomCircularProgress isLoading={loding} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ForgetPassword;
