
import {useContext, useState} from 'react';
import styled from 'styled-components';
import { CurrentUserContext } from './CurrentUserContext';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import background from "../media/image23.jpg";

const Registration = () => {
    const navigate = useNavigate();
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleRegistration = (e) => {
        e.preventDefault();
        fetch("/create-user",{
            method: "POST",
            body: JSON.stringify({
                name:name, 
                lastName:lastName, 
                email:email, 
                gender:gender, 
                age:age, 
                weight:weight, 
                password:password, 
                confirmPassword:confirmPassword, 
                favorites:[], 
                workouts:[], 
                status:status, 
                clients:[]
            }),
            headers: {
                "Content-Type": "application/json",
            },
        } )
        .then((res)=>res.json())
        .then((json)=>{
            if(json.status ===201){
                window.sessionStorage.setItem("user", JSON.stringify(json.data));
                setCurrentUser(json.data);
                navigate(`/user/${json.data._id}`);
            }
            else{
                window.alert(json.message)
            }
        })
    }
        return (
            <Box style={{ backgroundImage: `url(${background})` }}>
        <RegistrationStyle>
    <form onSubmit={(e)=> {handleRegistration(e)}} className="form" >
        <div>
            <h1>User Registration</h1>
        </div>
        <div className="signInForm">
            <label className="label">Name</label>
            <input onChange={(ev) => setName(ev.currentTarget.value)} className="input" type="text" />
    
            <label className="label">Last Name</label>
            <input onChange={(ev) => setLastName(ev.currentTarget.value)} className="input" type="text" />
    
            <label className="label">Email</label>
            <input onChange={(ev) => setEmail(ev.currentTarget.value)} className="input" type="email" />

            <label className="label">Status</label>
            <select className="input" onChange={(ev) => setStatus(ev.currentTarget.value)}>
            <option disabled >Select your status</option>
                <option value="coach">Coach</option>
                <option value="athlet">Athlet</option>
            </select>
            
            <label className="label">Gender</label>
            <input onChange={(ev) => setGender(ev.currentTarget.value)} className="input" type="text" />
            
            <label className="label">Age</label>
            <input onChange={(ev) => setAge(ev.currentTarget.value)} className="input" type="text" />

            <label className="label">Weight (pound)</label>
            <input onChange={(ev) => setWeight(ev.currentTarget.value)} className="input" type="text" />

            <label className="label">Password</label>
            <input onChange={(ev) => setPassword(ev.currentTarget.value)} className="input" type="password" />

            <label className="label">Confirm Password</label>
            <input onChange={(ev) => setConfirmPassword(ev.currentTarget.value)} className="input" type="password" />
    
            <Button  type="submit">Submit</Button>
            </div>
    </form>
        </RegistrationStyle>
        </Box>
    );
    };

const Box = styled.div`
    height: 90vh;
    background-position-y: -25ch;
    background-repeat: no-repeat;
    background-size: cover;
`

const RegistrationStyle = styled.div`
    .form{
    position: absolute;
    top: 27%;
    left: 40%;
    transform: translate(-50%, -20%);
}
h1{
    text-align: center;
}

.input{
    padding: 7px;
    border: 1px solid #D61C4E;
    border-radius:5px;
    font-size: 15px;
    
    
}

.signInForm{
    display: flex;
    flex-direction: column;
    gap:2px;
    background-color: #4FBDBA;
    height: 630px;
    width: 450px;
    opacity: 0.8;
    padding: 40px;
}
`
export default Registration;