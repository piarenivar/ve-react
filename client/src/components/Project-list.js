import { Link } from 'react-router-dom';
import './Project-list.css';
import Project from './Project';
import projects from '../project-data';

function createProject(project) {
    return <Project key={project.id} url={project.url} alt={project.alt} title={project.title} />
}

export default function Projectlist() {
    console.log(projects);

    return (
        <div className='project-list flex'>
            {projects.map(createProject)}
            <Link to='/proyectos' className='see-all flex center'>Ver Todos<i className='fa-solid fa-chevron-right fa-sm'></i></Link>
        </div>
    );
}; 