import './class.css';
import { useParams } from 'react-router-dom';
import { DeleteClassByID } from '../../hooks/deleteClass';
import { Token } from '../../hooks/token';
import { getClass } from '../../hooks/getClass';
import Header from '../../ui/header/header';
import InternalBoard from '../../ui/internalBoard/internalBoard';
import PubArea from '../../ui/PublicationsComponents/pubArea/pubArea';
import Chat from '../../ui/Chats/chat';
import ClassUser from '../../ui/classUser/classUser';
export default function Class() {
    const { uniqueID } = useParams();
    const token = Token();
    const clase = getClass(uniqueID);
    DeleteClassByID(token?.tuition);
    return (
        <div className='ClassClass'>
            <Header />
            <ClassUser classID={uniqueID}/>
            <div className='MainContainer'>
                <InternalBoard />
                <PubArea classID={uniqueID} token={token} classData={clase} />
                <Chat clase={uniqueID} user={token} />
            </div>
        </div>
    )
}