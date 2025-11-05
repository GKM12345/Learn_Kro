import { useLayoutEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MenuLayout from '../layout/menu/MenuLayout';
import RoutesBeforeLogin from './routesWithoutLogin/Router';

const Routes = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const checkAuthSession = async () => {
        try {
            const user = true;
            if (user) {
                setIsUserAuthenticated(true);
            }
        } catch (error) {
            setIsUserAuthenticated(false);
        }
    };

    useLayoutEffect(()=>{
        checkAuthSession();
    },[])

    return (
        <BrowserRouter>
            {isUserAuthenticated ? <MenuLayout /> : <RoutesBeforeLogin />}
        </BrowserRouter>
    );
}

export default Routes;