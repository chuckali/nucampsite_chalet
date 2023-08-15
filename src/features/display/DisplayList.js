import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';


const DisplayList = () => {
    const items = [selectFeaturedCampsite()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col className='m-0' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;
