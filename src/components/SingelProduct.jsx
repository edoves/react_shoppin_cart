import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

const SingelProduct = ({ product }) => {
  const { id, img, name, price, fastDelivery, ratings, inStock } = product

  const {
    state: { cart },
    dispatch,
  } = CartState()

  console.log(cart)

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>
            <span>$ {price}</span>
            {fastDelivery ? <div>Fast delivery</div> : <div>4 days delivery</div>}
            <Rating rating={ratings} />
            {cart.some((p) => p.id === id) ? (
              <Button variant="danger" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: product })}>
                Remove from cart
              </Button>
            ) : (
              <Button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })} disabled={!inStock}>
                {!inStock ? 'Out of Stock' : 'Add to Cart'}
              </Button>
            )}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingelProduct
