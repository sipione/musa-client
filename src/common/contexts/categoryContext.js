import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const CategoryContext =  createContext();

const CategoryContextProvider = ({children})=>{
    const [categories, setCategories] = useState([])
    const [categorySelected, setCategorySelected]=useState(false)
console.log(categorySelected)
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

            const reponseSorted = response.data.sort((a,b)=> a.label.localeCompare(b.label, 'pt-br', { sensitivity: 'base' }));

            setCategories([...reponseSorted]);
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