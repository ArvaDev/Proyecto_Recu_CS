import './homePanel.css';
import Option from '../option/option';
import CreateClass from '../Modals/createClass/createClass';
import JoinClass from '../Modals/joinClass/joinClass';
import { useState } from 'react';
import { IoExitSharp } from "react-icons/io5";
import { IoCreateSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

export default function HomePanel({ token }) {
    const [create, setCreate] = useState(false);
    const [join, setJoing] = useState(false);

    const cerrarSesion = () => {
        localStorage.removeItem('user');
    };

    const createClass = () => {
        setCreate(true);
    };
    const joinClass = () => {
        setJoing(true);
    };

    const closeModal = () => {
        setCreate(false);
        setJoing(false);
    };

    return (
        <div className='HomePanelClass'>
            {create && <CreateClass token={token} close={closeModal} />}
            {join && <JoinClass token={token} close={closeModal}/>}
            <p className='titlePanel'>Home</p>
            {token?.rol && <Option onClick={createClass} icon={<IoCreateSharp />} text="Crear clase" />}
            {!token?.rol && <Option onClick={joinClass} icon={<IoMdAdd />} text="Unirse a clase" />}
            <Option icon={<IoExitSharp />} text="Cerrar sesión" canNavigate={true} onClick={cerrarSesion} />
        </div>
    );
}
