import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';


const CampsiteDetail = ( {campsite} ) => {
    const { image, name, description } = campsite;

    return (
        <Col md='2' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                
            </Card>
        </Col>
    );
};

export default CampsiteDetail;
