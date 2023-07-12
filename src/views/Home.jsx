import { useContext,useEffect,useState } from "react";
import { UseApiContext } from "../context/ApiContext";
import Button from '../components/buttons/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const { apiFetch } = useContext(UseApiContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user')) {
            apiFetch('getUser',localStorage.getItem('user')).then(data => console.log(data))
        }
    },[])

    return (
        <div style={{ backgroundColor: "#efefef",padding: "20px" }}>
            <h1>HOME</h1>
            <Button number={1} text={"Iniciar sesión"} status={true} screen={"mobile"} child1={false} child2={true} child3={false} classes={"logInButtons"} handleClick={() => navigate("/logIn")} />
            <Button number={2} text={"Registrarse"} status={true} screen={"mobile"} child1={false} child2={true} child3={false} classes={"logInButtons"} handleClick={() => navigate("/signUp")} />
        </div>
    )
}