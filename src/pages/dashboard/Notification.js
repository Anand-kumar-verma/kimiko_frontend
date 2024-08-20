import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { gamename, zubgbackgrad } from "../../Shared/color";

const Notification = ({ handleClosepolicy }) => {
  return (
    <Box sx={{ "&>p": { textAlign: "center", color: "red" } }}>
   
      <Box
        className="mt-2"
        sx={{ "&>p": { color: "white", fontSize: "12px" } }}
      >
      
      </Box>

     
   
     
      <div className="w-full mt-5 ">
        <Button
          onClick={() => handleClosepolicy()}
          style={{ width: "100%", background: zubgbackgrad }}
          variant="contained"
        >
          Confirm
        </Button>
      </div>
    </Box>
  );
};

export default Notification;
