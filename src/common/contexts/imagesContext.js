import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";

export const ImagesContext = createContext();


const ImageContextProvider = ({children})=>{
    const [avatars, setAvatars] =useState(false);
    const {professionals}=useContext(UserContext);


    useEffect(()=>{

        if(professionals.length > 0){
            getAvatars(professionals)
        }

    }, [professionals])

    const getAvatars = async (users)=>{
        const usersId = users.map(item=> item.id);
        let array = [];

        try{
            await Promise.all(usersId.map( async userId => {
                const response = await axios({
                    method: "get",
                    url: `${process.env.REACT_APP_BASE_URL}/avatar/${userId}`
                });
                array.push(...response.data)
            }));

            setAvatars(array);
        }catch(err){
            console.log(err);
        }
    }

    const getImagesById = async id=>{
        try{
            const images = await axios({
                method: "get",
                url: `${process.env.REACT_APP_BASE_URL}/images/${id}`
            })
            return images.data;
        }catch(err){
            console.log(err);
            alert(err.response.data)
        }
    }

    return(
        <ImagesContext.Provider value={{avatars, getImagesById, getAvatars}}>
            {children}
        </ImagesContext.Provider>
    )
}
export default ImageContextProvider;