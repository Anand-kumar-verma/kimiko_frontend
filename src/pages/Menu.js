import React from 'react';
import Layout from '../component/Layout/Layout';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate ,NavLink } from 'react-router-dom';
import { zubgback, zubgbackgrad, zubggray, zubgmid, zubgtext } from '../Shared/color';
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { GetProductListFn } from '../services/apicalling';
import { useQuery } from 'react-query';


const Menu = () => {

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
      <Box sx={style.header}>
        <Box component={NavLink} onClick={() => navigate(-1)}>
          <KeyboardArrowLeftOutlinedIcon />
        </Box>
        <Typography variant="body1" color="initial">
          Products
        </Typography>
        <Box component={NavLink} onClick={() => navigate(-1)}></Box>
      </Box>
      <div className="p-4">
      <div className="grid grid-cols-2 gap-5 ">
        {products?.map(product => (
          <div key={product?.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img src="https://midlandpl.com/application/package/1.jpg" alt={product.m_pack_name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-600 mb-4">{product?.m_pack_name}</p>
              <h2 className="text-xl font-semibold mb-2">₹ {product?.m_pack_roi_income}</h2>
              <p className="text-gray-600 font-semibold mb-2">Daily income :{product?.m_pack_roi_income  || 0 } </p>
              <p className="text-gray-600 font-semibold mb-2">Validity Period:{product?.m_pack_roi_income   || 0 } </p>
              <p className="text-gray-600 font-semibold mb-2">Cashback income :{product?.m_pack_roi_income  || 0 } </p>
             <Button sx={style.paytmbtntwo} >
                  Details
                </Button>
           
            </div>
          </div>
        ))}
      </div>
    </div>
    

   
  
    </Container>
  </Layout>
  
  );
}

export default Menu;
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
        width: "31%",
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