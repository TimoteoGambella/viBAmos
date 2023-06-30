import { createContext } from 'react';
import emailjs from '@emailjs/browser';

export const UseApiContext = createContext();

export const ApiContext = ({ children }) => {

    const apiFetch= async(param,data)=>{

        // FORMATO DATA REQUERIDO 

        // JSON.stringify({
        //      id:"12312312jhbdf198273sdsd",
        //      favs:["HOLA","CHUA"],
        //      username:"SAHDAS",
        //      mail:"nisa@gmad.com"
        //      password:"iashdipoasdsa"
        // })

        await fetch(`https://backend-vi-b-amos-vercel.vercel.app/api/${param}`,{
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

    const emailJS = async (data) => {
        // VALIDAR PREVIAMENTE QUE EXISTE EL MAIL EN LA BASE DE DATOS
        // API NECESARIA PARA ENVIAR UN CORREO ELECTRONICO A CIERTO MAIL.

        // ARRAY NECESARIO DE "data"
        // const array= {
        //     nombre:"",
        //     contrasena:"",
        //     toMail:""
        // }

        emailjs.send('service_rkbguuj', 'template_7y8c547', data, process.env.EMAILJSKEY).then(
            function (response) {
                return true;
            },
            function (error) {
                return false;
            }
        );
    };

    return (
        <UseApiContext.Provider
            value={{
                apiFetch,
                emailJS
            }}
        >
            {children}
        </UseApiContext.Provider>
    );
};
