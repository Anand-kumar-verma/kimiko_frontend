import { Visibility, VisibilityOff } from '@mui/icons-material';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { Box, Button, Container, FormControl, IconButton, InputAdornment, OutlinedInput, Stack, Typography } from '@mui/material';
import axios from 'axios';
import CryptoJS from "crypto-js";
import { useFormik } from 'formik';
import * as React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../../component/Layout/Layout';
import { MyProfileDataFn } from '../../../services/apicalling';
import { endpoint } from '../../../services/urls';
import { zubgback, zubgbackgrad, zubgmid, zubgtext } from '../../../Shared/color';
import CustomCircularProgress from '../../../Shared/CustomCircularProgress';

function LoginPassword() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const [showoldPassword, setShowoldPassword] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [show_confirm_password, set_show_confirm_password] =React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowoldPassword = () => setShowoldPassword((show) => !show);
  const handle_confirm_ClickShowPassword = () =>
    set_show_confirm_password(!show_confirm_password);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {  data: profile } = useQuery(
    ["myprofile"],
    () => MyProfileDataFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );

  const result = profile?.data?.data || [];
  console.log(result?.password , "ghhdj")

  const login_data =
  (localStorage.getItem("logindataen") &&
    CryptoJS.AES.decrypt(
      localStorage.getItem("logindataen"),
      "anand"
    )?.toString(CryptoJS.enc.Utf8)) ||
  null;

const user_id = login_data && JSON.parse(login_data)?.UserID;

  const initialValue = {
    userid: "",
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  };

  const fk = useFormik({
    initialValues: initialValue,
    enableReinitialize: true,
    onSubmit: () => {
      const reqbody = {
        userid: user_id,
        oldpassword: fk.values.oldpassword,
        newpassword: fk.values.newpassword,
        confirmpassword: fk.values.confirmpassword,
      };
      changePassword(reqbody);
    },
  });

  const changePassword = async (reqbody) => {
    setLoading(true);

    try {
      const response = await axios.post(endpoint.change_password, reqbody, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    toast.success(response?.data?.msg);
      localStorage.clear();
     navigate("/");
    } catch (error) {
      toast.error(error?.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Layout>
      <Container sx={style.container}>
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => goBack()}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <Typography variant="body1" color="initial">Change login password</Typography>
          <Typography variant="body1" color="initial"> </Typography>
        </Box>
        <Box sx={{ width: '95%', marginLeft: '2.5%', background: zubgback, borderRadius: '10px', padding: '10px', mt: '10px', }}>
          <Box mt={2} component='form'
           onSubmit={fk.handleSubmit}>
            <Box mt={2}>

              <FormControl fullWidth>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3">Old password</Typography>
                </Stack>
                <OutlinedInput
                  placeholder="Enter password"
                  name="oldpassword"
                  value={fk.values.oldpassword}
                  onChange={fk.handleChange}
                  className="loginfieldspass"
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                  type={showoldPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowoldPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showoldPassword ? <VisibilityOff sx={{ color: zubgtext }} /> : <Visibility sx={{ color: zubgtext }} />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box mt={2}>

              <FormControl fullWidth>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3">Set new password</Typography>
                </Stack>
                <OutlinedInput
                  placeholder="Enter new password"
                  className="loginfieldspass"
                  name="newpassword"
                  value={fk.values.newpassword}
                  onChange={fk.handleChange}
                  onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff sx={{ color: zubgtext }} /> : <Visibility sx={{ color: zubgtext }} />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box mt={2}>
              <FormControl fullWidth>
                <Stack direction="row" className="loginlabel">
                  <Typography variant="h3">Confirm new password</Typography>
                </Stack>
                <OutlinedInput
                 name="confirmpassword"
                 value={fk.values.confirmpassword}
                 onChange={fk.handleChange}
                 onKeyDown={(e) => e.key === "Enter" && fk.handleSubmit()}
                  className="loginfieldspass"
                  placeholder="Enter new confirm password"
                  type={show_confirm_password ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handle_confirm_ClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {show_confirm_password ? <VisibilityOff sx={{ color: zubgtext }} /> : <Visibility sx={{ color: zubgtext }} />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Button sx={style.paytmbtntwo} onClick={fk.handleSubmit} >Change Password </Button>
              {isLoading && (
                            <CustomCircularProgress isLoading={isLoading}/>
                        )}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default LoginPassword;


export const style = {
  container: { background: zubgback, width: '100%', height: '100vh', overflow: 'auto', },
  header: {
    padding: '10px 8px',
    background: zubgtext,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > p': {
      fontSize: '20px',
      fontWeight: '600',
      textAlign: 'center',
      color: 'white',
    },
    '& > a > svg': {
      color: 'white',
      fontSize: '35px'
    }
  },
  notificationBox: {
    width: '95%', marginLeft: '2.5%', borderRadius: '10px', background: zubgmid, padding: '10px', mt: '10px',
    '&>div>div>p': { color: 'white', fontSize: '14px', marginLeft: '10px', fontWeight: '500', },
    '&>p': { color: 'white', fontSize: '13px', marginLeft: '0px', fontWeight: '500', mt: '10px', },
    '&>div>div>svg': { color: 'white', fontSize: '24px', }, '&>div>svg': { color: 'white', fontSize: '24px', },
  },
  notificationStack: { alignItems: 'center', justifyContent: 'space-between', },
  paytmbtntwo: { borderRadius: '5px', textTransform: 'capitalize', mb: 2, background: zubgtext, color: 'white !important', width: '100%', mt: '20px', border: "1px solid white", padding: '10px', '&:hover': { background: zubgbackgrad, border: "1px solid transparent", } },

};
