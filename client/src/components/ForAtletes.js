import styled from "styled-components";
import image2 from "../media/image2.jpg";
import Button from "./Button";

const ForAtletes = () => {
    return (
        <>
        <ImageStyle>
            <>
        <p>THE BEST PERFORMANCE FITNESS APP</p>
        </>
            <img src={image2} width="800px" alt="watch" />
            
        </ImageStyle>
        <Box>
            <TextBox>
                <h1>Next level training library</h1>
                <p>InShape library is built to help you get started. 
                    Your library houses all of your workouts, programs, and exercises in one place.
                    1,300 built in exercises help you build any workout you can dream of.</p>
                    <p>Free built-in sessions designed for any goal and difficulty make it easy to get started.</p>
                    <p>Ready for more? Choose from our free basic programs or buy a program from a world-class coach.</p>
            </TextBox>
            <Button>Hello</Button>
        </Box>
        </>
    );
};

const ImageStyle = styled.div`
    width: 80%;
    height: 90vh;
    display: flex;
    /* position: relative; */

    img {
        width: 80%;
        height: 60%;
        object-fit: cover;
    }
`
const Box = styled.div`
display: flex;
justify-content: center;
margin-top:-300px;
`
const TextBox = styled.div`
    margin-bottom:-400px;
    border-radius: 4px #4FBDBA;
    box-shadow: 8px 10px 25px 0 rgba(128, 128, 128, 0.22);
    min-width: 320px;
    max-width: 1200px;
    margin: 36px;
    padding: 4px 32px 32px;
    p{
        font-size:20px;
        line-height: 2;
    }
`;

export default ForAtletes;