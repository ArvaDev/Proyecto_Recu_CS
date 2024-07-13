import './option.css'
export default function Option({icon, text, onClick, canNavigate = false, to = 'login'}) {
    const onEvent = () => {
        if(canNavigate){
            window.location.href = to;
        }
        onClick();
    }
    return (
        <div className="OptionClass" onClick={onEvent}>
            <p className='Icon'>{icon}</p>
            <p className='customText'>{text}</p>
        </div>
    );
}