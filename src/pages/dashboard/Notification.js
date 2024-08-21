import { Box } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { GetPanelBanner } from "../../services/apicalling";

const Notification = () => {

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
          <Box
            className="mt-2"
            sx={{ "&>p": { color: "white", fontSize: "12px" } }}
          >
            <img src={`https://admin.kimiko.biz/public/${item?.image}`} alt="" />
          </Box>
        )
      })}

    </Box>
  );
};

export default Notification;
