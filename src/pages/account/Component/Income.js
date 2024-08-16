import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { Box, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { zubgback, zubgmid, zubgshadow, zubgtext, zubgwhite } from '../../../Shared/color';
import Layout from '../../../component/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { endpoint } from '../../../services/urls';
import CryptoJS from "crypto-js";


function Income() {
    const navigate = useNavigate();
    const value =
    (localStorage.getItem("logindataen") &&
      CryptoJS.AES.decrypt(
        localStorage.getItem("logindataen"),
        "anand"
      )?.toString(CryptoJS.enc.Utf8)) ||
    null;
  const user_id = value && JSON.parse(value)?.UserID;
    const [data, setData] = React.useState("");
    const [loding, setLoading] = React.useState(false)
    const report_details = async () => {
        const reqbody = {
            userid: user_id || "",
            type: 3,
            start: "2024 -08 - 15",
            end: "2024 -08 - 15"
        };
        setLoading(true);
        try {
            const response = await axios.post(`${endpoint.report_income}`, reqbody);
            toast(response?.data?.msg, [-1])
            setData(response.data?.data);

        } catch (e) {
            toast.error(e?.message || 'An error occurred');
        }
        setLoading(false);
    };
    React.useEffect(() => {
        report_details();
    }, []);
    const goBack = () => {
        navigate(-1);
    };

    return (
        <Layout>
            <Container sx={style.container}>
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => goBack()}>
                        <KeyboardArrowLeftOutlinedIcon />
                    </Box>
                    <Typography variant="body1" color="initial">Income</Typography>
                    <Typography variant="body1" color="initial"> </Typography>
                </Box>
                {/* <Box sx={style.notificationBox}>
                    <Stack direction='row' sx={style.notificationStack}>
                        <Stack direction='row' sx={style.notificationStack}>
                            <LocalPostOfficeIcon mr={1} />
                            <Typography variant="body1" color="initial">LOGIN NOTIFICATION</Typography>
                        </Stack>
                        <DeleteIcon />
                    </Stack>
                    <Typography variant="body1" color="initial">2024-03-13 10:09:31</Typography>
                    <Typography variant="body1" color="initial">Your account is logged in 2024-03-13 10:09:31</Typography>
                </Box>
                <Box sx={style.notificationBox}>
                    <Stack direction='row' sx={style.notificationStack}>
                        <Stack direction='row' sx={style.notificationStack}>
                            <LocalPostOfficeIcon mr={1} />
                            <Typography variant="body1" color="initial">LOGIN NOTIFICATION</Typography>
                        </Stack>
                        <DeleteIcon />
                    </Stack>
                    <Typography variant="body1" color="initial">2024-03-13 10:09:31</Typography>
                    <Typography variant="body1" color="initial">Your account is logged in 2024-03-13 10:09:31</Typography>
                </Box>
                <Box sx={style.notificationBox}>
                    <Stack direction='row' sx={style.notificationStack}>
                        <Stack direction='row' sx={style.notificationStack}>
                            <LocalPostOfficeIcon mr={1} />
                            <Typography variant="body1" color="initial">LOGIN NOTIFICATION</Typography>
                        </Stack>
                        <DeleteIcon />
                    </Stack>
                    <Typography variant="body1" color="initial">2024-03-13 10:09:31</Typography>
                    <Typography variant="body1" color="initial">Your account is logged in 2024-03-13 10:09:31</Typography>
                </Box>
                <Box sx={style.notificationBox}>
                    <Stack direction='row' sx={style.notificationStack}>
                        <Stack direction='row' sx={style.notificationStack}>
                            <LocalPostOfficeIcon mr={1} />
                            <Typography variant="body1" color="initial">LOGIN NOTIFICATION</Typography>
                        </Stack>
                        <DeleteIcon />
                    </Stack>
                    <Typography variant="body1" color="initial">2024-03-13 10:09:31</Typography>
                    <Typography variant="body1" color="initial">Your account is logged in 2024-03-13 10:09:31</Typography>
                </Box>
                <Box sx={style.notificationBox}>
                    <Stack direction='row' sx={style.notificationStack}>
                        <Stack direction='row' sx={style.notificationStack}>
                            <LocalPostOfficeIcon mr={1} />
                            <Typography variant="body1" color="initial">LOGIN NOTIFICATION</Typography>
                        </Stack>
                        <DeleteIcon />
                    </Stack>
                    <Typography variant="body1" color="initial">2024-03-13 10:09:31</Typography>
                    <Typography variant="body1" color="initial">Your account is logged in 2024-03-13 10:09:31</Typography>
                </Box>
                <Box sx={style.notificationBox}>
                    <Stack direction='row' sx={style.notificationStack}>
                        <Stack direction='row' sx={style.notificationStack}>
                            <LocalPostOfficeIcon mr={1} />
                            <Typography variant="body1" color="initial">LOGIN NOTIFICATION</Typography>
                        </Stack>
                        <DeleteIcon />
                    </Stack>
                    <Typography variant="body1" color="initial">2024-03-13 10:09:31</Typography>
                    <Typography variant="body1" color="initial">Your account is logged in 2024-03-13 10:09:31</Typography>
                </Box>


                <Box sx={style.notificationBox}>
                    <Stack direction='row' sx={style.notificationStack}>
                        <Stack direction='row' sx={style.notificationStack}>
                            <LocalPostOfficeIcon mr={1} />
                            <Typography variant="body1" color="initial">LOGIN NOTIFICATION</Typography>
                        </Stack>
                        <DeleteIcon />
                    </Stack>
                    <Typography variant="body1" color="initial">2024-03-13 10:09:31</Typography>
                    <Typography variant="body1" color="initial">Your account is logged in 2024-03-13 10:09:31</Typography>
                </Box>
                <Box sx={style.notificationBox}>
                    <Stack direction='row' sx={style.notificationStack}>
                        <Stack direction='row' sx={style.notificationStack}>
                            <LocalPostOfficeIcon mr={1} />
                            <Typography variant="body1" color="initial">LOGIN NOTIFICATION</Typography>
                        </Stack>
                        <DeleteIcon />
                    </Stack>
                    <Typography variant="body1" color="initial">2024-03-13 10:09:31</Typography>
                    <Typography variant="body1" color="initial">Your account is logged in 2024-03-13 10:09:31</Typography>
                </Box>
                <Box sx={style.notificationBox}>
                    <Stack direction='row' sx={style.notificationStack}>
                        <Stack direction='row' sx={style.notificationStack}>
                            <LocalPostOfficeIcon mr={1} />
                            <Typography variant="body1" color="initial">LOGIN NOTIFICATION</Typography>
                        </Stack>
                        <DeleteIcon />
                    </Stack>
                    <Typography variant="body1" color="initial">2024-03-13 10:09:31</Typography>
                    <Typography variant="body1" color="initial">Your account is logged in 2024-03-13 10:09:31</Typography>
                </Box>
                <Box sx={style.notificationBox}>
                    <Stack direction='row' sx={style.notificationStack}>
                        <Stack direction='row' sx={style.notificationStack}>
                            <LocalPostOfficeIcon mr={1} />
                            <Typography variant="body1" color="initial">LOGIN NOTIFICATION</Typography>
                        </Stack>
                        <DeleteIcon />
                    </Stack>
                    <Typography variant="body1" color="initial">2024-03-13 10:09:31</Typography>
                    <Typography variant="body1" color="initial">Your account is logged in 2024-03-13 10:09:31</Typography>
                </Box>
                <Box sx={style.notificationBox}>
                    <Stack direction='row' sx={style.notificationStack}>
                        <Stack direction='row' sx={style.notificationStack}>
                            <LocalPostOfficeIcon mr={1} />
                            <Typography variant="body1" color="initial">LOGIN NOTIFICATION</Typography>
                        </Stack>
                        <DeleteIcon />
                    </Stack>
                    <Typography variant="body1" color="initial">2024-03-13 10:09:31</Typography>
                    <Typography variant="body1" color="initial">Your account is logged in 2024-03-13 10:09:31</Typography>
                </Box> */}

            </Container>
        </Layout>
    );
}

export default Income;


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
        width: '95%', marginLeft: '2.5%', borderRadius: '10px', background: zubgwhite, boxShadow: zubgshadow, padding: '10px', mt: '10px',
        '&>div>div>p': { color: zubgtext, fontSize: '14px', marginLeft: '10px', fontWeight: '500', },
        '&>p': { color: zubgtext, fontSize: '13px', marginLeft: '0px', fontWeight: '500', mt: '10px', },
        '&>div>div>svg': { color: zubgtext, fontSize: '24px', }, '&>div>svg': { color: zubgtext, fontSize: '24px', },
    }, notificationStack: { alignItems: 'center', justifyContent: 'space-between', },
};
