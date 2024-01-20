import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './pages/Contacts';
import Family from './pages/Family';
import Interests from './pages/Interests';
import Portfolio  from './pages/Portfolio';
import Articles from './pages/Articles';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className='app'>
      
<BrowserRouter>
<Routes>
<Route index element={<Home/>} />
  <Route path='/home' element={<Home/>} />
  <Route path='/contacts' element={<Contacts/>} />  
  <Route path='/interests' element={<Interests/>} />
  <Route path='/portfolio' element={<Portfolio/>} />
  <Route path='/family' element={<Family/>} />
  <Route path='/articles' element={<Articles/>} />




</Routes>
</BrowserRouter>

    </div>


  );
}

export default App;
