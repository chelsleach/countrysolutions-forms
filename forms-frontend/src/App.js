import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import InspectionReport from "./components/InspectionReport/InspectionReport";
import {Button} from "@mui/material";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Button className="btn btn-primary" href="/inspection" role="button">Inspection Report</Button>}/>
            <Route path={`/inspection`} element={<InspectionReport />}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
