
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import background from "../media/image24.jpg";

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
        <Box style={{ backgroundImage: `url(${background})`}}>
            <SignInStyled>
                <form className="form" onSubmit={(event)=>{handleSignIn(event)}}>
                    <div className="signInForm">
                        <input className="input" name= "input" required type="email" placeholder="Your email" onChange={(e) =>{handleEmail(e)}}/>
                        <input className="input" name= "input" required type="password" placeholder="Your password" onChange={(e) =>{handlePassword(e)}}/>
                        <Button type="submit">Sign In</Button>
                    </div>
                </form>
                <BoxTwo>
                    <p>Don't have an account yet?</p>
                        <button onClick={()=> {navigate("/registration")}}>Join Us!</button>
                </BoxTwo>
            </SignInStyled>
        </Box>
    )
}
const Box = styled.div`
  height: 86vh;
  width: 100%;
  background-position-y: -25ch;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BoxTwo = styled.div`
position: absolute;
    top: 80%;
    left: 60%;
    transform: translate(-50%, -50%);
    text-align:center;
    font-size:30px;
    button{
        padding: 10px;
        font-size:25px;
        border-radius:10px;
        color:#35858B;
    }
    button:hover{
        background-color:#35858B;
        color:white;
    }
`

const SignInStyled = styled.div`
    .form{
    position: absolute;
    top: 55%;
    left: 60%;
    transform: translate(-50%, -50%);
    
}
.input{
    padding: 15px;
    border: 1px solid #4FBDBA;
    border-radius:5px;
    font-size: 20px;
    color:#072227;
    
    
}

.signInForm{
    display: flex;
    flex-direction: column;
    gap:5px;
    background-color: white;
    height: 280px;
    width: 450px;
    opacity: 0.8;
    padding: 50px;
}
`
export default SignIn;