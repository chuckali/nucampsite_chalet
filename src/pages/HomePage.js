import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';

const HomePage = () => {
   
  
    return (
      <Container fluid style={{ padding: 0 }}>
        <DisplayList />
      </Container>
    );
  };

export default HomePage;