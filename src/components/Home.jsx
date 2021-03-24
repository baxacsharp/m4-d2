import React from 'react'
import { Carousel, Col, Row, Container } from 'react-bootstrap'
import items from '../data/fantasy.json'
import BooksSelected from './BooksSelected'
class Home extends React.Component {
    state = {
        selectedBooks: null
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-center mt-3">
                    <Col className="col-xs-12 col-md-8 md-offset-2">
                        <Carousel fade>
                            {
                                items.map(item => (
                                    <Carousel.Item key={item.asin}>


                                        <img
                                            className="d-block w-100 img-fluid"
                                            src={item.img}
                                            alt={item.title}
                                            style={{ maxHeight: "300px" }}
                                            onClick={() => this.setState({
                                                selectedBooks: item
                                            })}
                                        />
                                        <Carousel.Caption style={{ color: "red" }}>

                                            <h3>{item.title}</h3>
                                            <p>{item.price}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>


                                ))
                            }
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <BooksSelected selectedBooks={this.state.selectedBooks} />
                </Row>
            </Container>
        )
    }
}
export default Home