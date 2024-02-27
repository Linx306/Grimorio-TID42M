import React from 'react';
import Header from './Comp/Header.jsx';
import Footer from './Comp/Footer.jsx';
import Pagina from './Comp/Pagina.jsx';
import Dev from './Comp/Dev.jsx';
import { Route,Routes } from 'react-router';
function App() {
  return (
    <div>
            <Header />
      <Routes>
        <Route path ="/" element={<Pagina />}></Route>
        <Route path ="/Dev" element={<Dev />}></Route>
      </Routes>
      <Footer />
      </div>    
  );
}
export default App;
