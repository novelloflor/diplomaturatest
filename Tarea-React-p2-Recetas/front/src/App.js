import logo from './logo.svg';
import './App.css';
import './styles/components/pages/Normalize.css'
import './styles/components/pages/HomePage.css';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecetasPage from './pages/RecetasPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/recetas' element={<RecetasPage/>} />
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
