
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import UseMeal from '../../Hooks/UseMeal';
import ServiceBreakfast from '../ServiceBreakfast/ServiceBreakfast';

const Breakfast = () => {
      const [meal]=UseMeal();
      
     
    
    return (
        <div style={{marginTop:"80px"}}>
        
        </div>
    );
};

export default Breakfast;