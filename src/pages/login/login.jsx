import './login.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import Warning from '../../ui/warning/warning';
import Button from '../../ui/btn/Button';
import Logo from '../../ui/logo/logo';
import Input from '../../ui/input/input';
import Loading from '../../ui/loading/loading';
export default function Login(){
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [load, setLoad] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const onSubmit = (value) => {
        setLoad(true)
        axios.post('http://localhost:3000/signin', value)
            .then((data) => {
                localStorage.setItem('user', data.data.token);
                window.location.href = '/home';
                setLoad(false);
                setInvalid(false);
            })
            .catch(() => {
                setInvalid(true);
                setLoad(false);
            })
    }
    return (
        <div className='LoginClass'>
            {load && <Loading/>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Logo/>
                <div className='input'>
                    <Input register={register('tuition', {required: true})} placeholder="Matricula"/>
                    {errors.tuition && <Warning message="Campo obligatorio"/>}
                </div>
                <div className='input'>
                    <Input register={register('password', {required: true})}  placeholder="Contraseña" isPassword={true}/>
                    {errors.password && <Warning message="Campo obligatorio"/>}
                </div>
                <div className='input'>
                    <Button value="Ingresar"/>
                </div>
                { invalid && <Warning message="Credenciales Invalidas"/> }
                <p>Aún no tienes una cuenta <a href='/'>Crea una</a></p>
            </form>
        </div>
    )
}