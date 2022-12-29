import "./App.css";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
function App() {
  return (
    <div className="App">
      <Banner title="Sextant" />
      <div className="main-content">
        <Exhibit name="Exhibit" />
        <Exhibit name="Exhibit" />
      </div>
    </div>
  );
}

export default App;
