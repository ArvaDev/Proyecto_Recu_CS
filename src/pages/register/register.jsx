import './register.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Input from '../../ui/input/input';
import Logo from '../../ui/logo/logo';
import Warning from '../../ui/warning/warning';
import Button from '../../ui/btn/Button';
import Loading from '../../ui/loading/loading';
import Modal from '../../ui/Modals/modal/modal';
import { useState } from 'react';
export default function Register() {
    const [load, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [exist, setExist] = useState(false);
    const { register, handleSubmit, formState: {errors}, watch } = useForm();
    const onSubmit = (value) => {  
        setLoading(true); 
        const rol = value.rol === "true";
        value.rol = rol

        axios.post('http://localhost:3000/signup', value)
            .then(() => {
                setLoading(false)
                setModal(true)
            })
            .catch(() => {
                setLoading(false)
                setExist(true)
            })
    }
    return (
        <div className="RegisterClass">
            {load && <Loading/>}
            {modal && <Modal onClick={() => {window.location.href = '/login'}} title="Felicidades!" message="Has creado una cuenta nueva, puedes checar tu correo"/>}
            {exist && <Modal onClick={() => {window.location.reload()}} title="Error!" message="Este correo ya esta en uso"/>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Logo/>
                <div className='input'>
                    <Input register={register('name', {required: true})} placeholder="Nombre"/>
                    {errors.name && <Warning message="Campo requerido"/>}
                </div>
                <div className='input'>
                    <Input register={register('mail', {required: true, pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Correo electrónico inválido" }})} placeholder="Correo electronico"/>
                    {errors.mail && <Warning message={errors.mail.message || "Campo requerido"}/>}
                </div>
                <div className='input'>
                    <Input register={register('tel', {required: true})} placeholder="Tel" type='number' max={10}/>
                    {errors.tel && <Warning message="Campo requerido"/>}
                </div>
                <div className='input'>
                    <Input register={register('password', {required: true})} placeholder="Contraseña" type='number' max={10}/>
                    {errors.password && <Warning message="Campo requerido"/>}
                </div>
                <div className='input'>
                    <Input register={register('matchPassword', {required: true})} placeholder="Confirmar contraseña" type='number' max={10}/>
                    {errors.matchPassword && <Warning message="Campo requerido"/>}
                    {watch('matchPassword') !== watch('password') && <Warning type='warning' message="Las contraseñas no coiseden"/>}
                </div>
                <div className='input dual'>
                    <div className='dual'>
                        <p>Alumno:</p>
                        <input name='rol' {...register('rol', {required: true})} value={false} type='radio'/>
                    </div>
                    <div className='dual'>
                        <p>Docente:</p>
                        <input name='rol' {...register('rol', {required: true})} value={true} type='radio'/>
                    </div>
                    {errors.rol && <Warning message="Campo requerido"/>}
                </div>
                <div className='input'>
                    <Button value="Registrarse"/>
                </div>
                <p>Ya tienes una cuenta <a href='/login'>Ingresa</a></p>
            </form>
        </div>
    );
}