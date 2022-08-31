import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

// import { CurrentUserContext } from "./CurrentUserContext";

const Navbar = () =>{
    // const {currentUser, setCurrentUser} = useContext(CurrentUserContext)
    // const history = useHistory();
    // const handleSignIn = () =>{
    //     history.push("/signin")
    // }
    // const handleToHomeFeed = () =>{
    //     history.push("/");
    // }
        return(
        <Header>
            <NavigationLink to= "/">
            <h3>InShape</h3>
            </NavigationLink>
            
            {/* <button className="logo" onClick={handleToHomeFeed}>InShape</button> */}
            <NavigationLink to= "/exercises">
                    <h3> Exercises</h3>
                </NavigationLink>
            {/* <button className="exercises" onClick={handleToHomeFeed}>Exercises</button> */}
            <NavigationLink to= "/signin">
            <h3>Sign in</h3>
            </NavigationLink>
            
            {/* {
                !currentUser ?(
                    <button className="signin" onClick={handleSignIn}>Sign in</button>
                ): (
                    <p>Hello {currentUser.name}</p>
                )
            }    */}
        </Header>
    )
}

const NavigationLink = styled(NavLink)`
    text-decoration:none;
    font-size:25px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #35858B;
    .logo{
        font-size:35px;
        
    }
    .logo:hover{
        color:#AEFEFF;
    }
    .signin, .logo, .exercises{
        border:none;
        background-color: #35858B;
        margin: 0px 30px;
        color:#fff;
        font-weight: bold;
    }
    .signin, .exercises{
        font-size: 25px;
    }
    .signin:hover{
            color:#AEFEFF;
        }
        .exercises:hover{
            color:#AEFEFF;
        }
`;

export default Navbar;