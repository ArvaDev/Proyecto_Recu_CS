import './joinClass.css';
import { useState } from 'react';
import Loading from '../../loading/loading';
import Warning from '../../warning/warning';
import axios from 'axios';

export default function JoinClass({ close, token }) {
    const [val, setVal] = useState('');
    const [voidC, setVoid] = useState(false);
    const [load, isLoad] = useState(false);
    const onClick = () => {
        if (val === '') {
            setVoid(true);
        } else {
            isLoad(true);
            const ob = {
                classes: val
            }
            axios.get(`http://localhost:3000/classes/${val}`)
                .then(() => {
                    axios.put(`http://localhost:3000/user/${token?.tuition}`, ob)
                        .then((data) => {
                            axios.put(`http://localhost:3000/classes/${val}`, { user: token?.tuition })
                            const d = data.data.token
                            localStorage.setItem('user', d);
                            isLoad(false);
                            close();
                            window.location.reload();
                        })
                        .catch(() => {
                            isLoad(false);
                            close();
                            window.location.reload();
                        })
                }).catch(() => {
                    alert("No existe esta clase")
                    isLoad(false);
                })
        }
    };

    const onC = (e) => {
        setVal(e.target.value);
    }
    return (
        <div className='JoinClassClass'>
            {load && <Loading />}
            <div className='inputModal'>
                <p>ingrese la id de la clase</p>
                <div className='int'>
                    <input onChange={onC} placeholder='Id de la clase' />
                </div>
                {voidC && <Warning message="Campo vacio" />}
                <div className='button'>
                    <button className='env' onClick={onClick}>Unir</button>
                    <button className='can' onClick={close}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}