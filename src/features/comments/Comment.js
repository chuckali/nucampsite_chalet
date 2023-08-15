import { formatDate } from '../../utils/formatDate';
import { Col, Row, Card, CardImg} from 'reactstrap'; 

const Comment = ({ comment }) => {
    const { text: commentText, rating, author, date, image } = comment;

    return (
        <Row className="mb-4">
    <Col xs="3">
    <Card>
                <CardImg top src={image} alt={image} />
                
            </Card>
                </Col>
        <Col xs="9">
          <p>
            {commentText} - {rating}% Completion, {formatDate(date)}
            <br />
            {author}
          </p>
        </Col>
      </Row>
    );
};

export default Comment;