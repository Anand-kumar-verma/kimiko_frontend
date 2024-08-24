import { NavigateNextRounded } from '@mui/icons-material';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardReturnRounded';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomCircularProgress from '../../Shared/CustomCircularProgress';
import { kidarkgreen, kigreen, zubgback, zubgbackgrad, zubggray, zubgtext } from '../../Shared/color';
import coffeem1 from '../../assets/kiimages/coffeem1.jpg';
import logo from "../../assets/logokimi.png";
import Layout from '../../component/Layout/Layout';
import { GetProductListFn } from '../../services/apicalling';



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
        <CustomCircularProgress isLoading={isLoading} />
        <Box sx={style.header}>
          <Box component={NavLink} onClick={() => navigate(-1)} sx={{ width: '33%' }}>
            <KeyboardArrowLeftOutlinedIcon />
          </Box>
          <div className="flex items-center justify-center " style={{ width: '33%', background: kidarkgreen, padding: '15px' }}>
            <Box component="img" src={logo} sx={{ width: "120px", margin: 'auto', ml: '20px' }}></Box>
          </div>
          <Box sx={{ width: '33%' }}>
          </Box>
        </Box>
        <Box sx={{ width: '100%', typography: 'body1', mt: '2px' , mb: 12, }}>
          <Box sx={{ width: '95%', ml: '2.5%', mt: 2  , }}>
            {
              products?.map((item) => (
                <Box sx={style.kiproductbox}>
                  <Typography variant="body1" color="initial" sx={style.kiproductTitle}>
                    {item?.m_pack_name || "Comming Soon"}
                  </Typography>
                  <Stack direction={'row'} sx={style.kiproflex}>
                    <Box sx={style.kiimageBox}>
                      <Box component={'img'} src={coffeem1} sx={style.kiimage}></Box>
                    </Box>
                    <Box sx={{ width: '55%', mr: 2 }}>
                      <Stack direction={'row'} sx={style.kipriceStack}>
                        <Typography variant="body2" sx={style.kipriceLabel}>Price :</Typography>
                        <Typography variant="body1" sx={style.kipriceValue}>₹ {item?.m_pack_fee || 0}</Typography>
                      </Stack>
                      <Stack direction={'row'} sx={style.kipriceStack}>
                        <Typography variant="body2" sx={style.kipriceLabel}>Cycle :</Typography>
                        <Typography variant="body1" sx={style.kipriceValue}> {item?.m_pack_roi_days || 0} Days</Typography>
                      </Stack>
                      <Stack direction={'row'} sx={style.kipriceStack}>
                        <Typography variant="body2" sx={style.kipriceLabel}>Total Income :</Typography>
                        <Typography variant="body1" sx={style.kipriceValue}>₹ {item?.m_total_income || 0}</Typography>
                      </Stack>

                    </Box>
                  </Stack>
                  <Stack direction={'row'} sx={{ mt: 2, alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={style.kipercentageBox}>
                      <Typography variant="body1" color="initial" sx={style.kipercentageLabel}></Typography>
                      {/* <Box sx={{ ...style.kiprogressBar}}></Box> */}
                    </Box> 
                    {/* <Box sx={style.kipercentageBox}>
                      <Typography variant="body1" color="initial" sx={style.kipercentageLabel}>40%</Typography>
                      <Box sx={{ ...style.kiprogressBar, width: `200px` }}></Box>
                    </Box> */}

                    <Button onClick={() => navigate(`/menu/menu-details/${item?.m_pack_id}`)} sx={style.kibutton} variant="contained" > Rent Now < NavigateNextRounded /></Button>
                  </Stack>
                </Box>
              ))
            }
          </Box >
        </Box>
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