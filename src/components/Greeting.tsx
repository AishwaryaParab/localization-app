import React from 'react';
import i18n from '../i18n';
import handWave from '../images/hand-wave.jpg';

const Greeting = () => {
    return (
        <div className="greeting-header">
            <h1>{i18n.t('hello')}. {i18n.t('greeting')}</h1>
            <img src={handWave} />
        </div>
    );
}

export default Greeting;