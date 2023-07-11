import { useContext,useEffect,useState } from "react";
import { UseUserContext } from "../context/UserContext";
import { UseApiContext } from "../context/ApiContext";
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const { apiFetch } = useContext(UseApiContext);
    const navigate = useNavigate();
    useEffect(() => {
        let apiData = localStorage.getItem('user')
        if (apiData) {
            apiFetch('login',apiData).then(data => console.log(data))
        } else {
            console.log('No se encontró');
            navigate("/logIn")
        }
    },[])

    return (
        <div style={{ backgroundColor: "#efefef",padding: "20px" }}>
            <h1>HOME</h1>
        </div>
    )
}