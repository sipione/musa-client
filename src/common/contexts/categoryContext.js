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
        const config = {
            method: 'get',
            url: 'https://musa-mktplace.herokuapp.com/categories',
            headers: { }
        };

        const response = await axios(config);
        setCategories([...response.data]);
    }
    
    return(
        <CategoryContext.Provider value={{categories, categorySelected, setCategorySelected}}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider;