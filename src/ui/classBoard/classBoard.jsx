import './classBoard.css';
import { useEffect, useState } from 'react';
import { MdOutlineClass } from "react-icons/md";
import ClassTab from '../classTab/classTab';
import axios from 'axios';

export default function ClassBoard({ token }) {
    const [classID, setClassID] = useState([]);
    const clasesIDs = token?.classes;

    useEffect(() => {
        if (clasesIDs) {
            setClassID([]);
            clasesIDs.forEach(async (item) => {
                const response = await axios.get(`http://localhost:3000/classes/${item}`);
                setClassID(prevState => [...prevState, response.data]);
            });
        }
    }, [clasesIDs]);

    return (
        <div className='ClassBoardClass'>
            {classID.map((item) => (
                <ClassTab idClass={item?.uniqueID} text={item.name}></ClassTab>
            ))}
            {classID.length === 0 && <div className='Add'>No hay nada por aquí <MdOutlineClass className='disc'/></div>}
        </div>
    );
}
