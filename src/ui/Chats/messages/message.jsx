import './message.css'
export default function Message({name, message}) {
    return (
        <div className="MessageClass">
            <p className='user'>{name}</p>
            {message}
        </div>
    );
}