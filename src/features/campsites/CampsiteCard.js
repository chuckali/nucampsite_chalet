import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


const CampsiteCard = ({ campsite }) => {
  const { id, image, name } = campsite;
  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg style={{ width: '100%', height: '300px', objectFit: 'cover' }} src={image} alt={name} />
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};

export default CampsiteCard;