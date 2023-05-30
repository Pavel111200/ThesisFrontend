import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

const Logout = () => {
    const { userLogout } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        userLogout();
        navigate('/');
    });
    
    return null;
}

export default Logout;