import { useEffect, useState } from 'react';
import ClientApi from '../api/ClientApi';
import { useNavigate } from 'react-router-dom';

const Protected = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await ClientApi.checkAuth(); // Ensure this is correct
                console.log(res);
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Authentication check failed:", error);
                setIsAuthenticated(false);
                navigate('/');
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show a loading state while checking auth
    }

    return <>{children}</>; // Render children if authenticated
};

export default Protected;
