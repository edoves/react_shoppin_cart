import faker from 'faker'
import { createContext, useContext, useReducer } from 'react'
import { cartReducer } from './Reducers'

const Cart = createContext()
faker.seed(99)

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    img: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }))

  const [state, dispatch] = useReducer(cartReducer, { products, cart: [] })

  console.log(state)
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
}

export default Context

export const CartState = () => useContext(Cart)
