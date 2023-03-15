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
        getTotalOfProfessionals()
        getLocation()
        setUserContextLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getAllUsers = async({ jwt, search, blocked}, page=0) => {

        try{
            const response =  await axios.request({
                method: "post",
                url: `${process.env.REACT_APP_BASE_URL}/users/all`,
                headers:{
                    "authorization": jwt
                },
                data: {search, blocked}
            });

            return response.data

        }catch(err){
            console.log(err)
        }
    }

    const getNotProfessionalUsers = async (page = 0, options)=>{
        const {search, jwt} = options;
        const data ={
            page,
            search
        }
        try{
            const response = await axios.request({
                method: 'post',
                url: `${process.env.REACT_APP_BASE_URL}/users/hirer`,
                headers: {
                    "authorization": jwt
                },
                data
            });
            return(response.data);
        }catch(err){
            console.log(err.response.data)
        }
    }

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
        const profiles = await getProfessionals(0, {});
        setProfessionals(profiles);    
    }

    const getProfessionals = async(page=0, options)=>{

        let headers = {
            page, 
            category: options.category ? options.category : false,
            mother: options.mother ? true : false,
            state: options.state ? options.state : false,
            city: options.city ? options.city : false,
            search: options.search? options.search : false
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
    
    const getTotalOfProfessionals = async ()=>{
        try{
            const total = await axios.request({
                method: "get",
                url: `${process.env.REACT_APP_BASE_URL}/users/total`
            })
            setTotal(total.data);
        }catch(err){
            console.log(err.response.data)
        }
    }

    const getTotalofUsers = async (blocked)=>{

        try{
            const total = await axios.request({
                method: "post",
                url: `${process.env.REACT_APP_BASE_URL}/users/all/total`,
                data: {
                    blocked
                }
            })

            return total.data;
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

    const blockUser = async(id, jwt, blocked)=>{

        try{
            const response = await axios.request({
                method: "put",
                url: `${process.env.REACT_APP_BASE_URL}/block-user/${id}`,
                headers: {
                    "authorization": jwt
                },
                data: {
                    blocked
                }
            })

            return response.data;

        }catch(err){
            console.log(err)
        }
    }

    const getLocation = async()=>{

        try{
            const response = await axios.request({
                method: "get",
                url: `${process.env.REACT_APP_BASE_URL}/users/locations`
            });
            const growthstates = await response.data.map(item => item.state);
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
            getProfessionals,
            getAllUsers,
            getNotProfessionalUsers,
            blockUser,
            getTotalofUsers,
            getTotalOfProfessionals
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextPrivider;