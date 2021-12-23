import React,{useState,useEffect} from 'react'
import { Dispatch, SetStateAction } from 'react';
//state持久化，用该函数而不是useState。
 

function  usePersistedState<S>(key:string , defaultValue: S):[S,Dispatch<SetStateAction<S>>]{
    const [state, setState] = useState(
      () =>{
    
        const item = sessionStorage.getItem(key)
        if(item){
          return JSON.parse(item)
        }
        return defaultValue
      } 
    ) ;
    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  }

export default usePersistedState

