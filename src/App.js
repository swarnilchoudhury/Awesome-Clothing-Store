
import Headers from './components/headers';
import HomePages from './pages/HomePage.pages';
import './App.css'
import { Routes,Route } from "react-router-dom";
import Shop_component from './components/shop.component';
import BiscuitsPage from './pages/biscuits.page';
import Signin from './pages/Signin.pages';

function App() {
 return(
     <>
<Headers/>
<div className='bg'>
<Routes>
<Route path='/' element={<HomePages/>}/>
<Route path='/shop' element={<Shop_component/>}/>
<Route path='/biscuits' element={<BiscuitsPage/>}/>
</Routes>
</div>
<Routes>
<Route path='/Sign' element={<Signin/>}/>
</Routes>
</>
 );
}

export default App;
