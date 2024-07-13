import './board.css';
import ClassBoard from '../classBoard/classBoard';
import HomePanel from '../homePanel/homePanel';
export default function Board({token}) {
    return (
    <div className='BoardClass'>
        <HomePanel token={token}/>
        <ClassBoard token={token}/>
    </div>
)
}
