import styled from "styled-components";
import image29 from "../media/image29.jpg";

const Plateau = () => {
    return (
        <Wrapper>
            <h1>3 EFFECTIVE WAYS TO BREAK YOUR PLATEAU AND BUILD MORE MUSCLE</h1>
            <ImageStyle>
                <img src={image29} alt="body" />
            </ImageStyle>
            <Box>
                <TextBox>
                    <p>You started a strength program and saw great results at first. But now you're not seeing that same improvement, 
                        and you're struggling to find motivation to keep going. Fortunately, you can fix this problem and get excited about 
                        the gym again by including these three simple strategies in your weightlifting routine.</p>
                        <h2>Rediscover Your Love & Motivation For the Gym</h2>
                    <p>If you have a strength program you're working through, don't be too surprised when your progress stalls and your numbers stagnate. 
                        It's normal, and it happens to most athletes at some point.</p>
                    <p>You're not sure what to do next and you're ready to jump ship on your current program after weeks of little progress.
                        Sound familiar? We've ALL been there. Believe me.</p>
                    <p>It's easy to think about doing something complicated to get out of your rut, but the key to your success is progressive overload. 
                        To get results, you need to find strategies that allow you to continue creating the stimulus that prompts your body to adapt.</p>
                    <p>The problem is, it's easy to get stuck at the same weight or the same volume (sets x reps x weight lifted) for extended periods of time. 
                        You might never realize you need to push your body harder to adapt beyond where you've already been.</p>
                    <p>One strategy to break through this rut is to vary the rep scheme and intensity (weight), but I suggest three other strategies 
                        to break your plateau and increase your overall strength.</p>
                    <h2>Add Density Sets to Increase Your Overall Workload</h2>
                    <p>Density sets use a specific time to dictate how long you're working. Typically, you'll pick 1-2 exercises, set a clock for a programmed 
                        amount of time, then complete as many sets of those two exercises as possible.</p>
                    <p>Density sets are an easy way to increase the overall amount of work on a particular exercise.</p>
                    <p>Depending on the time, most people complete more sets of a given exercise than if they were doing a traditional set scheme. 
                        Who doesn't work faster with a clock ticking in the background?</p>
                    <h2>Do “Every Minute on the Minute (EMOM)” Workouts for Maximum Muscle Growth </h2>
                    <p>EMOM workouts involve picking an exercise or a rotation of exercises and performing a programmed amount of repetitions on the top 
                        of every minute for a set amount of time. Let's say you're doing a 10 minute EMOM of 3 reps bench press at a moderate-heavy weight.
                        You would start the clock, perform three reps, rest for the remainder of the minute, then repeat until 10 minutes is up.</p>
                    <p>Without going into a full-on science lecture, we need a challenging amount of weight to recruit the maximum amount of muscle fibers
                        to get the job done. This recruitment ultimately forces the body to adapt and stimulates muscle growth.</p>
                    <p>With EMOMs, fatigue grows as you move further and push closer to failure with each consecutive set. The idea is to push your body 
                        to increase overall force production, thus stimulating higher levels of muscle growth.</p>
                    <p>Whoa… let's all take a breath now.</p>
                    <h2>Lift Heavier Loads with Cluster Sets </h2>
                    <p>Cluster sets involve breaking up a set (let's say 8 repetitions in that set) into subsets 
                        (4 sets of 2) with a small rest break between each set (10-20 seconds).</p>
                    <p>Cluster sets involve breaking up a set (let's say 8 repetitions in that set) into subsets 
                        (4 sets of 2) with a small rest break between each set (10-20 seconds).</p>                              
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

export default Plateau;