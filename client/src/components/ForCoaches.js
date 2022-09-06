import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import background from "../media/image36.jpg";
import image35 from "../media/image35.jpg";

const ForCoaches = () => {
    const navigate = useNavigate();
    return (
        <>
        <ContainerHeader style={{ backgroundImage: `url(${background})` }}>
            <TextBox>
        <h1>BUILD YOUR DREAM BUSINESS</h1>
        <h3>InShape gives you the tools you need to grow your dream business on your terms.</h3>
        <Button onClick={()=> {navigate("/registration")}}>START MY TRIAL</Button>
        </TextBox>
        <ImageStyle>
            <img src={image35} width="800px" alt="watch" />
        </ImageStyle>
        </ContainerHeader>

        <Box>
        <h2>Features:</h2>
            <BoxOne>
            <BoxTwo>
            <MiniBox>
                <h3>Teams and 1:1</h3>
                <p>Coach 1:1 or group clients into teams for easy program delivery and group communication</p>
            </MiniBox>
            <MiniBox>
                <h3>Video review</h3>
                <p>Easily review and provide feedback on videos sent by your client. Form review from a distance is a breeze!</p>
            </MiniBox>
            <MiniBox>
                <h3>Sell your programs online</h3>
                <p>Tap into the power of the InShape marketplace to sell your programs online.</p>
            </MiniBox>
            </BoxTwo>
            <BoxTwo>
            <MiniBox>
                <h3>Customizable library</h3>
                <p>Create and save your custom exercises, circuits, workouts, and full programs….or use ours to get started quick.</p>
            </MiniBox>
            <MiniBox>
                <h3>Powerful workout builder</h3>
                <p>Build training sessions using exercises, circuits and plain text. Track multi-dimensional feedback on reps, 
                    sets, weight, time, distance, and many more!</p>
            </MiniBox>
            <MiniBox>
                <h3>Built-in exercise library</h3>
                <p>1,300+ movements complete with video instruction and written points of performance 
                    guarantee you never run out of options.</p>
            </MiniBox>
            </BoxTwo>
            </BoxOne>
            <TextBoxTwo>
                <h2>TAKE YOUR DREAM JOB TO THE NEXT LEVEL</h2>
                <p>You got into this profession to serve others. To make an impact. To pursue your passion and find joy doing it. </p>
                    <p>You don't have a job. You have a calling. You want freedom. The flexibility to work when you want, from wherever you want. 
                        To coach on your terms and in your way.  You want to do what you love and love doing it.</p>
                    <ButtonBox>
                    <Button onClick={()=> {navigate("/registration")}}>FREE TRIAL</Button>
                    </ButtonBox>
            </TextBoxTwo>
            <TextBoxTwo>
                <h2>THE TOOLS YOU NEED TO SCALE YOUR BUSINESS</h2>
                <p>We believe in the power of coaching. Whether you call yourself a Trainer…a PT…a Performance Pro…or a Fitness Magician. 
                    It doesn't matter to us.If you're committed to empowering others to feel more, do more, and be more than ever before. 
                    We've got your back, Coach.The InShape toolset is designed to help you scale your coaching business by coaching more athletes, better. </p>
            </TextBoxTwo>
            <TextBoxTwo>
                <h2>COACH IN ANY CONTEXT</h2>
                <p>InShape is the best software for personal trainers, gym owners, and strength coaches. 
                    Our solutions give you superpowers to do more, with less effort. </p>
                    <p>Whether you train clients 1:1, in groups, in the gym or from miles away, InShape arms you with the tools you need to be a true pro.
                        With InShape, coaches of all levels can provide an elite service to their clients, in any setting.</p>
            </TextBoxTwo>
            <TextBoxTwo>
                <h2>SAY "BYE-BYE' TO BYSY WORK</h2>
                <p>Store exercises, circuits, programs, and prescriptions. Write 'em once, use 'em forever. Never do the same thing twice.</p>
                <p>Capture and review data effortlessly. From compliance and progress to online training business data. Quickly see the high level.</p>
                <ButtonBox>
                    <Button onClick={()=> {navigate("/registration")}}>FREE TRIAL</Button>
                    </ButtonBox>
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
min-width: 220px;
max-width: 320px;
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
h1,h3{
    color:#072227;
}
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



export default ForCoaches;