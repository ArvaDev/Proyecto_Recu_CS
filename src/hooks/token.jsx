import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
export const Token = () => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const token = localStorage.getItem('user');
        if (token) {
            const decoded = jwtDecode(token);
            setToken(decoded);
        }
    }, []);
    return token?.user || false;
}