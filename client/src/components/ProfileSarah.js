import styled from "styled-components";
import image32 from "../media/image32.png";
import background from "../media/image20.jpg";

const ProfileSarah = () => {
    return (
        <>
            <StyleHeader style={{ backgroundImage: `url(${background})` }}/>
                <StyledProfile>
                    <UserInfo >
                        <img src={image32} alt="avatar" width= "350px"/>
                        <NameStyle>
                            <h3>Sarah Smith</h3>
                            <h3>Coach</h3>
                        </NameStyle>
                    </UserInfo>
                </StyledProfile>
                <Box>
                    <p>Growing up a competitive athlete, I was initially drawn to
                        Essentrics after experiencing how it improved my power in sports and relieved my chronic pain. </p>
                    <p>Working with professional and Olympic athletes, I draws on my knowledge of the human body from my studies
                        in science and innate understanding of the athlete mindset to instill the value of Essentrics flexibility training 
                        for injury prevention and improved performance.</p>
                    <p>Passionate about educating people of all ages and fitness levels on the benefits of Essentrics, I leads live teacher trainings,
                        workshops and retreats worldwide.</p>
                </Box>
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
    margin: -15% 12% 0;
    display: flex;
    flex-direction: column;
`;

const Box = styled.div`
    margin:200px;
    border-radius: 4px #4FBDBA;
    box-shadow: 8px 10px 25px 0 rgba(128, 128, 128, 0.22);
    min-width: 320px;
    max-width: 1200px;
    margin: 2% 20%;
    padding: 4px 32px 32px;
    p{
        font-size:20px;
        line-height: 2;
    }
`;

export default ProfileSarah;