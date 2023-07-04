import { useEffect, useState } from "react";
import Button from "../components/buttons/Button";
import Input from "../components/inputs/Input";

export default function Home(){

    const [data,setData]=useState("")

    useEffect(() => {
        console.log(data)
    }, [data]);

    const handleClick=()=>{
        console.log("FUNCIONÓ")
    }

    return(
        <div style={{backgroundColor:"#efefef",padding:"20px"}}>
            <Button number={1} text={"Button"} status={true} screen={"mobile"} child1={true} child2={true} child3={true} classes={"claseExtra"} handleClick={handleClick}/>
            <Button number={2} text={"Button"} status={true} screen={"mobile"} child1={true} child2={true} child3={true} classes={"claseExtra"} handleClick={handleClick}/>
            <Button number={3} text={"Button"} status={false} screen={"mobile"} child1={true} child2={true} child3={true} classes={"claseExtra"} handleClick={handleClick}/>
            <Button number={4} text={"Button"} status={false} screen={"mobile"}  child2={true} child3={true} classes={"claseExtra"} handleClick={handleClick}/>
            <Button number={5} text={"Button"} status={false} screen={"mobile"} child1={true} child2={true} child3={true} classes={"claseExtra"} handleClick={handleClick}/>

            <Button number={1} text={"Button"} status={true} screen={"desktop"} child1={true}  child3={true} classes={"claseExtra"} handleClick={handleClick}/>
            <Button number={2} text={"Button"} status={true} screen={"desktop"} child1={true} child2={true} child3={true} classes={"claseExtra"} handleClick={handleClick}/>
            <Button number={3} text={"Button"} status={false} screen={"desktop"} child1={true} child2={true} child3={true} classes={"claseExtra"} handleClick={handleClick}/>
            <Button number={4} text={"Button"} status={false} screen={"desktop"} child1={true} classes={"claseExtra"} handleClick={handleClick} />
            <Button number={5} text={"Button"} status={true} screen={"desktop"} child1={true} child2={true} child3={true} classes={"claseExtra"} handleClick={handleClick}/>

            <Input label={"Label"} error={false} helper={"HOLA que tal"} disabled={false} classes={"claseExtra"} handleChange={setData}/>
            <Input label={"Error"} error={true} helper={"HOLA que tal"} disabled={false} classes={"claseExtra"} handleChange={setData}/>
            <Input label={"Error"} error={false} helper={"HOLA que tal"} disabled={true} classes={"claseExtra"} handleChange={setData}/>
            <Input label={"Error"} error={true} helper={"HOLA que tal"} disabled={true} classes={"claseExtra"} handleChange={setData}/>
        </div>
    )
}