import Project from '../components/Project';
import projects from '../project-data-all';
import Hrh2 from '../components/Hrh2';
import './Projects.css';

function createProject(project) {
    return <Project key={project.id} url={project.url} alt={project.alt} title={project.title} />
}

export default function Projects() {

    return (
        <section id='all-projects' className='container flex column'>
        <h2 className='flex center'><Hrh2 />Proyectos</h2>
            <div className='flex wrap'>
                {projects.map(createProject)}
            </div>
        </section>
    );
}; 