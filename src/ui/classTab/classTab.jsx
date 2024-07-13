import './classTab.css'
import { useNavigate } from 'react-router-dom';
import getRandomColor from '../../hooks/colors';
export default function ClassTab({text, idClass}) {
    const nav = useNavigate();
    const navigate = () => {
        nav(`/class/${idClass}`);
    }
    return (
        <div onClick={navigate} className='ClassTabClass'>
            <p className='iconText' style={{background: getRandomColor()}}>{text[0]}</p>
            <p className='texto'>{text}</p>
        </div>
    );
}