import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const ItemPage = () => {
    const [itemExercise, setItemExercise] = useState(null); 
    const {loading, setLoading} = useContext(CurrentUserContext)

    let navigate = useNavigate();
    let { exercise } = useParams();
    useEffect(() => {
        fetch(`/exercises/exercise/${exercise}`)
        .then((res) => res.json())
        .then((data) => {
            setItemExercise(data.data);
            setLoading(true); 
        });
    }, []);
    

    return (
        <Box>
            <Wrapper>
            {loading && (
                <Container>
                <div className="exercise-image">
                    <img alt="URL of exercise" src={exercise.gifUrl} />
                </div>
                <div className="text-style">
                    <h1>{exercise.name}</h1>
                    <div>
                        <p>Body part: {exercise.bodyPart}</p>
                        <p>Target: {exercise.target}</p>
                        <p>Equipment: {exercise.equipment}</p>
                    </div>                
                    <button>Add to favorites</button>
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

img {
    width: 250px;
    }
    `;
    