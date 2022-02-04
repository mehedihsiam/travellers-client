import React, { createContext } from 'react';
import useContextAPI from '../../hooks/useContextAPI';


export const AuthContext = createContext();
const ContextProvider = ({children}) => {
    const allContext = useContextAPI();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;