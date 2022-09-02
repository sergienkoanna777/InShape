import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import ItemCard from "./ItemCard";
import Loading from "./Loading";
import image15 from "../media/image15.jpg";


const ListOfBody = () => {
    const {loading, setLoading} = useContext(CurrentUserContext);
    const [list, setList] = useState([
        "back",
        "cardio",
        "chest",
        "lower arms",
        "lower legs",
        "neck",
        "shoulders",
        "upper arms",
        "upper legs",
        "waist"
    ])
    const [bodyPartList, setBodyPartList] = useState(null);
    
    const handleSelectedBodyPart =(value) => {
        console.log(value)
        fetch(`/exercises/bodyPart/${value}`)
            .then((res) => res.json())
            .then((data) => {
                setBodyPartList(data.data); 
            setLoading(true);
        });
    }

    return (
        <>
            <ImageStyle>
            <img src={image15} width="1000px" alt="watch" />
            <SideBar>
            {
                    list.map((item, index) => <button key={index} onClick={() =>{handleSelectedBodyPart(item)}}>{item}</button>)
                }
            </SideBar>
            <CategoryFeedBox>
                {loading ? (
                    
                        bodyPartList.map((exercise) =>{
                            return  <ItemCard key={exercise.id} exercise={exercise}/>
                        })
                    
                ) : (
                <Loading />
                )} 
            </CategoryFeedBox>
            </ImageStyle>
        </>
        );
    };

    const SideBar = styled.div`
    
    `

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
    
    export default ListOfBody;