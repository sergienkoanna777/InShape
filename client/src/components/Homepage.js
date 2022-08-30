import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import VideoPage from "./VideoPage";
import image2 from "../media/image2.jpg";
import image3 from "../media/image3.jpg";
import image4 from "../media/image4.jpg";
import image5 from "../media/image5.jpg";
import image6 from "../media/image6.jpg";
import image7 from "../media/image7.jpg";
const Homepage = () => {
    const navigate = useNavigate();
    return(
        <>
            <VideoPage/>
                <TextBox>
                    <h1>BE YOUR BEST</h1>
                        <p>InShape isn't just the best strength and cardio training app around.
                        We're a human performance company. We exist to help you Be Your Best.
                        </p>
                        <p>Our tools are designed to give you the most immersive training experience at home.</p>
                        <p>Whether you are a garage gym athlete programming for yourself, 
                        a personal trainer looking to take your business to new heights,
                        or an athlete looking for a guide on your training journey, welcome to the family. </p>
                        <p>Let's smash your goals together!</p>
                </TextBox>
                <>
                    <Container>
                        <ItemCategory>
                            <Visual>
                            <img onClick={()=>(navigate("/forcoaches"))} src={image3} width="600px" alt="watch" />
                            <div className="text">
                                <div className="nameItems">
                                <h3>For Coaches</h3>
                                </div>
                            </div>
                            </Visual>
                        </ItemCategory>
                        <ItemCategory>
                            <Visual>
                            <img  onClick={()=>(navigate("/foratletes"))} src={image4} width="600px" alt="watch" />
                            <div className="text">
                                <div className="nameItems">
                                <h3>For Atletes</h3>
                                </div>
                            </div>
                            </Visual>
                        </ItemCategory>
                </Container>
                <HomepageBox>
                    <img src={image2} width="1000px" alt="watch" />
                </HomepageBox>

            <Box>
                <BoxItem>
                    <img onClick={()=>(navigate("/kettlebell"))} src={image5} width="500px" alt="watch"/>
                    <p>THE #1 Kettlebelle exercise for posterior chain power</p>
                </BoxItem>
                <BoxItem>
                    <img onClick={()=>(navigate("/plateau"))} src={image7} width="500px" alt="watch"/>
                    <p>3 Effective Ways to Break Your Plateau And Build More Muscle</p>
                </BoxItem>
                <BoxItem>
                    <img onClick={()=>(navigate("/tempo"))} src={image6} width="500px" alt="watch"/>
                    <p>Understanding Tempo Training For Maximum Strength Gains</p>
                </BoxItem>
            </Box>
        </>
        </>
    )
}

const Box = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom:150px;
`
const BoxItem = styled.div`
    display: flex;
    flex-direction:column;
    img {
    background: #fafafa;
    border-radius: 4px;
    box-shadow: 10px 10px 10px 0 rgba(128, 128, 128, 0.44);
}
img:hover {
    box-shadow: 0 0 45px 2px #1cd6ce;
    opacity: 70%;
}
p{
    font-size: 20px;
}
`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    text-align: center;
    margin: -28vh auto 0 auto;
    p {
        font-size: 20px;
        margin: 13px;
    }
`;


const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

const HomepageBox = styled.div`
    width: 100%;
    height: 100vh;
    img {
        margin-top: 150px;
        width: 100%;
        height: 60%;
        object-fit: cover;
}
`;

const ItemCategory = styled.div`
    width: 25%;
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 24px;
    transform: translate(0px, 0px);
    margin: 20px;

img {
    background: #fafafa;
    border-radius: 4px;
    box-shadow: 10px 10px 10px 0 rgba(128, 128, 128, 0.44);
}
img:hover {
    box-shadow: 0 0 45px 2px #1cd6ce;
    opacity: 70%;
}
`;

const Visual = styled.div`
.text {
    color: #fff;
    transition: 0.2s ease;
    position: absolute;
    text-align: center;
    left: 70%;
    top: 80%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
h3{
    font-size: 60px;
    
}
.nameItems {
    letter-spacing: 0.5em;
    line-height: 1;
    p {
        font-size: 50px;
    }
}
`;
export default Homepage;