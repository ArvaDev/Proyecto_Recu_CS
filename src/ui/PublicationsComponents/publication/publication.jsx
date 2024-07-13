import { useState, useEffect } from 'react';
import './publication.css';
import { FaTrash } from "react-icons/fa";
import axios from 'axios';

export default function Publication({ creator, message, date, id, classID, userLevel }) {
    const [dateMessage, setDateMessage] = useState('Hace un momento');
    const numberDate = parseInt(date);
    useEffect(() => {
        const updateMessage = () => {
            const now = Date.now();
            const diff = now - numberDate;
            
            if (diff < 60 * 1000) {
                setDateMessage('Hace un momento');
            } else if (diff < 2 * 60 * 1000) {
                setDateMessage('Hace un minuto');
            } else if (diff < 5 * 60 * 1000) {
                setDateMessage('Hace 5 minutos');
            } else if (diff < 60 * 60 * 1000) {
                const minutes = Math.floor(diff / (60 * 1000));
                setDateMessage(`Hace ${minutes} minutos`);
            } else if (diff < 2 * 60 * 60 * 1000) {
                setDateMessage('Hace una hora');
            } else if (diff < 24 * 60 * 60 * 1000) {
                const hours = Math.floor(diff / (60 * 60 * 1000));
                setDateMessage(`Hace ${hours} horas`);
            } else {
                const days = Math.floor(diff / (24 * 60 * 60 * 1000));
                setDateMessage(`Hace ${days} días`);
            }
        };

        updateMessage(); // Initial update
        const intervalId = setInterval(updateMessage, 60 * 1000); // Update every minute

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [numberDate]);

    const deletePost = async () => {
        await axios.delete(`http://localhost:3000/classes/${classID}/post/${id}`)
            .then(() => {
                window.location.reload();
            })
    }

    return (
        <div className='PostClass'>
            <p className='date'>{dateMessage} {userLevel && <FaTrash className='iconTrash' onClick={deletePost}/>}</p>
            <p className='creator'>{creator}</p>
            <p className='message'>{message}</p>
        </div>
    );
}
