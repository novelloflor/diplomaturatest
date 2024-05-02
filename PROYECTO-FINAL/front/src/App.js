import '../src/assets/css/main.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import NosotrosPage from './pages/NosotrosPage';
import RecetasPage from './pages/RecetasPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='nosotros' element={<NosotrosPage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='contacto' element={<ContactoPage />} />
          <Route path='receta' element={<RecetasPage />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
