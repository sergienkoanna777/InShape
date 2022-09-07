import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import background from "../media/image30.jpg";
import image2 from "../media/image2.jpg";
import image31 from "../media/image31.png";
import image32 from "../media/image32.png";
import image33 from "../media/image33.png";

const ForAtletes = () => {
    const navigate = useNavigate();
    return (
        <>
        <ContainerHeader style={{ backgroundImage: `url(${background})` }}>
            <TextBox>
        <h1>THE BEST PERFORMANCE FITNESS APP</h1>
        <h3>InShape - is fast and intuitive app that lets you define your goals and chase athletic greatness.</h3>
        <Button onClick={()=> {navigate("/registration")}}>Join Us!</Button>
        </TextBox>
        <ImageStyle>
            <img src={image2} width="800px" alt="watch" />
        </ImageStyle>
        </ContainerHeader>

        <Box>
        <h2>Train on your terms:</h2>
            <BoxOne>
            <BoxTwo>
            <MiniBox>
                <h3>Train anywhere</h3>
                <p>Don’t let travel get in the way of your training. Your programming, your coach, and your training data is right in your pocket. No matter 
                    where you're training, TrainHeroic is by your side.</p>
            </MiniBox>
            <MiniBox>
                <h3>Control your calendar</h3>
                <p>View your upcoming and past training sessions, move your training when something comes up, own your training.</p>
            </MiniBox>
            </BoxTwo>
            <BoxTwo>
            <MiniBox>
                <h3>Tailor your training</h3>
                <p>Prefer to start your training week on Monday instead of Sunday? 
                    Customize your training profile and train your way.</p>
            </MiniBox>
            <MiniBox>
                <h3>Built-in exercise library</h3>
                <p>1,300+ movements complete with video instruction and written points of performance 
                    guarantee you never run out of options.</p>
            </MiniBox>
            </BoxTwo>
            </BoxOne>
            <TextBoxTwo>
                <h2>Next level training library</h2>
                <p>InShape library is built to help you get started. 
                    Your library houses all of your workouts, programs, and exercises in one place.
                    1,300 built in exercises help you build any workout you can dream of.</p>
                    <p>Free built-in sessions designed for any goal and difficulty make it easy to get started.</p>
                    <p>Ready for more? Choose from our free basic programs or buy a program from a world-class coach.</p>
                    <ButtonBox>
                    <Button>Join Us!</Button>
                    </ButtonBox>
            </TextBoxTwo>
            <TextBoxTwo>
            <h2>If you want a guaranteed result, choose one of our coach!</h2>
            <FotoBox>
                <FotoBoxTwo>
                    <img className="coach" onClick={()=> {navigate("/profilebrian")}} src={image31} width="300px" alt="watch" />
                    <h3>Brian Johnson</h3>
                </FotoBoxTwo>
                <FotoBoxTwo>
                <img className="coach" onClick={()=> {navigate("profilesarah")}} src={image32} width="300px" alt="watch" />
                <h3>Sarah Smith</h3>
                    </FotoBoxTwo>
                <FotoBoxTwo>
                    <img className="coach" onClick={()=> {navigate("/profileken")}} src={image33} width="300px" alt="watch" />
                    <h3>Ken Mitchell</h3>
                </FotoBoxTwo>
            </FotoBox>
            </TextBoxTwo>
        </Box>
        </>
    );
};

const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-around;
    height: 70vh;
    background-position-y: -25ch;
    background-repeat: no-repeat;
    background-size: cover;
    Button{
        background-color: #00FFDD;
    }
    
`
const BoxOne = styled.div`
display: flex;
flex-direction: column;

`
const BoxTwo = styled.div`
display: flex;

`
const MiniBox =styled.div`
display: flex;
flex-direction: column;
margin: 20px 50px;
padding:30px;
min-width: 320px;
max-width: 420px;
background-color: #35858B;
font-size: 20px;
h3{
    font-size: 25px;
    background-color: #D61C4E;
}
`
const TextBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const ImageStyle = styled.div`
    width: 50%;
    display: flex;

    img {
        width: 100%;
        height: 70%;
        object-fit: cover;
        margin-top: 60px;
    }
`
const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h2{
    font-size: 35px;
    background-color: #D61C4E;
    text-align: center;
}
Button{
    background-color: #35858B;
    display: flex;
    
}
`
const ButtonBox = styled.div`
display: flex;
justify-content: center;
`
const TextBoxTwo = styled.div`
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
const FotoBox = styled.div`
    display: flex;
    
`

const FotoBoxTwo = styled.div`
display: flex;
flex-direction: column;
    margin: 38px;
    text-align: center;
    .coach:hover {
        border-radius:150px;
        box-shadow: 0 0 45px 2px #1cd6ce;
        opacity: 70%;
}
    h3{
        font-size: 25px;
    }
`

export default ForAtletes;