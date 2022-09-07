import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import Button from "./Button";

const ItemPage = () => {
    const [itemExercise, setItemExercise] = useState(null); 
    const {loading, setLoading, currentUser} = useContext(CurrentUserContext)
    const [description, setDescription] = useState("")

    let navigate = useNavigate();
    let { exercise } = useParams();
    useEffect(() => {
        fetch(`/exercises/exercise/${exercise}`)
        .then((res) => res.json())
        .then((data) => {
            setItemExercise(data.data);
            setLoading(true); 
            
        });
    }, [exercise]);
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleAddToFavorits = (e) =>{
        e.preventDefault();
        fetch("/favorites",{
            method: "PUT",
            body: JSON.stringify({
                bodyPart:itemExercise.bodyPart, 
                equipment:itemExercise.equipment, 
                gifUrl:itemExercise.gifUrl, 
                id:itemExercise.id, 
                name:itemExercise.name,
                target:itemExercise.target, 
                description:description, 
                userId:currentUser._id
            }),
            headers: {
                "Content-Type": "application/json",
            },
        } )
        .then((res)=>res.json())
        .then((json)=>{
            if(json.status ===201){
                window.location.reload();
            }
            else{
                window.alert(json.message)
            }
        }) 
    }

    const handleAddExerciseToWorkout = (e) =>{
        e.preventDefault();
        fetch("/addExercise",{
            method: "PUT",
            body: JSON.stringify({
                bodyPart:itemExercise.bodyPart, 
                equipment:itemExercise.equipment, 
                gifUrl:itemExercise.gifUrl, 
                id:itemExercise.id, 
                name:itemExercise.name,
                target:itemExercise.target, 
                description:description, 
                userId:currentUser._id
            }),
            headers: {
                "Content-Type": "application/json",
            },
        } )
        .then((res)=>res.json())
        .then((json)=>{
            if(json.status ===201){
                window.location.reload();
            }
            else{
                window.alert(json.message)
            }
        }) 
    }


    return (
        <Box>
            <Wrapper>
            {loading && (
                <Container>
                <div className="exercise-image">
                    { itemExercise.gifUrl && <img alt="URL of exercise" src={itemExercise.gifUrl} />}

                </div>
                <div className="text-style">
                    <h1>{itemExercise.name}</h1>
                    <div>
                        <p>Body part: {itemExercise.bodyPart}</p>
                        <p>Target: {itemExercise.target}</p>
                        <p>Equipment: {itemExercise.equipment}</p>
                        <input
                            type = "text" value = {description} placeholder = "Enter description" onChange={handleDescription}
                        />
                    </div> 
                        <ButtonStyle>
                            <Button onClick={handleAddToFavorits} >Add to favorites</Button>
                            <Button onClick={handleAddExerciseToWorkout}>Add a new workout</Button>
                        </ButtonStyle>
                </div>
                </Container>
            )}
            </Wrapper>
        </Box>
        );
    };
    
export default ItemPage;

const Box = styled.div`
    height: 90vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Container = styled.div`
display: flex;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    font-family: sans-serif;
    text-align: center;
    line-height: 1;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    max-width: auto;
    max-height: auto;
    padding: 50px 60px;
`;

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 10;
    gap: 50px;

    .text-style{
        font-size: 30px;
    }

.exercise-image {
    width: 250px;
    }

    img{
        width: 350px;
    }

    input{
        padding: 30px;
        margin: 15px;
    }
    `;
    
    const ButtonStyle = styled.div`
    display: flex;
    margin: 15px;
    `
    