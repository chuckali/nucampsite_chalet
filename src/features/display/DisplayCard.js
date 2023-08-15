import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({ item }) => {
    const { image, name, description } = item;

    const cardImgStyle = {
        width: '100%', // Set the width to 100% of the parent container
        objectFit: 'cover', // Maintain aspect ratio and cover entire space
      };

    return (
        <Card>
            <CardImg src={image} alt={name} style={cardImgStyle} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;