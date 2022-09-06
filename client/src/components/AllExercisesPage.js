import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import ItemCard from "./ItemCard";
import Loading from "./Loading";
import image15 from "../media/image15.jpg";


const AllExercisesPage = () => {
    const navigate = useNavigate();
    const {loading, setLoading} = useContext(CurrentUserContext)
    const [allExercises, setAllExercises] = useState(null);
    useEffect(() => {
        fetch(`/exercises`)
            .then((res) => res.json())
            .then((data) => {
                setAllExercises(data.data); 
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <ImageStyle>
            <img src={image15} width="1000px" alt="watch" />
            <CategoryFeedBox onClick={()=> {navigate("/itempage")}}>
                {loading ? (
                allExercises.map((exercise) => {
                    return (
                        <ItemCard exercise={exercise} loading={loading} />
                    );
                })
                ) : (
                <Loading />
                )}
            </CategoryFeedBox>
            </ImageStyle>
        </>
        );
    };

    const ImageStyle = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
    
        img {
        width: 100%;
        height: 40%;
        object-fit: cover;
        }
    `;
    const CategoryFeedBox = styled.div`
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        top: 50%;
        max-width: 1400px;
        display: flex;
        justify-content: center;
    `;
    
    
    
    export default AllExercisesPage;