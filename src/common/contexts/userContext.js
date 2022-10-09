import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext =  createContext()

const UserContextPrivider = ({children})=>{
    const [professionals, setProfessionals] = useState([]);
    const [userLoged, setUserLoged] = useState(false);
    const [total, setTotal] = useState();

    useEffect(()=>{
        seedProfessionals()
        logUser()
        getTotal()
    }, [])

    const seedProfessionals = async()=>{
        const profiles = await getUsers(0);
        setProfessionals(profiles);    
    }

    const getUsers = async(page, category=null)=>{

        let headers = category ? {page, category} : {page}


        try{
            const response = await axios.request({
                method: 'get',
                url: `http://localhost:8080/api/users`,
                headers
            });
            return(response.data);
        }catch(err){
            console.log(err.response.data)
        }

    }

    const logUser = async () => {
        const logedData = window.sessionStorage.getItem("logedData");

        
        if(logedData){
            var logedDataJson = JSON.parse(logedData);
            setUserLoged(logedDataJson);
        }
    }

    const getTotal = async ()=>{
        try{
            const total = await axios.request({
                method: "get",
                url: `http://localhost:8080/api/users/total`
            })
            setTotal(total);
        }catch(err){
            console.log(err.response.data)
        }
    }

    return(
        <UserContext.Provider value={{total, professionals, userLoged, setUserLoged, getUsers}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextPrivider;