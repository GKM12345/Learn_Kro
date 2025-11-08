import { useLayoutEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MenuLayout from '../layout/menu/MenuLayout';
import RoutesBeforeLogin from './routesWithoutLogin/Router';
import { AuthContext } from '../hooks/AuthContext'; 

const authKey = 'isAuthenticated'

const Routes = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(localStorage.getItem(authKey) === 'true');

    const checkAuthSession = async () => {
        try {
            const user = false;
            if (user)
                setIsUserAuthenticated(true);
        } catch (error) {
            setIsUserAuthenticated(false);
        }
    };

    useLayoutEffect(()=>{
        checkAuthSession();
    },[])

    const handleLogin = (isLogin) => {
        setIsUserAuthenticated(isLogin);
        localStorage.setItem(authKey, isLogin);
    }

    return (
        <AuthContext.Provider value={{ isUserAuthenticated, handleLogin }}>
            <BrowserRouter>
                {isUserAuthenticated ? <MenuLayout /> : <RoutesBeforeLogin />}
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default Routes;