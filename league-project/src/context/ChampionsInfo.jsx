import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { allChampions } from "../services/api-allheroes";

export const ChampionContentContext = createContext({})

export const ChampionContentProvider = ({children}) =>{

  const [champions, setChampions] = useState([])

  useEffect(()=>{
    const loadChampions = async () =>{
      try{
        const response = await allChampions.get("");  
        let result = Object.keys(response.data.data).map((key) => response.data.data[key]);
        setChampions(result) 
      }
      catch(error){
        toast.error('Falha na conexão!')
      }
    }
    loadChampions()
  },[])


    return(
        <ChampionContentContext.Provider value={{champions}}>
            {children}
        </ChampionContentContext.Provider>
    )
}
