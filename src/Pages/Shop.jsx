import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offer from '../Component/Offer/Offer'
import Exclusive from '../Component/Exclusive/Exclusive'
import Subscribe from '../Component/Suscribe/Suscribe' 
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
const Shop = () => {
  return (
    <div className='Shop'>
       
       <Hero/>
       <Popular/>
       <Offer/>
       <Exclusive/>
       <Subscribe/>
       <Footer/>
    </div>
  )
}

export default Shop
