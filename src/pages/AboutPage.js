import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/SubHeader'


const AboutPage = () => {


    return (
        <Container >
            <SubHeader current="About Us" />
            <Row className='row-content'>
                <Col sm='6'>
                    <h3>Our Mission</h3>
                    <p>
                        Fix the cottage so it can be rented or sold to its potential.
                    </p></Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-secondary text-white'>
                            <h3>Facts at a Glance</h3>
                        </CardHeader>
                        <CardBody className='bg-success'>
                            <dl className='row '>
                                <dt className='col-6'>Built</dt>
                                <dd className='col-6'>February 3, 2010</dd>
                                <dt className='col-6'>Estimated value</dt>
                                <dd className='col-6'>650 000$ CAD</dd>
                                <dt className='col-6'>Budget for repairs</dt>
                                <dd className='col-6'>60 000$</dd>
                                <dt className='col-6'>Timeframe for quotes</dt>
                                <dd className='col-6'>Due November 2023</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-warning mt-3'>
                        <CardBody className='blockquote'>
                            <p>I will not follow where the path may lead, but I
                                will go where there is no path, and I will leave
                                a trail.
                            </p>
                            <footer className='blockquote-footer'>
                                Muriel Strode,{' '}
                                <cite title='Source Title'>
                                    "Wind-Wafted Wild Flowers" - The Open Court,
                                    1903
                                </cite>
                            </footer>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
          
        </Container>
    );
};

export default AboutPage