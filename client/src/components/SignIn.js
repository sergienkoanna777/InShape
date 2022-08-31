
import styled from "styled-components";

const SignIn = () =>{
    
    return (
        <SignInStyled>
        <form className="form" onSubmit={(event)=>{handleSignIn(event)}}>
        <div className="signInForm">
            <input className="input" name= "input" type="text" placeholder="Your first Name" onChange={(e) =>{handleUserName(e)}}/>
            <button className="button" type="submit">Sign In</button>
            </div>
        </form>
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
.button{
    border: none;
    background-color : #4FBDBA;
    color: white;
    font-weight: bold;
    padding: 15px;
    border-radius: 5px;
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