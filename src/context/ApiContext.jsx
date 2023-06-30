import { createContext } from 'react';

export const UseApiContext = createContext();

export const ApiContext = ({ children }) => {

    const apiFetch= async(param,data)=>{
        await fetch(`http://localhost:3000/api/${param}`,{
            method:"POST",
            body: data,
            headers: {
            "Content-Type":"application/json"
            }
        }).then(res=>{
            res.json().then(res=>{
                return res
            }).catch((error)=>{
                return error
            })
        }).catch((error)=>{
            return error
        })
    }

    return (
        <UseApiContext.Provider
            value={{
                apiFetch
            }}
        >
            {children}
        </UseApiContext.Provider>
    );
};
