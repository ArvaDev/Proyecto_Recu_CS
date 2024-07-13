import './ClassIdModal.css'
export default function ClassIdModal({close, classID}) {
    return (
        <div className='ClassIdModalClass'>
            <div className='cont'>
                <div className='close' onClick={close}>x</div>
                <p className='p'>Id de clase</p>
                <p>{classID}</p>
            </div>
        </div>
    );
}