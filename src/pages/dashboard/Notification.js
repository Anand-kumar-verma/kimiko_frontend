import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import { zubgbackgrad } from "../../Shared/color";

const Notification = ({ handleClosepolicy }) => {
  const [bannerData, setBannerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchBannerData = async () => {
      try {
        const response = await fetch("https://admin.kimiko.biz/api/panel_banner");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBannerData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBannerData();
  }, []);
  console.log(bannerData, "jhf")

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box sx={{ "&>p": { textAlign: "center", color: "red" } }}>
      {/* Display banner data if available */}
    
        <Box
          className="mt-2"
          sx={{ "&>p": { color: "white", fontSize: "12px" } }}
        >
          <img src={bannerData?.image} alt=""/>
        </Box>
    

      <div className="w-full mt-5">
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
