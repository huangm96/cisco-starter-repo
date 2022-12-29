import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import GetIpAddress from "./components/GetIpAddress";
import PylonLatencyDisplay from "./components/PylonLatencyDisplay";
function App() {
  return (
    <div className="App">
      <Banner title="Sextant" />
      <div className="main-content">
        <Exhibit name="IPV4">
          <GetIpAddress type="IPV4" />
        </Exhibit>
        <Exhibit name="IPV6">
          <GetIpAddress type="IPV6" />
        </Exhibit>
        <Exhibit name="Latency">
          <PylonLatencyDisplay />
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
