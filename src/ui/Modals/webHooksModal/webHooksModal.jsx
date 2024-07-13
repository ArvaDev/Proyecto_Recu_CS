import './webHooksModal.css';
import { useForm } from 'react-hook-form';
import Input from '../../input/input';
import Warning from '../../warning/warning';
import Button from '../../btn/Button';
export default function WebHooksModal({close, classID}) {
    const {register, formState: {errors}, handleSubmit } = useForm();
    const sumit = (d) => {
        d.select = parseInt(d.select);
        console.log(d);
    }
    return (
        <div className="WebHooksModalClass">
            <form className='WebhookForm' onSubmit={handleSubmit(sumit)}>
                <p className='Add'>Añade un WebHook</p>
                <div className='input'>
                    <Input register={register('url', { required: true })} placeholder="https://ejemplo.com"/>
                    {errors.url && <Warning message="El campo es necesario para el hook"/>}
                </div>
                <div className='input'>
                    <select placeholder="modkcsd" {...register('select', { required: true })}>
                        <option value={1}>application/json</option>
                        <option value={2}>application/x-www-form-urlencoded</option>
                    </select>
                </div>
                <div className='buttons'>
                    <button className='env'>Crear webhook</button>
                    <button className='can' onClick={close}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}