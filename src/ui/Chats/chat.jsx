import './chat.css';
import Message from './messages/message';
import axios from 'axios';
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { useEffect, useState, useRef } from 'react';

export default function Chat({ clase, user }) {
    const [chatData, setChatData] = useState('');
    const [msg, setMsg] = useState([]);
    const wsRef = useRef(null);
    useEffect(() => {
        axios.get(`http://localhost:3000/class/chat/${clase}`)
            .then((response) => {
                setMsg(response.data.chat);
            })
            .catch((error) => {
                console.error('Error fetching chat data:', error);
            });

        const ws = new WebSocket('ws://localhost:8080');
        wsRef.current = ws;
        ws.onopen = () => {
            console.log('Connected to WebSocket');
        };
        ws.onmessage = (event) => {
            const newMessage = JSON.parse(event.data);
            console.log(newMessage[newMessage.length - 1]);
            setMsg((prevMsg) => [...prevMsg, newMessage[newMessage.length - 1]]);
        };
        return () => {
            ws.close();
        };
    }, [clase]);

    const sendMessage = () => {
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            const messageObject = {
                name: user.name,
                classID: clase,
                message: chatData
            };
            const messageJSON = JSON.stringify(messageObject);
            wsRef.current.send(messageJSON);
            setChatData('');
        }
    };

    return (
        <div className="ChatClass">
            <p className='HeaderChat'>
                Chat de clase
                <IoChatboxEllipsesSharp className='Icon' />
            </p>
            <div className='ChatSection'>
                {
                    msg.map((item, index) => (
                        <Message key={index} name={item.name} message={item.message} />
                    ))
                }
            </div>
            <div className='ChatMessage'>
                <input
                    type="text"
                    value={chatData}
                    onChange={(e) => setChatData(e.target.value)}
                    placeholder='Mensaje'
                />
                <button onClick={sendMessage}><IoMdSend /></button>
            </div>
        </div>
    );
}
