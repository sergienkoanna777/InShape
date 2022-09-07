import React, { createContext, useState} from "react";
export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
       //variable to hold result of fetch of current user
    const [currentUser, setCurrentUser] = useState(()=>{
        const user = window.sessionStorage.getItem("user");
        return user !== null ? JSON.parse(user):null;
    });

    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, loading, setLoading }}>
        {children}
        </CurrentUserContext.Provider>
    );
};
