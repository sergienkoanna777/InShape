import styled from "styled-components";
import image28 from "../media/image28.jpg";

const Tempo = () => {
    return (
        <Wrapper>
            <h1>UNDERSTANDING TEMPO TRAINING FOR MAXIMUM STRENGTH GAINS</h1>
            <ImageStyle>
                <img src={image28} alt="body" />
            </ImageStyle>
            <Box>
                <TextBox>
                    <p>Hitting a plateau with your strength gains? Not seeing the muscle growth you thought you would?
                        Or just getting plain bored in the gym? Using tempo training in your current program is a great way 
                        to spice up your workouts by challenging your weaknesses and improving your form.</p>
                        <h2>Tempo Isn't Just for the Dance Floor</h2>
                    <p>What if I told you that tempo is just as important in the weight room as it is on the dance floor? 
                        It may not be as sexy as a rumba or a slow merengue, but learning to methodically control your movements through 
                        each phase of your lift can get you both seriously sore and seriously strong. Tempo work also improves your form, 
                        creates a powerful mind-muscle connection, strengthens connective tissues, and reduces risk of injury.</p>
                    <p>Progressive overload is the guiding principle of strength training.</p>
                    <p>If you want to get bigger, better, stronger (don’t we all?), you have to change things up in your programming and make 
                        sure that your workouts become more challenging over time.</p>
                    <p>Most people assume that progressive overload is as simple as throwing a little more weight on the bar each training period, 
                        increasing rep volume, or decreasing rest time. Tempo is usually last on the list of variables that coaches employ, but it's one 
                        of the simplest ways to simultaneously make training more challenging and time-efficient.</p>
                        <h2>What Is Tempo Training?</h2>
                    <p>Tempo training is the practice of modifying the speed of movement for an exercise.</p>
                    <p>You’re actually always using tempo when you lift, but tempo training requires that you track and
                        modify the tempo patterns that you naturally groove into when performing exercises.</p>
                    <p>Programming specific tempo ratios into your workouts allows you to precisely dictate the time under tension (TUT),
                            which is the length of time that the muscle fibers are straining during a given movement.</p>
                    <p>By manipulating the amount of time you spend during the more difficult part of a lift (generally the eccentric portion – we'll 
                                get to that!), you can create the stimulus necessary for real strength gains.</p>
                </TextBox>
            </Box>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    h1,h2{
        text-align:center;
    }

    h2{
        background-color:#35858B;
    }
`
const ImageStyle = styled.div`
    width: 100%;
    height: 60vh;
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

export default Tempo;