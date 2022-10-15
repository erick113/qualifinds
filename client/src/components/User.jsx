import React, { useEffect, useState } from 'react'

export const User = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const[validUser, setValidUser] = useState(false);
    let warningMessage = "";
    useEffect(()=>{
        if (name === "" && age === "") {
            warningMessage = "Introduce tu nombre y tu edad";
        }
        else{
            if (name === "" ) warningMessage = "Introduce tu nombre";
            if (age === "" || age <= 0) warningMessage = "Usa una edad válida";
        }
        setValidUser(warningMessage ? false : true);
    });

    const saveUser = ()=>{
        console.log(validUser);
        if (validUser) {
            const data = {
                name: name,
                age: Number(age)
            }
            fetch("http://localhost:3000/users", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data),
                }).then((response) => response.json())
                .then((user) => alert(`Se guardó el usuario ${user.name} de ${user.age} años`))
                .catch((error) => console.error("Error:", error));
        }else alert(warningMessage)
    }

    return (
        <div id="form">
            <div><h1>Hola {name}</h1></div>
            <div>
                <p htmlFor="name">Nombre</p>
                <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
            </div>

            <div>
                <p htmlFor="age">Edad</p>
                <input type="number" min="1" onChange={(e)=>{setAge(e.target.value)}}/>
            </div>

            <input type="button" value="Guardar"
                className={validUser ? "" : "dimmed"}
                onClick={()=>{saveUser()}}
            />
        </div>
    )
}