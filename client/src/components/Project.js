import { Link } from 'react-router-dom';
import './Project.css';

export default function Project(props) {
    return (
        <Link to='/proyectos' className='project flex column'>
            <img src={props.url} alt={props.alt} />
            <h3>{props.title}</h3>
        </Link>
    );
};