import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { kidarkgreen, zubgbackgrad } from "../../../Shared/color";

const Msg = ({ handleClosemsg }) => {
  return (
    <Box sx={{ "&>p": { textAlign: "center", color: "red" } }}>

      <Box
        className="mt-2"
        sx={{ "&>p": { color: "white", fontSize: "15px" } }}
      >

        <p className=" kip13 " style={{ color: kidarkgreen, marginBottom: '8px' }} > Please refrain from using the back button</p>
        <p className=" kip13 " style={{ color: kidarkgreen, marginBottom: '8px' }} > while the transaction is in progress.</p>
        <p className=" kip13 " style={{ color: kidarkgreen, marginBottom: '8px' }} > The page will automatically redirect shortly</p>
        <p className=" kip13 " style={{ color: kidarkgreen, marginBottom: '8px' }}  >  Please wait for 3 minutes for automatic redirection.</p>
      </Box>


      <div className="w-full mt-5 ">
        <Button
          onClick={() => handleClosemsg()}
          style={{ width: "100%", background: kidarkgreen }}
          variant="contained"
        >
          ok
        </Button>
      </div>
    </Box>
  );
};

export default Msg;
