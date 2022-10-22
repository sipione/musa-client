import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext =  createContext()

const UserContextPrivider = ({children})=>{
    const [professionals, setProfessionals] = useState([]);
    const [userLoged, setUserLoged] = useState(false);
    const [total, setTotal] = useState();
    const [locations, setLocations] = useState(null);
    const [states, setStates] = useState(null);
    const [userContextLoading, setUserContextLoading] = useState(false)

    useEffect(()=>{
        setUserContextLoading(true)
        seedProfessionals()
        logUser()
        getTotal()
        getLocation()
        setUserContextLoading(false)
    }, [])

    const getUserById = async(id, jwt)=>{
        try{
            const user =  await axios.request({
                method: "get",
                url: `${process.env.REACT_APP_BASE_URL}/users/${id}`,
                headers:{
                    "authorization": jwt
                }
            })

            return user.data;

        }catch(err){
            alert(err.message)
            console.log(err)
        }
    }

    const seedProfessionals = async()=>{
        const profiles = await getUsers(0, {});
        setProfessionals(profiles);    
    }

    const getUsers = async(page=0, {category, mother, state, city})=>{

        let headers = {
            page, 
            category: category ? category : false,
            mother: mother ? true : false,
            state: state ? state : false,
            city: city ? city : false 
        };


        try{
            const response = await axios.request({
                method: 'get',
                url: `${process.env.REACT_APP_BASE_URL}/users`,
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
                url: `${process.env.REACT_APP_BASE_URL}/users/total`
            })
            setTotal(total);
        }catch(err){
            console.log(err.response.data)
        }
    }

    const getLocation = async()=>{

        try{
            const response = await axios.request({
                method: "get",
                url: `${process.env.REACT_APP_BASE_URL}/users/locations`
            });
            const growthstates = response.data.map(item => item.state);
            const netStates = [...new Set(growthstates)];

            setStates(netStates);
            setLocations(response.data);
        }catch(err){
            alert(err.response.data);
            console.log(err)
        }
    } 

    return(
        <UserContext.Provider value={{
            userContextLoading,
            locations,
            states,
            getUserById, 
            total, 
            professionals, 
            userLoged, 
            setUserLoged, 
            getUsers
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextPrivider;