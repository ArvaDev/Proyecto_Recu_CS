import { useState } from 'react';
import './createClass.css';
import axios from 'axios';
import Loading from '../../loading/loading';
import Warning from '../../warning/warning';

export default function CreateClass({ close, token }) {
    const [val, setVal] = useState('');
    const [voidC, setVoid] = useState(false);
    const [load, isLoad] = useState(false);
    const onClick = () => {
        if (val === ''){
            setVoid(true);
        }else{
            isLoad(true);
            setVoid(false);
            const ob = {
                name: val, 
                creator: token?.name,
                users: token?.tuition
            }
            axios.post('http://localhost:3000/classes', ob)
                .then((data) => {
                    const o = {
                        classes: data.data.classID
                    }
                    axios.put(`http://localhost:3000/user/${token?.tuition}`, o)
                        .then((data) => { 
                            const d = data.data.token
                            localStorage.setItem('user', d);
                            isLoad(false); 
                            close();
                            window.location.reload();
                        }).catch(() => { isLoad(false)})
                }).catch(() => { isLoad(false)})
        }
    };
    const onC = (e) => {
        setVal(e.target.value);
    }

    return (
        <div className='createClassClass'>
            {load && <Loading/>}
            <div className='inputModal'>
                <div className='int'>
                    <input onChange={onC} placeholder='Nombre de la clase' />
                </div>
                {voidC && <Warning message="Campo vacio"/>}
                <div className='button'>
                    <button className='env' onClick={onClick}>Crear</button>
                    <button className='can' onClick={close}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}
