import React from 'react';
import Layout from '../../component/Layout/Layout';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { zubgback, zubgbackgrad, zubggray, zubgmid, zubgtext } from '../../Shared/color';
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { endpoint } from '../../services/urls';
import toast from 'react-hot-toast';
import axios from 'axios';
import CustomCircularProgress from '../../Shared/CustomCircularProgress';
import CryptoJS from "crypto-js";

const imageMapping = {
    "m_pack_id1": "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Medium/20230221085108-5a53cd1d-5208-4628-a6b5-612d28e9a77e.jpg",
    "m_pack_id2": "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Medium/5-kw-solar-power-system-for-h-20240403172102928.jpg",
    "m_pack_id3": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS8AX7u2xWs1LFKtZJrQfAvFEJjB42BqLo8SfR_nUE_4zBKAjrS4r88DVNuU6qEuWcVM5_3nmBk3akVD2G7J_LrndFMAtacqM5N8JpvBFuPeR8xN5O4tR8x2ORbMH3KuULgCPvOIdMjUaY&usqp=CAc",
    "m_pack_id5": "https://www.solaredge.com/us/sites/nam/files/2023-01/Power%20optimizer%20Residential_Cable-01.png",
};
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
            toast(response?.data?.msg ,[-1])
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

    const imageUrl = imageMapping[m_pack_id] || "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Medium/20230221085108-5a53cd1d-5208-4628-a6b5-612d28e9a77e.jpg";
    return (
        <Layout>
            <Container
                className="no-scrollbar"
                sx={{
                    background: zubgback,
                    width: "100%",
                    height: "100vh",
                    overflow: "auto",
                }}
            >
                    <CustomCircularProgress isLoading={loding} />
                <Box sx={style.header}>
                    <Box component={NavLink} onClick={() => navigate(-1)}>
                        <KeyboardArrowLeftOutlinedIcon />
                    </Box>
                    <Typography variant="body1" color="initial">
                        Product Details
                    </Typography>
                    <Box  >
                    </Box>
                </Box>
                <div className="p-4 mb-20">
                     <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                     <img src={imageUrl} alt={`Pack ${m_pack_id}`} style={{ width: '100%', height: 'auto' }} />
                     {/* <img src={imageMapping[m_pack_id]} alt={`Pack ${m_pack_id}`} /> */}
                            <div className="p-4 flex-col gap-5 ">
                                <p className="text-red-800 !text-center !font-bold mb-2">{data?.m_pack_name || "Solar"}</p>
                                <p className="text-black !text-center !font-bold mb-2">₹ {data?.m_pack_fee || 0}</p>
                                <div className=''>
                                    <div className="flex justify-between my-2" >
                                        <p className="text-gray-600 font-semibold">Daily income: </p>
                                        <span className='!font-bold  ml-5 !text-black'> ₹ {data?.m_pack_roi_income || 0}</span>
                                    </div>
                                    <div className="flex justify-between my-2" >
                                        <p className="text-gray-600 font-semibold">Validity Period: </p>
                                        <span className='!font-bold  ml-5 !text-black'> ₹ {data?.m_pack_roi_days || 0}</span>
                                    </div>
                                    <div className="flex justify-between my-2"  >
                                        <p className="text-gray-600 font-semibold">Cashback income: </p>
                                        <span className='!font-bold  ml-5 !text-black'> ₹ {data?.m_pack_growth_amt || 0}</span>
                                    </div>

                                    <p className='!text-center !my-5 font-bold border-b-2 '>  🌟California Almonds🌟</p>
                                    <p className='my-2 !font-bold'> Daily Income: <span className='!font-bold  !text-purple-700'>0💰</span></p>
                                    <p className='my-2 !font-bold'> Cycle:  <span className='!font-bold  !text-purple-700'>0 days</span></p>
                                    <p className='my-2 !font-bold'> Cashback income:  <span className='!font-bold  !text-purple-700'>3% cashback on every purchase.</span></p>
                                    <p className='my-2 !font-bold'> Direct income:<span className='!font-bold  !text-purple-700'> 10%; on get every refferal ID </span></p>
                                    <p className='my-2 !font-bold'>💰Purchase Bonus:  <span className='!font-bold  !text-purple-700'>1600Rs (Buyer will receive 76.19Rs/day bonus)</span></p>

                                </div>
                                <Button sx={style.paytmbtn} onClick={handleBuyNow}
                                    className='!my-5'>
                                    Rent Now
                                </Button>
                            </div>
                        </div>
               </div>
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
        background: zubgtext,
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