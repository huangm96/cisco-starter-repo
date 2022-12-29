import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import "./PylonLatencyDisplay.css";
const client = new W3CWebSocket("ws://127.0.0.1:55455");
function PylonLatencyDisplay() {
  const [latency, setLatency] = useState(0);
  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      const current = new Date();
      setLatency(current - message.data);
    };
    client.onclose = function () {
      console.log("echo-protocol Client Closed");
    };
  }, []);
  return (
    <p className="pylonLatencyDisplay-text">{`${latency} milliseconds`}</p>
  );
}

export default PylonLatencyDisplay;
