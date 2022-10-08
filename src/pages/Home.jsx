import React from 'react'
import Filters from '../components/Filters'
import SingelProduct from '../components/SingelProduct'
import { CartState } from '../context/Context'

const Home = () => {
  const {
    state: { products },
  } = CartState()

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => (
          <SingelProduct product={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
