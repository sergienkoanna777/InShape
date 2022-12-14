import styled from "styled-components";
import { useState, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";
import Loading from "./Loading";
import background from "../media/image27.jpg";


const ListOfTarget = () => {
    const navigate = useNavigate();
    const {loading, setLoading} = useContext(CurrentUserContext);
    const [list, setList] = useState([
        "abductors",
        "abs",
        "adductors",
        "biceps",
        "calves",
        "cardiovascular system",
        "delts",
        "forearms",
        "glutes",
        "hamstrings",
        "lats",
        "levator scapulae",
        "pectorals",
        "quads",
        "serratus anterior",
        "spine",
        "traps",
        "triceps",
        "upper back"
    ])
    const [bodyPartTarget, setBodyPartTarget] = useState(null);
    
    const handleSelectedBodyPartTarget =(value) => {
        console.log(value)
        fetch(`/exercises/target/${value}`)
            .then((res) => res.json())
            .then((data) => {
                setBodyPartTarget(data.data); 
            setLoading(true);
        });
    }

    return (
            <ImageStyle  style={{ backgroundImage: `url(${background})`}}>
                <Box>
                    <SideBar>
                    {
                            list.map((item, index) => <button className="btn" key={index} onClick={() =>{handleSelectedBodyPartTarget(item)}}>{item}</button>)
                        }
                    </SideBar>
                    <CategoryFeedBox>
                        {loading ? (
                            
                                bodyPartTarget.map((exercise) =>{
                                    return  <ItemCard key={exercise.id} exercise={exercise}/>
                                })
                            
                        ) : (
                        <Loading />
                        )} 
                    </CategoryFeedBox>
                </Box>
            </ImageStyle>
        );
    };

const Box = styled.div`
    display: flex;
`
const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 25%;
    left: 5%;
    gap: 20px;
    border-radius: 20px;
    border: none;

    .btn{
        border-radius: 10px;
        border: none;
        padding: 15px;
        font-size: 20px;
        text-transform: uppercase;
        box-shadow: 10px 10px 8px 0 rgba(128, 128, 128, 0.44);
    }
    .btn:hover {
        box-shadow: 0 0 15px 2px #00FFDD;
        opacity: 90%;
    }
    `
const CategoryFeedBox = styled.div`
    display: flex;
    position: absolute;
    top: 45%;
    left: 25%;
    flex-wrap: wrap;
`;

const ImageStyle = styled.div`
height: 30vh;
width: 100%;
background-position-y: -40ch;
background-repeat: no-repeat;
background-size: cover;
`;

export default ListOfTarget;