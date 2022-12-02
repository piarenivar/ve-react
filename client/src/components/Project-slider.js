import './Project-slider.css';
import Hrh2 from './Hrh2';
import Projectlist from './Project-list';

export default function Projectslider() {

    return (
        <section id='projects' className='flex column'>
            <h2 className='flex center'><Hrh2 />Proyectos</h2>
            <Projectlist />
        </section>
    );
}; 