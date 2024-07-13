import './internalBoard.css'
import { Token } from '../../hooks/token';
import ClassBoard from '../classBoard/classBoard';
import ClassPanel from '../classPanel/classPanel';
export default function InternalBoard() {
    return (
        <div className='InternalBoardClass'>
            <ClassPanel/>
            <ClassBoard token={Token()}/>
        </div>
    )   
}