
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Chart from './components/MainVisual/Chart';
import Dashboard from './components/dashboard/Dashboard';
import Pie1 from './components/MainVisual/Pie';
import Bubble from './components/MainVisual/Bubble';
import Table from './components/table/Table';
import TablePagination from './components/table/Table';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/barChart' element={<Chart/>}/>
        <Route path='/pieChart' element={<Pie1/>}/>
        <Route path='/bubbleChart' element={<Bubble/>}/>
        <Route path='/table' element={<TablePagination/>}/>

        </Routes></BrowserRouter>      
    </div>
  );
}

export default App;
