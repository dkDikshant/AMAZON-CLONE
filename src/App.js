
import './App.css';
import AccountSignIn from './components/AccountSignIn';
import Header from './components/Header/Header'
import Header2 from './components/Header/Header2';
import ProductsData from './components/ProductsData';
import Sign from './components/Sign';
import Slides from './components/Slides';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sell from './components/sell/Sell';
import Service from './components/customerserrvice/Service';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Header}/>
        <Route path='/signin' element={<Sign/>}/>
        <Route path='/addaccount' element={<AccountSignIn/>}/>
        <Route path='/sell' element={<Sell/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;


