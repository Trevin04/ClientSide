import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Buy from './pages/buy';
import Contact from './pages/contact';
import Search from './pages/search';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}
