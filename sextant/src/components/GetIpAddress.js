import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GetIpAddress.css";
function GetIpAddress({ type }) {
  const [IpAddress, setIpAddress] = useState("");
  useEffect(() => {
    if (type === "IPV4") {
      axios
        .get("https://api.ipify.org?format=json")
        .then((res) => {
          setIpAddress(res.data.ip);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get("https://api64.ipify.org?format=json")
        .then((res) => {
          setIpAddress(res.data.ip);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return <p className="GetIpAddress-text">{IpAddress}</p>;
}

export default GetIpAddress;
