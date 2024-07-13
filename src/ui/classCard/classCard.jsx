import './classCard.css'
import getRandomColor from '../../hooks/colors';
import  { getClass } from '../../hooks/getClass';
import { useEffect, useState } from 'react';
export default function ClassCard({name}) {
    const [messages, setMessages] = useState(0);
    const clase = getClass(name)
    useEffect(() => {
        let m = 0;
        clase?.post?.map(i => {
            if(i.type === 'message'){
                m++;
                setMessages(m)
            }
        })
    }, [clase])
    return (
        <div className='ClassCardCard'>
            <div style={{background: getRandomColor()}} className='ClassName'>
                <a className='titleCard' href={`/class/${clase?.uniqueID}`}>{clase?.name}</a>
            </div>
            <div className='classCont'>
                { messages > 0 && 
                    <p className='comment'>
                        <a className='coment' href={`/class/${clase?.uniqueID}`}>{messages} comentarios en clase</a>
                    </p> }
                <p className='comment'>
                    <a className='coment' href={`/class/${clase?.uniqueID}`}>{clase?.users.length} usuarios en esta clase</a>
                </p>
            </div>
        </div>
    );
}