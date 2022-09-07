import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import Loading from "./Loading";
import Button from "./Button";
import image0 from "../media/image0.png";
import background from "../media/image20.jpg";
import ItemCard from "./ItemCard";


const Profile = () => {
    const [userProfile, setUserProfile] = useState({});
    const {loading, setLoading, currentUser,setCurrentUser} = useContext(CurrentUserContext);
    const initialState = {
        age: currentUser?.age,
        weight: currentUser?.weight,
        avatar: currentUser?.avatar,
        description: currentUser?.description
    }
    const [userData, setUserData] = useState(initialState);
    const[display, setDisplay] = useState(true);
    const [status, setStatus] = useState('');
    const [workoutName, setWorkOutName] = useState("");
    const [workoutId, setWorkOutId]= useState("");
    const [description, setDescription] = useState("");
    let { userId } = useParams();
    const updateUserData = (value, name) => {
        setUserData({...userData, [name]:value})
    }
    const [workout, setWorkout] = useState(null);

    const handleuUpdateUserData = (e) => {
        e.preventDefault();
        fetch(`/user/${userId}`,{
            method: "PATCH",
            body: JSON.stringify({
                age:userData.age, 
                weight:userData.weight, 
                avatar:userData.avatar,
                description:userData.description
            }),
            headers: {
                "Content-Type": "application/json",
            },
        } )
        .then((res)=>res.json())
        .then((json)=>{
            if(json.status ===200){
                setDisplay(true);
                window.location.reload();
            }
            else{
                window.alert(json.message)
            }
        }) 
    }

    useEffect(() => {
        fetch(`/user/${userId}`)
        .then(res => res.json())
        .then((data) => {
            setUserProfile(data.data)
            setStatus(data.data.status)
            setLoading(true)
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    const createWorkout = (ev) => {
        ev.preventDefault();

        fetch("/workout", {
            method: "PUT",
            body: JSON.stringify({
                workoutId:workoutId,
                userId:currentUser._id,
                workoutName:workoutName,
                description:description,
                status:status,
                clients:[],
                exercises: []
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res)=>res.json())
        .then((json)=>{
            if(json.status ===201){
                setDisplay(true);
                window.location.reload();
            }
            else{
                window.alert(json.message)
            }
        }) 
    }

    useEffect(() => {
        fetch(`/workout/${currentUser._id}`)
        .then(res => res.json())
        .then(data => {
            setWorkout(data.data.workouts)
        })
        .catch((err) => {
            console.log(err);
        });
    }, [display]);

    return (
        <>
        {
            loading ? (
                <>
                {
                    userProfile.status === "coach" && (
                        <>
                        <StyleHeader style={{ backgroundImage: `url(${background})` }}/>
            <StyledProfile>
                <UserInfo >
                    <img src={image0} alt="avatar" width= "350px"/>
                    <NameStyle>
                    <h1 >{userProfile.name} {userProfile.lastName}</h1>
                    <h2>{userProfile.status}</h2>
                    <Button>Follow me</Button>
                    </NameStyle>
                    
                </UserInfo>
            </StyledProfile>
            <Box>
                <TabsStyle>
                        <div className="tabset">
                            {/* Tab-1 */}
                            <input type="radio" name="tabset" id="tab1" aria-controls="marzen"/>
                            <label htmlFor="tab1">About Me</label>
                            {/* Tab-2 */}
                            {/* <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"/>
                            <label htmlFor="tab2">My clients</label> */}
                            {/* Tab-3 */}
                            <input type="radio" name="tabset" id="tab3" aria-controls="dunkles"/>
                            <label htmlFor="tab3">Favorites exercises</label>
                            {/* Tab-4 */}
                            <input type="radio" name="tabset" id="tab4" aria-controls="dunk"/>
                            <label htmlFor="tab4"> Create new workout</label>
                        
                            <div className="tab-panels">
                                <section id="marzen" className="tab-panel">
                                <h2>About Me</h2>
                                    {
                                        display &&(
                                            <>
                                                <h3>Age: {userProfile.age}</h3>
                                                <h3>Weight: {userProfile.weight}</h3>
                                                <p>About me: {userProfile.description} </p>
                                                <Button onClick={()=> {setDisplay(false)}}>Update</Button>
                                            </>
                                        )
                                    }
                                    {
                                        !display &&(
                                                <form onSubmit={handleuUpdateUserData}>
                                                    <input 
                                                        type = "text"
                                                        name = "age"
                                                        placeholder={`age: ${currentUser.age}`}
                                                        onChange = {(e)=>updateUserData(e.target.value, e.target.name)}
                                                    />
                                                    <input 
                                                        type = "text"
                                                        name = "weight"
                                                        placeholder={`weight: ${currentUser.weight}`}
                                                        onChange = {(e)=>updateUserData(e.target.value, e.target.name)}
                                                    />
                                                    <input 
                                                        type = "text"
                                                        name = "description"
                                                        placeholder="About me"
                                                        onChange = {(e)=>updateUserData(e.target.value, e.target.name)}
                                                    />
                                                    <Button type = "submit">Save changes</Button>
                                                </form>
                                                
                                            )
                                        }
                                </section>
                                {/* <section id="rauchbier" className="tab-panel">
                                    <h2>My clients</h2>
                                        <div>

                                        </div>
                                </section> */}
                                <section id="dunkles" className="tab-panel">
                                    <h2>Favorites exercises</h2>
                                        {
                                            currentUser.favorites.map((exercise) =>{
                                                return(
                                                    <div className="itemposition">
                                                        <h2>Favorites exercises</h2>
                                                        <div className="itemstyle">
                                                            <ItemCard key={exercise.id} exercise={exercise}/>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                </section>
                                <section id="dunk" className="tab-panel">
                                {
                                        // currentUser.addExercise.map((exercise) =>{
                                        //     return(
                                        //         <div className="itemposition">
                                        //             <h2>Favorites exercises</h2>
                                        //             <div className="itemstyle">
                                        //                 <ItemCard key={exercise.id} exercise={exercise}/>
                                        //             </div>
                                        //         </div>
                                        //     )
                                        // })
                            
                                <form onSubmit={createWorkout}>
                                    <div className="itemposition">
                                        <h2>Create new workout</h2>
                                            <div className="itemstyle">
                                                {/* <ItemCard key={exercise.id} exercise={exercise}/> */}
                                                    <input type= "text" 
                                                        placeholder="Workout name"
                                                        value={workoutName}
                                                        onChange = {(e)=>setWorkOutName(e.target.value)}/>
                                                    <input 
                                                    type= "text"
                                                    placeholder="Description"
                                                    value={description}
                                                        onChange = {(e)=>setDescription(e.target.value)}/>
                                                    
                                                    <Button>Create</Button>
                                            </div>

                                    </div>
                                    
                                </form>
                                
                                }  
                                <div>
                                    {
                                    workout && workout.map ((exercise) =>{
                                                return(
                                                    <div>
                                                        <h2>{exercise.workoutName}</h2>
                                                        <h2>{exercise.description}</h2>
                                                        <div>
                                                            <ItemCard key={exercise.id} exercise={exercise}/>
                                                        </div>
                                                        <div></div>
                                                    </div>
                                                )
                    
                                            })
                
                }
                                    </div>       
                                </section>
                            </div>
                        </div>
                    </TabsStyle>
            </Box>
            </>
                    )
                }
                {
                    userProfile.status === "athlet" && (
                        <>
                        <StyleHeader style={{ backgroundImage: `url(${background})` }}/>
            <StyledProfile>
                <UserInfo >
                    <>
                    <img src={image0} alt="avatar" width= "250px"/>
                    </>
                    <NameStyle>
                    <h1 >{userProfile.name} {userProfile.lastName}</h1>
                    <h2>{userProfile.status}</h2>
                    </NameStyle>
                </UserInfo>
            </StyledProfile>

            <Box>
                <TabsStyle>
                    <div className="tabset">
                        {/* Tab-1 */}
                        <input type="radio" name="tabset" id="tab1" aria-controls="marzen"/>
                        <label htmlFor="tab1">About Me</label>
                        {/* Tab-2 */}
                        <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier"/>
                        <label htmlFor="tab2">Favorites exercises</label>
                        {/* Tab-3 */}
                        <input type="radio" name="tabset" id="tab3" aria-controls="dunkles"/>
                        <label htmlFor="tab3">Create new workout</label>
                    
                        <div className="tab-panels">
                            <section id="marzen" className="tab-panel">
                            <h2>About Me</h2>
                                {
                                    display &&(
                                        <>
                                            <h3>Age: {userProfile.age}</h3>
                                            <h3>Weight: {userProfile.weight}</h3>
                                            <p>About me: {userProfile.description} </p>
                                            <Button onClick={()=> {setDisplay(false)}}>Update</Button>
                                        </>
                                    )
                                }
                                {
                                    !display &&(
                                            <form onSubmit={handleuUpdateUserData}>
                                                <input 
                                                    type = "text"
                                                    name = "age"
                                                    placeholder={`age: ${currentUser.age}`}
                                                    onChange = {(e)=>updateUserData(e.target.value, e.target.name)}
                                                />
                                                <input 
                                                    type = "text"
                                                    name = "weight"
                                                    placeholder={`weight: ${currentUser.weight}`}
                                                    onChange = {(e)=>updateUserData(e.target.value, e.target.name)}
                                                />
                                                <input 
                                                    type = "text"
                                                    name = "description"
                                                    placeholder="About me"
                                                    onChange = {(e)=>updateUserData(e.target.value, e.target.name)}
                                                />
                                                <Button type = "submit">Save changes</Button>
                                            </form>
                                            
                                        )
                                    }
                            </section>
                            <section id="rauchbier" className="tab-panel">
                                <h2>Favorites exercises</h2>
                                    {
                                        currentUser.favorites.map((exercise) =>{
                                            return(
                                                <div className="itemposition">
                                                    <h2>Favorites exercises</h2>
                                                    <div className="itemstyle">
                                                        <ItemCard key={exercise.id} exercise={exercise}/>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                            </section>
                            <section id="dunkles" className="tab-panel">
                                <h2>Create new workout</h2>
                                    <input type= "text" 
                                        placeholder="Workout name"
                                        onChange = {(e)=>updateUserData(e.target.value, e.target.name)}/>
                                    <input/>
                                    <Button>Create</Button>
                            </section>
                        </div>
                    </div>
                </TabsStyle>
            </Box>
            </>
        )
    }
        </>
        ):(
            <Loading/>
        )
    }
            
    </>
    )
}

const StyleHeader = styled.div`
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
`;

const UserInfo = styled.div`
    display: flex;
    gap:25px;
    h1{
        color:#fff;
        font-size:30px;
    }
`;

const NameStyle =styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    h3{
        font-size: 35px;
    }
`;

const StyledProfile = styled.div`
    margin: -300px 250px 0px;
    display: flex;
    flex-direction: column;
`

const Box = styled.div`
    font-family: "Open Sans";
    background: #072227;
    line-height: 2em;

`
const TabsStyle = styled.div`
margin-left: 100px;
    .tabset > input[type="radio"] {
        position: absolute;
        left: -400vw;
    }

    .tabset .tab-panel {
        display: none;
    }

    .tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,
    .tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),
    .tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),
    .tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),
    .tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),
    .tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {
    display: block;
    }

.tabset > label {
    position: relative;
    display: inline-block;
    padding: 15px 15px 25px;
    border: 1px solid transparent;
    border-bottom: 0;
    cursor: pointer;
    font-weight: 800;
    font-size: 30px;
    }

    .tabset > label::after {
    content: "";
        position: absolute;
        left: 15px;
        bottom: 10px;
        width: 42px;
        height: 8px;
        background: #8d8d8d;
        }

    .tabset > label:hover,
    .tabset > input:focus + label {
    color: #06c;
    }

    .tabset > label:hover::after,
    .tabset > input:focus + label::after,
    .tabset > input:checked + label::after {
        background: #06c;
    }

    .tabset > input:checked + label {
        border-color: #ccc;
        border-bottom: 1px solid #fff;
        margin-bottom: -1px;
    }

    .tab-panel {
        padding: 30px 0;
        border-top: 1px solid #ccc;
        font-size: 25px;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    .tabset {
        max-width: 395em;
    }

    .itemposition{
        display: flex;
        flex-wrap: wrap;

    }
    .itemstyle{
        max-width:280px;
        max-height:400px;
        margin-left: 50px;
    }
    
    input{
        padding: 15px;
        font-size: 20px;
    }
`

export default Profile;