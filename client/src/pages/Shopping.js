import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Row, Col} from 'react-bootstrap';
import SingleProduct from '../components/SingleProduct';

const Shopping = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () =>{
      const {data} = await axios.get('/products')
      setProducts(data)
    }
    fetchProducts();
  },[])
  return (
    <>
    <h1 className="p-3 text-center mt-5"><span><b><h1>Medicines</h1></b></span></h1>
    <div className="container">
      <Row>
        {
          Products.map(product => (
            <Col key={product._id} md={3}>
              <SingleProduct product = {product}/>
            </Col>
          ))
        }
      </Row>

    </div>
    </>
  )
}

export default Shopping