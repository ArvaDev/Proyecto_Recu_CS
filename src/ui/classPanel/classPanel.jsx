import './classPanel.css';
import Option from '../option/option';
import CreateClass from '../Modals/createClass/createClass';
import DeleteClass from '../Modals/deleteClass/deleteClass';
import JoinClass from '../Modals/joinClass/joinClass';
import ClassIdModal from '../Modals/classIDModal/ClassIdModal';
import WebHooksModal from '../Modals/webHooksModal/webHooksModal';
import { useState } from 'react';
import { Token } from '../../hooks/token';
import { IoHomeSharp } from "react-icons/io5";
import { IoExitSharp } from "react-icons/io5";
import { IoCreateSharp } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';
import { IoTrash } from 'react-icons/io5';
import { useParams } from 'react-router-dom'
import { FaShare } from "react-icons/fa";
import { MdOutlineWebhook } from "react-icons/md";
export default function ClassPanel() {
    const { uniqueID } = useParams();
    const [create, setCreate] = useState(false);
    const [deleteC, setDeleteC] = useState(false);
    const [join, setJoing] = useState(false);
    const [share, setShare] = useState(false);
    const [webH, setWebH] = useState(false);
    const token = Token();
    const cerrarSesion = () => {
        localStorage.removeItem('user');
    };
    const deleteClass = () => {
        setDeleteC(true);
    };
    const createClass = () => {
        setCreate(true);
    };
    const joinCClass = () => {
        setJoing(true);
    }
    const shareClass = () => {
        setShare(true);
    }
    const WebHClass = () => {
        setWebH(true)
    }
    const closeModal = () => {
        setCreate(false);
        setDeleteC(false);
        setJoing(false);
        setShare(false);
        setWebH(false);
    };

    return (
        <div className='ClassPanelClass'>
            {(deleteC) && <DeleteClass close={closeModal} classID={uniqueID} />}
            {(create) && <CreateClass token={token} close={closeModal} />}
            {(join) && <JoinClass close={closeModal} />}
            {(share) && <ClassIdModal close={closeModal} classID={uniqueID} />}
            {(webH) && <WebHooksModal close={closeModal} classID={uniqueID}/>}
            <p className='titlePanel'>Panel</p>
            <Option canNavigate to='/home' text="Volver" icon={<IoHomeSharp />} />
            <Option text="WebHooks" onClick={WebHClass} icon={<MdOutlineWebhook />} />
            {token?.rol && <Option onClick={createClass} icon={<IoCreateSharp />} text="Crear clase" />}
            {token?.rol && <Option onClick={deleteClass} icon={<IoTrash />} text="Borrar esta clase" />}
            {!token?.rol && <Option onClick={joinCClass} icon={<IoMdAdd />} text="Unirse a clase" />}
            <Option onClick={shareClass} text="Compartir" icon={<FaShare />} />
            <Option onClick={cerrarSesion} canNavigate to='/home' text="Cerrar sesion" icon={<IoExitSharp />} />
        </div>
    );
}
