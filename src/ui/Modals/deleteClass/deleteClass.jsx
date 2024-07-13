import './deleteClass.css';
import { useState } from 'react';
import Warning from '../../warning/warning';
import Loading from '../../loading/loading';
import axios from 'axios';
export default function DeleteClass({ close, classID }) {
    const [val, setVal] = useState('');
    const [voidC, setVoid] = useState(false);
    const [load, isLoad] = useState(false);
    const onClick = () => {
        if (val === '') {
            setVoid(true);
        } else {
            if (val === classID) {
                isLoad(true);
                axios.delete(`http://localhost:3000/classes/${classID}`)
                    .then(() => {
                        isLoad(false)
                        close();
                        window.location.href = '/home';
                    }).catch(() => {
                        isLoad(false)
                        close();
                        window.location.href = '/home';
                    })
            }
        }
    };

    const onC = (e) => {
        setVal(e.target.value);
    }

    return (
        <div className='DeleteClassClass'>
            {load && <Loading />}
            <div className='inputModal'>
                <p>ingrese la id de la clase: <strong>{classID}</strong></p>
                <div className='int'>
                    <input onChange={onC} placeholder='Id de la clase' />
                </div>
                {voidC && <Warning message="Campo vacio" />}
                <div className='button'>
                    <button className='env' onClick={onClick}>Eliminar</button>
                    <button className='can' onClick={close}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}