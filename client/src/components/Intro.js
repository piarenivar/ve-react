import { useState } from 'react';
import './Intro.css';
import logo from '../images/logo256.png';

export default function Intro() {
    const [isTranslate, setTranslate] = useState(false);
    if (!isTranslate) {
        setTimeout(
            () => {
                setTranslate(!isTranslate)
            },
            3000
        )
    };

    return (
        <div className={isTranslate ? 'intro flex center intro-active' : 'intro flex center'}>
            <img src={logo} alt='Valencia Estructuristas logo' className='intro-logo'/>
        </div>
    );
}; 