import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Placeorder from './pages/Placeorder'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Footer from './components/Footer'
import LatestCollection from './components/LatestCollections'
import SearchBar from './components/SearchBar'
import RelatedProducts from './components/RelatedProducts'
import { ToastContainer, toast } from 'react-toastify' ;
import 'react-toastify/dist/ReactToastify.css';


<components />


const App = () => {
  return ( 
    <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]'>
         <ToastContainer />
         <Navbar />
          <SearchBar />
           
        


       <Routes>
        
          <Route path='/'  element={<Home/>} />
          <Route path='/collection' element={<Collection/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product/:productId' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/place-order' element={<Placeorder/>} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/LatestCollection' element={<LatestCollection/>}/>
          <Route path='/RelatedProducts' element={<RelatedProducts/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App