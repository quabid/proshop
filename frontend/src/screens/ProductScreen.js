import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({ match }) => {
  const product = products.find(p => p._id === match.params.id);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h5>{product.name}</h5>
            </ListGroupItem>

            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reveiws`}
              />
            </ListGroupItem>

            <ListGroupItem>
              <strong>Description:</strong> {`${product.description}`}
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>
                    <strong>Price</strong>
                  </Col>
                  <Col>
                    <strong>{`${product.price}`}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>
                    <strong>Status</strong>
                  </Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
