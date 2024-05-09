import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const navigate = useNavigate();

    const handlelogin = () => {
        navigate('/login');
    }
    return (
        <div>
            <button type='submit' onClick={handlelogin}>Login</button>
        </div>
        
    )
}