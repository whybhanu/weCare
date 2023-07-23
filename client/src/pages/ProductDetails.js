import React from 'react';
import { Row, Col, Image, ListGroup, ListGroupItem, Button, Card } from 'react-bootstrap';
import products from '../Products';
import Rating from '../components/Rating';
import { useParams } from 'react-router-dom';
import logo from '../images/logoWeCare.png' 
import pharmacyShopping from '../images/pharmacyShopping.jpg'

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p._id === id)

  // var formatter = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "INR",

  //   // These options are needed to round to whole numbers if that's what you want.
  //   minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //   //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  // });
// RAZOR PAY

const loadScript = (src) => {
  return new Promise((resovle) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resovle(true);
    };

    script.onerror = () => {
      resovle(false);
    };

    document.body.appendChild(script);
  });
};

const displayRazorpay = async (amount) => {
  const res = await loadScript(
    "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
    alert("You are offline... Failed to load Razorpay SDK");
    return;
  }

  const options = {
    key: "rzp_test_rHFtCgo0coR4rS",
    currency: "INR",
    amount: amount * 100,
    name: "weCareSmart",
    description: "Thanks for purchasing",
    image:
      `${logo}`,

    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert("Payment Successfully");
    },
    prefill: {
      name: "weCareSmart",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};



  return (

    <>
    <div className='shopBg'>
        <img className='pharmacyShopping no-repeat' src={pharmacyShopping} alt="" style={{height: "25vh", width: "100%", background: "repeat no-repeat"}}/>
      </div>
    <div className='mt-5'>
      {/* <h1 className="mx-5">{product.name}</h1> */}

      <Row>
        <Col md={6}>
          <Card style={{borderRadius: "2rem"}} className='m-3 '>
            <Image style={{height: "30rem", margin:"2rem"}} src={product.image} alt={product.name} fluid  />
          </Card>
        </Col>
        <Col md={3}>
          <Card className='m-3'>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating value={product.rating } text = {` ${product.numReviews} Reviews`}></Rating>
              </ListGroupItem>
              <ListGroupItem>
              <b>Price: </b> {`₹ ${product.price}`}
              </ListGroupItem>
              <ListGroupItem>
                <b>Description: </b> {product.description}
              </ListGroupItem>
            </ListGroup>

          </Card>
        </Col>
        <Col md={3} >
          <Card className='m-3'>
            <ListGroupItem style={{margin: "1rem 2rem 0 2rem"}}>
              <Row style={{border: "2px solid grey"}}>
                <Col style={{fontSize: "2rem"}}>Status: </Col>
                <Col style={{fontSize: "2rem", color: "green"}}>{product.inStock> 0? "In Stock": "Out of Stock"} </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem style={{margin: "1rem 2rem 1rem 2rem"}}>
              <hr />
              <Row>
                <Button onClick={() => displayRazorpay(product.price)} className="mt-2 btn btn-dark btn-lg">Buy Now</Button>
              </Row>
            </ListGroupItem>
          </Card>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default ProductDetails