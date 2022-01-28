
import Headers from './components/headers';
import HomePages from './pages/HomePage.pages';
import './App.css'
import { Routes,Route } from "react-router-dom";

function App() {
 return(
     <>
<Headers/>
<div className='bg'>
<Routes>
<Route path='/' element={<HomePages/>}/>
</Routes>
</div>

</>
 );
}

export default App;
