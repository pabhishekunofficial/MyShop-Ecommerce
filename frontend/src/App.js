import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import Footer from './Components/Footer';
import CartScreen from './Screens/CartScreen';

const App = ()=> {
  return (
    <>
    <Header />
    <main className='py-3'> 
      <Container>
       <Routes>
       <Route path='/' element={<HomeScreen />}/>
       <Route path='/product/:id' element={<ProductScreen />} />
       <Route path='/cart/:id' element={<CartScreen />} />
       <Route path='/cart/' element={<CartScreen />} />
      </Routes>
      </Container>  
    </main>
    <Footer />
  </>

  );
}

export default App;
