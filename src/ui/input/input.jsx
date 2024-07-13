import './input.css'
import { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function Input({ placeholder, isPassword = false, register, type = "text", min, max, customClass }) {
    const [isPass, setIsPass] = useState(true);
    const [pass, setPass] = useState(isPassword ? "password" : type);
    const showEye = isPassword ? "block" : "none";
    const showPass = () => {
        setIsPass(!isPass);
        setPass(isPass ? "text" : "password");
    };
    return (
        <div className={`InputClass ${customClass}`}>
            <input minLength={min} maxLength={max} type={pass} placeholder={placeholder} {...register} />
            {isPassword && (
                isPass ? 
                <FaEye onClick={showPass} style={{ display: showEye }} className='eye' /> : 
                <FaEyeSlash onClick={showPass} style={{ display: showEye }} className='eye' />
            )}
        </div>
    );
}
