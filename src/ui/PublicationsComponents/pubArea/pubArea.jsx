import './pubArea.css'
import getRandomColor from '../../../hooks/colors';
import CreatePostButton from '../createPostButton/createPostButton'
import Publication from '../publication/publication'
export default function PubArea({classData, classID, token}) {
    return (
        <div className='PubAreaClass'>
            <p style={{background: getRandomColor()}} className='Title'>{classData?.name}</p>
            <div className='PostArea'>
                <CreatePostButton classData={classData} user={token?.name} classID={classID}/>
                {classData?.post.slice().reverse().map((item) => (
                        <Publication userLevel={token?.rol} date={item?.date} creator={item?.creator} message={item?.message} classID={classID} id={item?.id}/>
                ))}
            </div>
        </div>
    );
}