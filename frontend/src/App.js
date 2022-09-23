import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import Footer from './Components/Footer';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from './Screens/ProfileScreen';

const App = ()=> {
  return (
    <>
    <Header />
    <main className='py-3'> 
      <Container>
       <Routes>
       <Route path='/login' element={<LoginScreen />} />
       <Route path='/register' element={<RegisterScreen />} />
       <Route path='/profile' element={<ProfileScreen />} />
       <Route path='/product/:id' element={<ProductScreen />} />
       <Route path='/cart/:id' element={<CartScreen />} />
       <Route path='/cart/' element={<CartScreen />} />
       <Route path='/' element={<HomeScreen />}/>
      </Routes>
      </Container>  
    </main>
    <Footer />
  </>

  );
}

export default App;
