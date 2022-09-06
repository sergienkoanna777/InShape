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
                    <>
                    <NavigationLink to = {`/user/${currentUser._id}`}>
                    <h3>Profile</h3>
                </NavigationLink>
                    <NavigationLink onClick={handleSignOut} to = "/">
                    <h3>Sign out</h3>
                </NavigationLink>
                </>
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
    margin: 0px 40px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #35858B;

    .signin, .logo, .exercises{
        border:none;
        margin: 0px 100px;
        color:#fff;
        font-weight: bold;
    }
    
        h3:hover{
            color:#D61C4E;
        }
`;

export default Navbar;