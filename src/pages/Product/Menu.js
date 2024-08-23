import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { kidarkgreen, kigrad, kigreen, zubgback, zubgbackgrad, zubggray, zubgtext } from '../../Shared/color';
import Layout from '../../component/Layout/Layout';
// import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { NavigateNextRounded } from '@mui/icons-material';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardReturnRounded';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import { useQuery } from 'react-query';
import CustomCircularProgress from '../../Shared/CustomCircularProgress';
import coffeem1 from '../../assets/kiimages/coffeem1.jpg';
import logo from "../../assets/logokimi.png";
import { GetProductListFn } from '../../services/apicalling';



const Menu = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { isLoading, data } = useQuery(
    ["product_list"],
    () => GetProductListFn(),
    {
      refetchOnMount: false,
      refetchOnReconnect: true,
    }
  );

  const products = data?.data?.data || [];
  const navigate = useNavigate()

  const images = [
    {
      img: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Medium/20230221085108-5a53cd1d-5208-4628-a6b5-612d28e9a77e.jpg"
    },
    {
      img: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Medium/5-kw-solar-power-system-for-h-20240403172102928.jpg"
    },
    {
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS8AX7u2xWs1LFKtZJrQfAvFEJjB42BqLo8SfR_nUE_4zBKAjrS4r88DVNuU6qEuWcVM5_3nmBk3akVD2G7J_LrndFMAtacqM5N8JpvBFuPeR8xN5O4tR8x2ORbMH3KuULgCPvOIdMjUaY&usqp=CAc"
    },
    {
      img: "data:image/webp;base64,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"
    },
    {
      img: "https://www.solaredge.com/us/sites/nam/files/2023-01/Power%20optimizer%20Residential_Cable-01.png"
    },
    {
      img: "data:image/webp;base64,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"
    }
  ];

  const product = [
    { name: 'S-Solor-Energy-3800', img: coffeem1, Price: '3800 Rs', Cycle: '5 Days', Total: '19800 Rs', percentage: 40, date: '00:23:50:21' },
    { name: 'S-Solor-Energy-4800', img: coffeem1, Price: '3800 Rs', Cycle: '5 Days', Total: '19800 Rs', percentage: 60, date: '00:23:50:21' },
    { name: 'S-Solor-Energy-9800', img: coffeem1, Price: '3800 Rs', Cycle: '5 Days', Total: '19800 Rs', percentage: 30, date: '00:23:50:21' },
    { name: 'S-Solor-Energy-5800', img: coffeem1, Price: '3800 Rs', Cycle: '5 Days', Total: '19800 Rs', percentage: 20, date: '00:23:50:21' },
    { name: 'S-Solor-Energy-1800', img: coffeem1, Price: '3800 Rs', Cycle: '5 Days', Total: '19800 Rs', percentage: 50, date: '00:23:50:21' },
    { name: 'S-Solor-Energy-6800', img: coffeem1, Price: '3800 Rs', Cycle: '5 Days', Total: '19800 Rs', percentage: 70, date: '00:23:50:21' },
    { name: 'S-Solor-Energy-8800', img: coffeem1, Price: '3800 Rs', Cycle: '5 Days', Total: '19800 Rs', percentage: 10, date: '00:23:50:21' },
    { name: 'S-Solor-Energy-9800', img: coffeem1, Price: '3800 Rs', Cycle: '5 Days', Total: '19800 Rs', percentage: 90, date: '00:23:50:21' },
    { name: 'S-Solor-Energy-3800', img: coffeem1, Price: '3800 Rs', Cycle: '5 Days', Total: '19800 Rs', percentage: 0, date: '00:23:50:21' },
    { name: 'S-Solor-Energy-4800', img: coffeem1, Price: '3800 Rs', Cycle: '5 Days', Total: '19800 Rs', percentage: 20, date: '00:23:50:21' },
  ]

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
        <CustomCircularProgress isLoading={isLoading} />
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => navigate(-1)} sx={{ width: '33%' }}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          {/* <Typography variant="body1" color="initial">
            Products
          </Typography> */}
          <div className="flex items-center justify-center " style={{ width: '33%', background: kidarkgreen, padding: '15px' }}>
            <Box component="img" src={logo} sx={{ width: "120px", margin: 'auto', ml: '20px' }}></Box>
          </div>
          <Box sx={{ width: '33%' }}>
          </Box>
        </Box>
        {/* <Box sx={{ padding: 2, background: kigrad, }}>
          <Typography variant="h6" sx={{ color: 'white' }}>Product</Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <NavLink underline="hover" sx={{ color: 'white', fontSize: '12px !important' }} to={'/dashboard'}>
              Home
            </NavLink>
            <Link sx={{ color: 'white', fontSize: '12px !important' }}> Product </Link>
          </Breadcrumbs>
        </Box> */}

        <Box sx={{ width: '100%', typography: 'body1', mt: '2px' }}>
          <Box sx={{ width: '95%', ml: '2.5%', mt: 2 }}>
            {
              product.map((item, value) => (
                <Box sx={style.kiproductbox}>
                  <Typography variant="body1" color="initial" sx={style.kiproductTitle}>
                    {item.name}
                  </Typography>
                  <Stack direction={'row'} sx={style.kiproflex}>
                    <Box sx={style.kiimageBox}>
                      <Box component={'img'} src={coffeem1} sx={style.kiimage}></Box>
                    </Box>
                    <Box sx={{ width: '55%', mr: 2 }}>
                      <Stack direction={'row'} sx={style.kipriceStack}>
                        <Typography variant="body2" sx={style.kipriceLabel}>Price :</Typography>
                        <Typography variant="body1" sx={style.kipriceValue}> {item.Price}</Typography>
                      </Stack>
                      <Stack direction={'row'} sx={style.kipriceStack}>
                        <Typography variant="body2" sx={style.kipriceLabel}>Cycle :</Typography>
                        <Typography variant="body1" sx={style.kipriceValue}> {item.Cycle}</Typography>
                      </Stack>
                      <Stack direction={'row'} sx={style.kipriceStack}>
                        <Typography variant="body2" sx={style.kipriceLabel}>Total :</Typography>
                        <Typography variant="body1" sx={style.kipriceValue}> {item.Total}</Typography>
                      </Stack>
                    </Box>
                  </Stack>
                  <Stack direction={'row'} sx={{ mt: 2, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={style.kipercentageBox}>
                      <Typography variant="body1" color="initial" sx={style.kipercentageLabel}>{item.percentage}%</Typography>
                      <Box sx={{ ...style.kiprogressBar, width: `${item.percentage}%` }}></Box>
                    </Box>
                    <Button onClick={() => navigate(`/menu/menu-details/`)} sx={style.kibutton} variant="contained" > Buy {item.date} < NavigateNextRounded /></Button>
                  </Stack>
                </Box>
              ))
            }
          </Box >
        </Box>


        {/* <div className="p-4 mb-20">
          <div className="grid grid-cols-1 gap-5 ">
            {products?.map((product, index) => (
              <div key={product?.m_pack_id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={images[index % images.length].img}
                  alt={product.image}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <p className="text-green-600 !font-bold mb-2">{product?.m_pack_name}</p>
                  <h2 className="text-xl font-semibold mb-2">₹ {product?.m_pack_fee}</h2>
                  <p className="text-gray-600 font-semibold "> Daily income :  <span className='!font-bold !text-black '> ₹ {product?.m_pack_roi_income || 0}</span> </p>
                  <p className="text-gray-600 font-semibold ">Validity Period: <span className='!font-bold !text-black'>  {product?.m_pack_roi_days || 0}</span> </p>
                  <p className="text-gray-600 font-semibold ">Cashback income : <span className='!font-bold !text-black'> ₹ {product?.m_pack_growth_amt || 0}</span> </p>
                  <Button sx={style.paytmbtntwo} onClick={() => navigate(`/menu/menu-details/${product?.m_pack_id}`)}>
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </Container>
    </Layout >
  );
}

export default Menu;
const style = {
  header: {
    padding: "5px 8px",
    background: kidarkgreen,
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
    width: "31%",
    border: "1px solid white",
    padding: "10px",
    "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
  },
  paytmbtntwo: {
    borderRadius: "5px",
    textTransform: "capitalize",
    mb: 2,
    background: zubgtext,
    color: "white !important",
    width: "100%",
    mt: "20px",
    border: "1px solid white",
    padding: "10px",
    "&:hover": { background: zubgbackgrad, border: "1px solid transparent" },
  },
  kiproductbox: { padding: '16px 0px 0px 16px', borderRadius: '10px', background: '#fff', width: '100%', mb: 2, boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;' },
  kiproflex: { alignItems: 'center', justifyContent: 'space-between' },
  kiproductTitle: { fontSize: '14px', fontWeight: '500', mb: 2, },
  kiimageBox: { width: '35%' },
  kiimage: { width: '100%', borderRadius: '10px' },
  kipriceStack: { alignItems: 'center', justifyContent: 'space-between', mb: 1 },
  kipriceLabel: { fontSize: '13px', fontWeight: '500', color: 'gray' },
  kipriceValue: { fontSize: '15px', fontWeight: '600', color: kigreen },
  kipercentageBox: { height: '20px', background: '#d2cdcd', width: '49%', borderRadius: '10px', overflow: 'hidden', position: 'relative' },
  kipercentageLabel: { textAlign: 'center', color: kidarkgreen, fontSize: '13px', fontWeight: '600', position: 'absolute', zIndex: 100, left: '45%', top: '1%' },
  kiprogressBar: { height: '100%', background: kigreen, width: '40%', borderRadius: '0px 30px 30px 0px', position: 'absolute', top: 0, left: 0 },
  kibutton: { width: '49%', borderRadius: '50px 0px 10px 0px', py: 1, px: 0, pl: 2, fontSize: '13px', '&>svg': { fontSize: '20px', mb: '3px' } },
};