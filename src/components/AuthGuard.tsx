import { useRouter } from 'next/router';
import { Dispatch, ReactNode } from 'react';
import { ReactChild, useEffect, useState } from 'react';

import Cookies from 'universal-cookie';

function AuthGuard({ children }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const cookies = new Cookies();

    useEffect(() => {
        authCheck(router.asPath);
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);
        router.events.on('routeChangeComplete', authCheck)
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }
    }, []);

    function authCheck(url) {
        const publicPaths = ['/login', '/register'];
        const path = url.split('?')[0];
        if (
            process.env.ACCESS_TOKEN_COOKIE
            && cookies.get(process.env.ACCESS_TOKEN_COOKIE)
            || publicPaths.includes(path)
        ) {
            setAuthorized(true);
        } else {
            setAuthorized(false);
            router.push({
                pathname: '/login',
                query: { returnUrl: router.asPath }
            });
        }
    }

    return (authorized && children);
}

export default AuthGuard