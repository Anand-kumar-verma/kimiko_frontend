import { Box, Button, Container, Stack, Typography } from '@mui/material';
import axios from 'axios';
import CryptoJS from "crypto-js";
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import logo from "../../assets/logokimi.png";
import Layout from '../../component/Layout/Layout';
import solar1 from "../../Kimassets/images/service-3.jpg";
import { endpoint } from '../../services/urls';
import { kidarkgreen, zubgbackgrad, zubggray, zubgmid, zubgtext } from '../../Shared/color';
import CustomCircularProgress from '../../Shared/CustomCircularProgress';

const MenuDetails = () => {
    const { m_pack_id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = React.useState("");
    const [loding, setLoading] = React.useState(false)

    const value =
        (localStorage.getItem("logindataen") &&
            CryptoJS.AES.decrypt(
                localStorage.getItem("logindataen"),
                "anand"
            )?.toString(CryptoJS.enc.Utf8)) ||
        null;
    const user_id = value && JSON.parse(value)?.UserID;

    const product_details = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${endpoint.product_details}/${m_pack_id}`);
            // toast(response?.data?.msg, [-1])
            setData(response.data?.data);

        } catch (e) {
            toast.error(e?.message || 'An error occurred');
        }
        setLoading(false);
    };
    const handleBuyNow = async () => {
        const reqbody = {
            userid: user_id || "",
            packid: m_pack_id,
        };
        try {
            const response = await axios.post(`${endpoint.rent_now}`, reqbody);
            toast(response?.data?.msg, [-1])
            // navigate('/rent')
            // window.location.reload()
        }
        catch (e) {
            toast.error(e?.message || 'An error occurred');
        }
    };
    React.useEffect(() => {
        product_details();
    }, []);

    return (
        <Layout>
            <Container
                className="no-scrollbar"
                sx={{
                    background: '#E7E7E7',
                    width: "100%",
                    height: "100vh",
                    overflow: "auto",
                }}
            >
                <CustomCircularProgress isLoading={loding} />
                <div className="flex items-center justify-center " style={{ width: '100%', background: kidarkgreen, padding: '15px' }}>
                    <Box component="img" src={logo} sx={{ width: "120px", margin: 'auto', }}></Box>
                </div>
                <Box className="w95" mt={2}>
                    <Box sx={{ background: '#fff', padding: 2, borderRadius: '10px', mb: 12, }}>
                        <Box component='img' src={solar1} sx={{ maxHeight: '35vh', width: '100%', borderRadius: "10px", mb: 2, }}></Box>
                        <Typography variant="body1" sx={{ fontSize: '17px', fontWeight: 600, textAlign: 'center', }}>{data?.m_pack_name || "Solar"}</Typography>
                        <Box sx={{ background: 'white', borderRadius: '10px', padding: 2, }} >
                          
                           
                            <Stack direction='row' className="flexb">
                                <Typography variant="body1" className='kip13' sx={{ mb: '10px' }}> Cycle :</Typography>
                                <Typography variant="body1" className='kip15'> {data?.m_pack_roi_days || 0} DAY</Typography>
                            </Stack>
                            <Stack direction='row' className="flexb">
                                <Typography variant="body1" className='kip13' sx={{ mb: '10px' }}> Rental Price :</Typography>
                                <Typography variant="body1" className='kip15'>₹ {data?.m_pack_fee || 0}</Typography>
                            </Stack>
                            <Stack direction='row' className="flexb">
                                <Typography variant="body1" className='kip13' sx={{ mb: '10px' }}> Daily Income :</Typography>
                                <Typography variant="body1" className='kip15'>₹ {data?.m_pack_roi_income}</Typography>
                            </Stack>
                            <Stack direction='row' className="flexb">
                                <Typography variant="body1" className='kip13' sx={{ mb: '10px' }}>Cashback Income : </Typography>
                                <Typography variant="body1" className='kip15'>₹ {data?.m_pack_growth_amt} </Typography>
                            </Stack>
                            <Stack direction='row' className="flexb">
                                <Typography variant="body1" className='kip13' sx={{ mb: '10px' }}>Direct Income : </Typography>
                                <Typography variant="body1" className='kip15'>₹ {data?.m_pack_direct_amt} </Typography>
                            </Stack>
                        </Box>

                        <Button sx={style.paytmbtn} onClick={handleBuyNow}
                            className='!my-5'>
                            Rent Now
                        </Button>
                    </Box>
                </Box>
               
            </Container>
        </Layout>

    );
}

export default MenuDetails;
const style = {
    header: {
        padding: "5px 8px",
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
        "& > a > svg": {
            color: "white",
            fontSize: "35px",
        },
    },
    wthui: {
        textAlign: "center",
        width: "31%",
        minHeight: "15vh",
        background: zubggray,
        borderRadius: "10px",
        mb: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&>div>p": { color: "white", fontWeight: 600 },
    },
    paytmbtn: {
        mb: 2,
        background: kidarkgreen,
        color: "white !important",
        width: "100%",
        border: "1px solid white",
        padding: "10px",
        "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
    },
    paytmbtntwo: {
        borderRadius: "5px",
        textTransform: "capitalize",
        mb: 2,
        background: zubgmid,
        color: "white !important",
        width: "100%",
        mt: "20px",
        border: "1px solid white",
        padding: "10px",
        "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
    },
};