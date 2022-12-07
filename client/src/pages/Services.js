import './Services.css';
import Service from '../components/Service';
import services from '../services-data';
import Hrh2 from '../components/Hrh2';
import Form from '../components/Form';

function createService(service) {
    return <Service key={service.id} img={service.img} title={service.title} text={service.text} />
}

export default function Services() {

    return (
        <section id='services' className='container'>
            <h2 className='flex center'><Hrh2 />APORTAMOS SOLUCIONES CREATIVAS Y EFICIENTES A TUS PROYECTOS.</h2>
            <div className='services flex'>
                {services.map(createService)}
            </div>
            <Form />
        </section>
    );
}; 