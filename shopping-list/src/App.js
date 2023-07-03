import AddItem from './components/AddItem';
import Footer from './components/Footer';
import Heading from './components/Heading';
import ItemList from './components/ItemList';
import Total from './components/Total';

import arrow from './img/arrow.svg';

import './css/app.css';
import { useEffect, useState } from 'react';

function App() {
    const [height, setHeight] = useState(450);
    const [rotation, setRotation] = useState('');

    const handleShowMenu = () => {
        if (height === 0) {
            setHeight(450);
            setRotation('rotated');
        } else {
            setHeight(0);
            setRotation('');
        }
    };

    useEffect(() => {
        setRotation('rotated');
    }, []);

    return (
        <div className='app'>
            <div className='top'>
                <img
                    src={arrow}
                    alt='arrow up/down'
                    className={`arrow ${rotation}`}
                    onClick={handleShowMenu}
                />
                <Heading />
                <AddItem height={height} />
            </div>
            <ItemList />
            <div className='bottom'>
                <Total />
                <Footer />
            </div>
        </div>
    );
}

export default App;
