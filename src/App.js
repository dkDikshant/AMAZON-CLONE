
import './App.css';
import AccountSignIn from './components/AccountSignIn';
import Header from './components/Header/Header'
import Sign from './components/Sign';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sell from './components/sell/Sell';
import Service from './components/customerserrvice/Service';
import MiniTV from './components/miniTv/MiniTV';
import Prime from './components/prime/Prime';
import Electronic from './components/electronic/Electronic';
import Mobile from './components/mobile/Mobile';
import BestSeller from './components/bestSeller/BestSeller';
import Oneplus from './components/mobile/Oneplus';
import Accessories from './components/mobile/Accessories';
import Todaydeal from './components/todaydeals/Todaydeal';
import Carouselproducts from './components/carousel/Carouselproducts';
import Laptop from './components/laptop/Laptop';
import Gaming from './components/laptop/Gaming';


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
        <Route path='/oneplus' element={<Oneplus/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path='/today-deals' element={<Todaydeal/>}/>
        <Route path='/carousel/:id' element={<Carouselproducts/>}/>
        <Route path='/laptop' element={<Laptop/>}/>
        <Route path='/Gaming-laptop' element={<Gaming/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;


