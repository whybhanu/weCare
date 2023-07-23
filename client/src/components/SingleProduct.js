import React from 'react'
import {Card} from 'react-bootstrap'; 
import Rating from './Rating';
import { NavLink } from 'react-router-dom';

const SingleProduct = ({product}) => {
  return (
    <>
    <Card className='my-3 p-3 rounded'>
        <NavLink to={`/products/${product._id}`}>
            <Card.Img src={product.image} variant="top" style={{width:"100%", height: "20rem"}}/>
            <hr />
        </NavLink>
        <Card.Body>
            <NavLink to={`/products/${product._id}`} style={{textDecoration: "none"}}>
                <Card.Title as='div' style={{color: "black"}}>
                    <strong>{product.name}</strong>
                </Card.Title>
            </NavLink>
            <Card.Text as='div'>
                <Rating value={product.rating} text={` from ${product.numReviews} reviews`}/>
            </Card.Text>
            <Card.Text as='div'>
                <div className="my-3">
                    <h5>
                        ₹{product.price}
                    </h5>
                </div>
            </Card.Text>
        </Card.Body>
    </Card>
    </>
  )
}

export default SingleProduct