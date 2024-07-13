import { useEffect } from 'react';

export const CloseSesion = () => {
    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('user');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return null;
};
