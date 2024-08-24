import { Box } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { GetPanelBanner } from "../../services/apicalling";

const Notification = ({handleClosepolicy}) => {

  const {data } = useQuery(["pannel_banner"], () => GetPanelBanner(), {
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retryOnMount: false,
  })

  const res = data?.data?.data || []
  console.log(res)

  return (
    <Box sx={{ "&>p": { textAlign: "center", color: "red" } }}>
      {res?.map((item) => {
        return (
         <>
         <Box
            className="mt-2"
            sx={{ "&>p": { color: "white", fontSize: "12px" } }}
          >
            <img src={`https://admin.kimiko.biz/public/${item?.image}`} alt="" className="" />
          </Box>
           <p onClick={handleClosepolicy} className="mt-2 !text-green-800 font-bold !text-center bg-white ">ok </p></>
        )
      })}
    </Box>
   
    
  );
};

export default Notification;
