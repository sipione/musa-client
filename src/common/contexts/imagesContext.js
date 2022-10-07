import { async } from "@firebase/util";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ImagesContext = createContext();


const ImageContextProvider = ({children})=>{
    const [allImages, setAllImages] = useState(null);


    useEffect(()=>{
        getImages()
    }, [])

    const getImages = async ()=>{
        try{
            const images = await axios({
                method: "get",
                url: "https://musa-mktplace.herokuapp.com/images",

            })

            setAllImages(images.data);
        }catch(err){
            console.log(err)
        }
    }

    return(
        <ImagesContext.Provider value={{allImages}}>
            {children}
        </ImagesContext.Provider>
    )
}
export default ImageContextProvider;