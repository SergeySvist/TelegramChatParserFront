import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function RedirectToLogin() {
    const location = window.location.href.split('/').lastIndexOf('admin');
    const navigate = useNavigate();
    useEffect(()=>{
        if(location === -1)
            navigate('/login')
    });

  return (
    <div>
    </div>
  );
}

export default RedirectToLogin;