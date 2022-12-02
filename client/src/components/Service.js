import './Service.css';

export default function Service(props) {
    return (
        <div className='service flex center' style={{ backgroundImage: `url(${props.img})` }}>
            <div className='service-content flex column'>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                <a href='#contact'>Cotizar</a>
            </div>
        </div>
    );
};