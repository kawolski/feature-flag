import { Route, Routes } from "react-router-dom";
import AllLinks from "./component/AllLinks";
import Demo1 from "./component/Demo1";
import Demo2 from "./component/Demo2";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<AllLinks />} />
        <Route exact path="/demo1" element={<Demo1 />} />
        <Route exact path="/demo2" element={<Demo2 />} />
      </Routes>
    </div>
  );
}

export default App;
