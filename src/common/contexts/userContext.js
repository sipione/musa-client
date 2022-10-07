import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext =  createContext()

const UserContextPrivider = ({children})=>{
    const[professionals, setProfessionals]=useState([]);
    const[userLoged, setUserLoged]=useState(false);

    useEffect(()=>{
        getUsers();
        logUser()
    }, [])

    const getUsers = async()=>{

        const config = {
            method: 'get',
            url: 'https://musa-mktplace.herokuapp.com/users',
            headers: { }
        };

        const response = await axios(config);
        setProfessionals(response.data);

    }

    const logUser = async () => {
        const logedData = window.sessionStorage.getItem("logedData");
        console.log(logedData)
        
        if(logedData){
            var logedDataJson = JSON.parse(logedData);
            setUserLoged(logedDataJson);
        }
    }

    return(
        <UserContext.Provider value={{professionals, userLoged, setUserLoged}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextPrivider;