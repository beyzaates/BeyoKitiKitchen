import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Anasayfa from './components/pages/Anasayfa'
import Hakkimizda from './components/pages/Hakkimizda';
import Iletisim from './components/pages/Iletisim';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/anasayfa/NAVBAR/Navbar';
import PageContainer from './containers/PageContainer';
import Detail from './components/pages/Detail'; // Detay sayfasını ekleyin








function App() {
  return (
    <div>
    <PageContainer>
      <Router>

     <Navbar/>
   
      <Routes>
        <Route path="/" element={<Anasayfa/>} />
        <Route path="/contact" element= {<Iletisim/>}/>
        <Route path="/hakkimizda" element={<Hakkimizda/>} />
        <Route path="/detail/:id" element={<Detail />} />
    
         
       
       
        
        
       
       

        
        

      
       

        
    
       
      </Routes>
    </Router>
    </PageContainer>
    </div>
   
  );
}

export default App;
