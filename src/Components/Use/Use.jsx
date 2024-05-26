import { Link } from 'react-router-dom';
import './Use.css'
const Use = ({use}) => {
    const {phone,name,email,id} =use;
   
    return (
        <div className="use">
            
            <h2>name:{name}</h2>
            <p>Email:{email}</p>
            <p>Phone Number:{phone}</p>
            <Link to={`/use${id}`}>Show Info</Link>
            
        </div>
    );
};

export default Use;