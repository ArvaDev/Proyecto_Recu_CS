import './modal.css'

export default function Modal({ title, message, onClick }) {
    return (
        <div className='ModalClass'>
            <div className='modalCont'>
                <p className='title'>{title}</p>
                <p className='text'>{message}</p>
                <div>
                    <button onClick={onClick}>Entendido</button>
                </div>
            </div>
        </div>
    )
}