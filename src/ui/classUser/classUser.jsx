import './classUser.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IoPeople } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export default function ClassUser({ classID }) {
    const [show, setShow] = useState(true);
    const [users, setUsers] = useState([]);
    const [usersFA, setUsersFA] = useState([]);

    const showClick = () => {
        setShow(!show);
    };

    const value = show ? 0 : 30;
    const transition = {
        width: `${value}%`
    };

    useEffect(() => {
        setUsers([]);
        setUsersFA([]);
        axios.get(`http://localhost:3000/class/users/${classID}`)
            .then((response) => {
                setUsers(response.data.users);
            });
    }, [classID]);

    useEffect(() => {
        if (users.length > 0) {
            const userSet = new Set();
            users.forEach(i => {
                axios.get(`http://localhost:3000/user/${i}`)
                    .then((response) => {
                        if (!userSet.has(i)) {
                            userSet.add(i);
                            setUsersFA(prevUsersFA => [...prevUsersFA, response.data]);
                        }
                    });
            });
        }
    }, [users]);

    return (
        <div style={transition} className='ClassUserClass'>
            <div onClick={showClick} className='ShowUsers'><IoPeople /></div>
            <div className='Users'>
                <p className='Add t'>Usuarios</p>
                {usersFA.map((i) => (
                    <div className='Presentacion'><p><FaUserCircle className='Icon'/>{i.name}</p><p>{i.tuition}</p></div>
                ))}
            </div>
        </div>
    );
}
