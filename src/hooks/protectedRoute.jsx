import { Navigate } from 'react-router-dom';
export default function ProtectedRoute ({ element, path = '/login' }) {
    const token = localStorage.getItem('user');
    return !token ? <Navigate to={path}/> : element;
}
