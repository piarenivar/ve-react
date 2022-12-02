import './Contact-info.css';
import Hrh2 from './Hrh2';
import Service from './Service';
import services from '../services-data';

function createService(service) {
    return <Service key={service.id} img={service.img} title={service.title} text={service.text} />
}

export default function Contactinfo() {
    return (
        <section id='contact' className='flex'>
            <div className='contact-left flex column'>
                <h2 className='flex center'><Hrh2 />Contacto</h2>
                <a href='mailto:proyectos@valenciaestructuristas.com' target='_blank' rel='noreferrer' className='email flex center'>proyectos@valenciaestructuristas.com</a>
                <div className='flex'>
                    <a href='https://www.facebook.com/profile.php?id=100086400811442' target='_blank' rel='noreferrer' className='social flex center'><i className="fa-xl fa-brands fa-facebook-f"></i></a>
                    <a href='https://www.instagram.com/valenciaestructuristas/' target='_blank' rel='noreferrer' className='social flex center'><i className="fa-xl fa-brands fa-instagram"></i></a>
                    <a href='https://www.tiktok.com/@valenciaestructuristas?_t=8VxVE1UTJvJ&_r=1' target='_blank' rel='noreferrer' className='social flex center'><i className="fa-xl fa-brands fa-tiktok"></i></a>
                </div>
            </div>
            <div className='services flex'>
                {services.map(createService)}
            </div>
        </section>
    );
};