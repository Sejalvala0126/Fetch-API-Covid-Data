
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Menu from './Component/Menu';
import CasesTimeSeries from './Component/CasesTimeSeries';
import StateWise from './Component/Statewise';
import Tasted from './Component/Tasted';


function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/casestimeseries' element={<CasesTimeSeries />} />
        <Route path='/statewise' element={<StateWise />} />
        <Route path='/tasted' element={<Tasted />} />
      </Routes>
    </>
  );
}


export default App;
