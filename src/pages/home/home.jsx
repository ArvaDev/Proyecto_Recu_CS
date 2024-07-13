import './home.css';
import { Token } from '../../hooks/token';
import { DeleteClassByID } from '../../hooks/deleteClass';
import { MdOutlineClass } from "react-icons/md";
import Header from '../../ui/header/header';
import Board from '../../ui/board/board';
import ClassCard from '../../ui/classCard/classCard';

export default function Home() {
    const token = Token()
    const classes = token && token?.classes;
    DeleteClassByID(token?.tuition);
    
    return (
        <div className="HomeClass">
            <Header />
            <div className='MainContainer'>
                <Board token={token} />
                <div className='Classes'>
                    {classes ? (
                        token?.classes.length !== 0 ?
                        (classes?.map((i, index) => (
                            <ClassCard key={index} name={i} />
                        ))) 
                        :
                        <div className='notFount'>
                            <p>No hay nada por aquí</p>
                            <MdOutlineClass className='Icon'/>
                        </div>
                    ) :
                    <div className='notFount'>
                            <p>No hay nada por aquí</p>
                            <MdOutlineClass className='Icon'/>
                        </div>}
                </div>
            </div>
        </div>
    );
}
