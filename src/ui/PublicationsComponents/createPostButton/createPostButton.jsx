import './createPostButton.css'
import getRandomColor from '../../../hooks/colors';
import axios from 'axios';
import { useState, useRef } from 'react';
import { IoSend } from "react-icons/io5";

export default function CreatePostButton({ classData, user, classID }) {
    const [msg, setMsg] = useState(false);
    const textAreaRef = useRef(null);


    const onClick = () => {
        setMsg(!msg);
    }

    const cancel = () => {
        setMsg(false);
        if (textAreaRef.current) {
            textAreaRef.current.value = '';
        }
    }

    const send = async () => {
        if (textAreaRef.current) {
            const message = {
                type: 'message',
                creator: user,
                message: textAreaRef.current.value,
                date: Date.now()
            }

            classData?.webhooks.forEach(element => {
                const data = {user: user, action: `Creo un post en la clase ${classData?.name}`};
                axios.post(element, data);
            });

            await axios.post(`http://localhost:3000/classes/${classID}`, message)
                .then(() => { window.location.reload() })
                .catch(() => { console.log("Falla") })
        }
    }

    return (
        <div className="CreatePostButtonClass">
            <div className='anunciado' onClick={onClick}>
                {user && user.length > 0 && (
                    <>
                        <p className='user' style={{ background: getRandomColor() }}>{user[0]}</p>
                        <p className='titleBtn'>Anunciar algo en clase</p>
                    </>
                )}
            </div>
            {msg && <div className='containerMessage'>
                <textarea
                    className='textMessage'
                    placeholder='Mensaje'
                    ref={textAreaRef}
                />
                <div className='Buttons'>
                    <button className='env' onClick={send}>Enviar <IoSend className='icon' /></button>
                    <button className='can' onClick={cancel}>Cancelar</button>
                </div>
            </div>}
        </div>
    );
}
