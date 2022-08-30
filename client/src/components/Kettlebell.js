import styled from "styled-components";
import image13 from "../media/image13.jpg";

const Kettlebell = () => {
    return (
        <Wrapper>
        <h1>THE #1 KETTLEBELL EXERCISE FOR POSTERIOR CHAIN POWER</h1>
        <ImageStyle>
            <img src={image13} width="1000px" alt="watch" />
        </ImageStyle>
        <Box>
        <TextBox>
            <h2>Why Add Kettlebell Swings to Your Strength Training Program?</h2>
            <p>Kettlebells are an amazing tool to pack in your strength and conditioning arsenal.
                There are so many ways kettlebells can be used in a training regimen, but if I had 
                to pick one exercise I think everyone should do, I would hands-down choose the kettlebell swing.</p>
            <p>Kettlebell swings are a phenomenal exercise that target the entire posterior chain.</p>
            <p>They can be used for power development or as an accessory exercise for conditioning. 
                They also work a myriad of strength qualities simultaneously: grip, dynamic hip hinging, 
                thoracic spine posture, and shoulder packing of the lats. The kettlebell swing can also help 
                correct anterior pelvic tilt issues by patterning pelvic stability with hip extension.</p>
            <p>Kettlebell swings largely target the power-producing muscles of the posterior chain. 
                    Your glutes, hamstrings, lats, core, and spinal stabilizers are all actively working 
                    with this ultimate bang-for-your-buck exercise.</p>
            <p>When performed with heavy weight, the pattern of horizontal hip displacement
                translates perfectly to the skill of explosive acceleration for speed athletes — 
                think Olympic weightlifting, gymnastics, and sprinting. Hip power is essential for so many 
                athletic movements and heavy kettlebell swings will help develop that power output.</p>
            <p>On the conditioning end of the spectrum (lighter weight and higher volume), kettlebell swings
                will work your posterior chain without over-taxing those muscles and taking time away from your 
                running/conditioning work. They're usually just enough to get your lungs fired up in a conditioning workout.</p>
        </TextBox>
        </Box>
        </Wrapper>
        
    );
};
const Wrapper = styled.div`
text-align: center;
`
const ImageStyle = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Box = styled.div`
display: flex;
justify-content: center;
margin-bottom:100px;
`
const TextBox = styled.div`
    
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

export default Kettlebell;