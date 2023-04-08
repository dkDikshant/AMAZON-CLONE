
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
import MiniTV from './components/miniTv/MiniTV';
import Prime from './components/prime/Prime';
import Electronic from './components/electronic/Electronic';
import Mobile from './components/mobile/Mobile';
import BestSeller from './components/bestSeller/BestSeller';


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
        <Route path='/miniTv' element={<MiniTV/>}/>
        <Route path='/prime' element={<Prime/>}/>
        <Route path='/electronic' element={<Electronic/>}/>
        <Route path='/mobiles' element={<Mobile/>}/>
        <Route path='/best-seller' element={<BestSeller/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;


