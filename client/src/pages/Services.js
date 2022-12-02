import './Services.css';
import Service from '../components/Service';
import services from '../services-data';
import Hrh2 from '../components/Hrh2';

function createService(service) {
    return <Service img={service.img} title={service.title} text={service.text} />
}

export default function Services() {

    return (
        <section id='services' className='container'>
            <h2 className='flex center'><Hrh2 />APORTAMOS SOLUCIONES CREATIVAS Y EFICIENTES A TUS PROYECTOS.</h2>
            <div className='services flex'>
                {services.map(createService)}
            </div>
        </section>
    );
}; 