
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const SignIn = () =>{
    const navigate = useNavigate();
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
    const [userPassword, setUserPassword] = useState("");
    const[userEmail, setUserEmail] = useState("");
    const handleEmail = (e) => {
        setUserEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setUserPassword(e.target.value)
    }
    useEffect(() =>{
        if(currentUser){
            navigate("/");
        }
    },[])
    
    const handleSignIn = (event) =>{
        event.preventDefault();
        fetch("/signin",{
            method: "POST",
            body: JSON.stringify({
                userPassword:userPassword, userEmail:userEmail
            }),
            headers: {
                "Content-Type": "application/json",
            },
        } )
        .then((res)=>res.json())
        .then((json)=>{
            if(json.status ===200){
                window.sessionStorage.setItem("user", JSON.stringify(json.data));
                setCurrentUser(json.data);
                navigate(`/user/${json.data._id}`)
                
            }
            else{
                window.alert(json.message)
            }
        })
    }
    return (
        <SignInStyled>
        <form className="form" onSubmit={(event)=>{handleSignIn(event)}}>
        <div className="signInForm">
            <input className="input" name= "input" required type="email" placeholder="Your email" onChange={(e) =>{handleEmail(e)}}/>
            <input className="input" name= "input" required type="password" placeholder="Your password" onChange={(e) =>{handlePassword(e)}}/>
            <Button type="submit">Sign In</Button>
            </div>
        </form>
        <p>Don't have an account yet?</p>
            <button onClick={()=> {navigate("/registration")}}>Join Us!</button>
        </SignInStyled>
    )
}

const SignInStyled = styled.div`
    .form{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}
.input{
    padding: 15px;
    border: 1px solid #4FBDBA;
    border-radius:5px;
    font-size: 20px;
    
    
}

.signInForm{
    display: flex;
    flex-direction: column;
    gap:5px;
    background-color: white;
    height: 200px;
    width: 450px;
    opacity: 0.8;
    padding: 50px;
}
`
export default SignIn;