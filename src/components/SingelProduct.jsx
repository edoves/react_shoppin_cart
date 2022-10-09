import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'

const SingelProduct = ({ product }) => {
  const { img, name, price, fastDelivery, ratings, inStock } = product
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
            <Button variant="danger">Remove from cart</Button>
            <Button disabled={inStock}>{!inStock ? 'Out of Stock' : 'Add to Cart'}</Button>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingelProduct
