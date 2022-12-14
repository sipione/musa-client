import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const CategoryContext =  createContext();

const CategoryContextProvider = ({children})=>{
    const [categories, setCategories] = useState([])
    const [categorySelected, setCategorySelected]=useState(false)

    useEffect(()=>{
        getCategories()
    }, [])

    const getCategories = async ()=>{
        try{
            const config = {
                method: 'get',
                url: `${process.env.REACT_APP_BASE_URL}/categories`,
                headers: { }
            };
            
            const response = await axios(config);
            setCategories([...response.data]);
        }catch(err){
            console.log(err)
        }
    }
    
    return(
        <CategoryContext.Provider value={{
            categories, 
            categorySelected, 
            setCategorySelected
        }}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider;