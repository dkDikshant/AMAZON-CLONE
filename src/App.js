
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
import LaptopProducts from './components/products/LaptopProducts';
import LaptopProductsAcer from './components/products/LaptopProductsAcer';
import LaptopProductsHp from './components/products/LaptopProductsHp';
import LaptopProductsHpintel from './components/products/LaptopProductsHpintel'
import LaptopProductsHpintellow from './components/products/LaptopProductsHpintellow';
import Headphones from './components/products/Headphones';
import Smartwatch from './components/products/Smartwatch';
import Keyboard from './components/products/Keyboard';
import Pendrive from './components/products/Pendrive';


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
        <Route path='/lapotp-products' element={<LaptopProducts/>}/>
        <Route path='/lapotp-products-acer' element={<LaptopProductsAcer/>}/>
        <Route path='/lapotp-products-hp15s-AMD' element={<LaptopProductsHp/>}/>
        <Route path='/lapotp-products-hp15s-intel' element={<LaptopProductsHpintel/>}/>
        <Route path='/lapotp-products-hp15s-intel-Athlon Silver' element={<LaptopProductsHpintellow/>}/>
        <Route path='/electronic-headphones' element={<Headphones/>}/>
        <Route path='/electronic-smartwatch' element={<Smartwatch/>}/>
        <Route path='/electronic-keyboard' element={<Keyboard/>}/>
        <Route path='/electronic-pendrive' element={<Pendrive/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;


