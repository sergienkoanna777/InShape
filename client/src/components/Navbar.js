import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import { CurrentUserContext } from "./CurrentUserContext";

const Navbar = () =>{
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)
    const navigate = useNavigate();
    const handleSignOut = () =>{
        window.sessionStorage.removeItem("user");
        setCurrentUser(null);
    }
        return(
        <Header>
            <NavigationLink to= "/">
                <h3>InShape</h3>
            </NavigationLink>
            
            <NavigationLink to= "/exercises">
                <h3> Exercises</h3>
            </NavigationLink>

            {
                currentUser ? (
                    <NavigationLink onClick={handleSignOut} to = "/">
                    <h3>Sign out</h3>
                </NavigationLink>
                    
                ):(
                    <NavigationLink to= "/signin">
                    <h3>Sign in</h3>
                </NavigationLink>
                )
            }
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
        h3{
            margin: 30px;
        }
`;

export default Navbar;