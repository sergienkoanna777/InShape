import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import Loading from "./Loading";
import image0 from "../media/image0.png";
import background from "../media/image20.jpg";


const Profile = () => {
const [userProfile, setUserProfile] = useState({});
const {loading, setLoading} = useContext(CurrentUserContext);
    let { userId } = useParams();

    useEffect(() => {
        fetch(`/user/${userId}`)
        .then(res => res.json())
        .then((data) => {
            setUserProfile(data.data)
            setLoading(true)
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

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
                    </NameStyle>
                </UserInfo>
            </StyledProfile>

            <Box>
                <div class="wrapper">
                    <div class="tabs">
                        <div class="tab">
                            <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch"/>
                            <label for="tab-1" class="tab-label">My clients</label>
                            <div class="tab-content">My father had a small estate in Nottinghamshire: I was the third of five sons. He sent me to Emanuel College in Cambridge at fourteen years old, where I resided three years, and applied myself close to my studies; but the charge of maintaining me, although I had a very scanty allowance, being too great for a narrow fortune, I was bound apprentice to Mr. James Bates, an eminent surgeon in London, with whom I continued four years. </div>
                        </div>
                        <div class="tab">
                            <input type="radio" name="css-tabs" id="tab-2" class="tab-switch"/>
                            <label for="tab-2" class="tab-label">All workouts programs</label>
                            <div class="tab-content">My father now and then sending me small sums of money, I laid them out in learning navigation, and other parts of the mathematics, useful to those who intend to travel, as I always believed it would be, some time or other, my fortune to do. </div>
                        </div>
                        <div class="tab">
                            <input type="radio" name="css-tabs" id="tab-3" class="tab-switch"/>
                            <label for="tab-3" class="tab-label">Favorites exercises</label>
                            <div class="tab-content">When I left Mr. Bates, I went down to my father: where, by the assistance of him and my uncle John, and some other relations, I got forty pounds, and a promise of thirty pounds a year to maintain me at Leyden: there I studied physic two years and seven months, knowing it would be useful in long voyages.</div>
                        </div>
                        <div class="tab">
                            <input type="radio" name="css-tabs" id="tab-4" class="tab-switch"/>
                            <label for="tab-4" class="tab-label">Creat new workout</label>
                            <div class="tab-content">When I left Mr. Bates, I went down to my father: where, by the assistance of him and my uncle John, and some other relations, I got forty pounds, and a promise of thirty pounds a year to maintain me at Leyden: there I studied physic two years and seven months, knowing it would be useful in long voyages.</div>
                        </div>
                    </div>
                </div>
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
                <div class="wrapper">
                    <div class="tabs">
                        <div class="tab">
                            <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch"/>
                            <label for="tab-1" class="tab-label">My current workout</label>
                            <div class="tab-content">My father had a small estate in Nottinghamshire: I was the third of five sons. He sent me to Emanuel College in Cambridge at fourteen years old, where I resided three years, and applied myself close to my studies; but the charge of maintaining me, although I had a very scanty allowance, being too great for a narrow fortune, I was bound apprentice to Mr. James Bates, an eminent surgeon in London, with whom I continued four years. </div>
                        </div>
                        <div class="tab">
                            <input type="radio" name="css-tabs" id="tab-2" class="tab-switch"/>
                            <label for="tab-2" class="tab-label">All my workouts programs</label>
                            <div class="tab-content">My father now and then sending me small sums of money, I laid them out in learning navigation, and other parts of the mathematics, useful to those who intend to travel, as I always believed it would be, some time or other, my fortune to do. </div>
                        </div>
                        <div class="tab">
                            <input type="radio" name="css-tabs" id="tab-3" class="tab-switch"/>
                            <label for="tab-3" class="tab-label">Favorites exercises</label>
                            <div class="tab-content">When I left Mr. Bates, I went down to my father: where, by the assistance of him and my uncle John, and some other relations, I got forty pounds, and a promise of thirty pounds a year to maintain me at Leyden: there I studied physic two years and seven months, knowing it would be useful in long voyages.</div>
                        </div>
                        <div class="tab">
                            <input type="radio" name="css-tabs" id="tab-4" class="tab-switch"/>
                            <label for="tab-4" class="tab-label">Creat new workout</label>
                            <div class="tab-content">When I left Mr. Bates, I went down to my father: where, by the assistance of him and my uncle John, and some other relations, I got forty pounds, and a promise of thirty pounds a year to maintain me at Leyden: there I studied physic two years and seven months, knowing it would be useful in long voyages.</div>
                        </div>
                    </div>
                </div>
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
    color: #ecf0f1;
    line-height: 1.618em;

    .wrapper {
    max-width: 90rem;
    width: 100%;
    margin: 0 auto;
    }
    .tabs {
    position: relative;
    margin: 3rem 0;
    background: #4FBDBA;
    height: 14.75rem;
    }
    .tabs::before,
    .tabs::after {
    content: "";
    display: table;
    }
    .tabs::after {
    clear: both;
    }
    .tab {
    float: left;
    }
    .tab-switch {
    display: none;
    }
    .tab-label {
    position: relative;
    display: block;
    line-height: 2em;
    height: 3em;
    padding: 0 1.618em;
    background: #4FBDBA;
    border-right: 0.125rem solid #4FBDBA;
    color: #fff;
    font-size: 25px;
    cursor: pointer;
    top: 0;
    transition: all 0.25s;
    }
    .tab-label:hover {
    top: -0.25rem;
    transition: top 0.25s;
    }
    .tab-content {
    height: 12rem;
    position: absolute;
    z-index: 1;
    top: 2.75em;
    left: 0;
    padding: 1.618rem;
    background: #fff;
    color: #2c3e50;
    border-bottom: 0.25rem solid #bdc3c7;
    opacity: 0;
    transition: all 0.35s;
    }
    .tab-switch:checked + .tab-label {
    background: #fff;
    color: #2c3e50;
    border-bottom: 0;
    border-right: 0.125rem solid #fff;
    transition: all 0.35s;
    z-index: 1;
    top: -0.0625rem;
    }
    .tab-switch:checked + label + .tab-content {
    z-index: 2;
    opacity: 1;
    transition: all 0.35s;
}
`
export default Profile;