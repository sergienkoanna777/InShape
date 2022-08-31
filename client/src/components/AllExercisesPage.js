import styled from "styled-components";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Loading from "./Loading";
import image15 from "../media/image15.jpg";


const AllExercisesPage = (props) => {
    const [allExercises, setAllExercises] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch(`/exercises`)
            .then((res) => res.json())
            .then((data) => {
                setAllExercises(data.data); 
            setLoading(true);
            props.setLoading(true);
        });
    }, []);
    return (
        <>
            <ImageStyle>
            <img src={image15} width="1000px" alt="watch" />
            <CategoryFeedBox>
                {loading ? (
                allExercises.map((exercise) => {
                    return (
                    <ItemProfile>
                        <ItemCard exercise={exercise} loading={props.loading} />
                    </ItemProfile>
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
    
    const ItemProfile = styled.div`
        display: flex;
        background: white;
        box-shadow: 10px 10px 8px 0 rgba(128, 128, 128, 0.44);
        gap: 20px;
        border-radius: 20px;
        margin: 30px;
        border: none;
        font-size: 20px;
        image-resolution: unset;
    
        :hover {
        box-shadow: 0 0 15px 1px #2b4865;
        opacity: 70%;
        }
    `;
    
    export default AllExercisesPage;