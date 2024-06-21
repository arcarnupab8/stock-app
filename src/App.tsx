import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Income from './components/Income';
import Borrow from './components/Borrow';
import Bill from './components/Bill';
import Stock from './components/Stock';
import Times from './components/Times';
import AddStock from './components/Addstock';
import EditStock from './components/EditStock';

function App() {
  return (
    <div className='container'>
      <nav><Navbar/></nav>
      <div className='content'>
        <Routes>
          <Route path='/manageIncome' element={<Income/>}/>
          <Route path='/manageBorrow' element={<Borrow/>}/>
          <Route path='/manageBills' element={<Bill/>}/>
          <Route path='/manageStock' element={<Stock/>}/>
          <Route path='/manageStock/Add' element={<AddStock/>}/>
          <Route path='/manageStock/Edit/:productId/:name/:price/:quantity/:unit/:myown/:usesable' element={<EditStock/>}/>
          <Route path='/manageTimes' element={<Times/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App
