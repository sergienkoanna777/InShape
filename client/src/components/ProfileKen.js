import styled from "styled-components";
import image33 from "../media/image33.png";
import background from "../media/image20.jpg";


const ProfileKen = () => {
    return (
        <>
            <StyleHeader style={{ backgroundImage: `url(${background})` }}/>
                <StyledProfile>
                    <UserInfo >
                        <img src={image33} alt="avatar" width= "350px"/>
                        <NameStyle>
                        <h3>Ken Mitchell</h3>
                        <h3>Coach</h3>
                        </NameStyle>
                    </UserInfo>
                </StyledProfile>
                <Box>
                    <p>Passionate Trainer with a commitment to guiding clients on their fitness journey in a fun and rewarding way. 
                        Significantly knowledgeable in Bodybuilding,
                        HIIT, Strength Training, Weight Loss and Program Development. Expertise in instructing individuals on proper 
                        lifting techniques, and in advising others 
                        on healthy nutrition. </p>
                    <p>I acquired a great deal of health and fitness knowledge over my 7 years of training. I have personal
                        training certification from the National Academy of Sports Medicine (NASM).</p>
                    <p>If you are looking to change your lifestyle or body, no matter your current level of fitness, 
                        I would love the opportunity to show you how, so please do not hesitate to contact me! </p>
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

export default ProfileKen;