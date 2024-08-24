import axios from 'axios';
import '../css/home.css'
import Product from './Product'
import { useEffect, useState } from 'react';


function Home() {
  const [products , setProducts] = useState([])
  const fetchData = async() => {
    try{
      const response = await axios.get("https://dummyjson.com/products")
      setProducts(response.data.products)
      console.log(response.data.products)
    }
    catch(error){
      console.log(error)
      alert("failed")
    }
  }

  useEffect(()=>{
    fetchData()
  } , [])

  return (
    <>
    <div className='home'>
        <div className='home-container'>
          <img className='home-image'
           src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          />

        <div className='home-row'>
          {products.map((product) => (
            <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={Math.floor(product.rating)}
            image={product.thumbnail}
            />
          ))}
        </div>

      </div>
      
    </div>
    </>
  );
}


export default Home
