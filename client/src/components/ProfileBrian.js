import styled from "styled-components";
import image31 from "../media/image31.png";
import background from "../media/image20.jpg";


const ProfileBrian = () => {
    return (
        <>
            <StyleHeader style={{ backgroundImage: `url(${background})` }}/>
                <StyledProfile>
                    <UserInfo >
                        <img src={image31} alt="avatar" width= "350px"/>
                        <NameStyle>
                        <h3>Brian Johnson</h3>
                        <h3>Coach</h3>
                        </NameStyle>
                    </UserInfo>
                </StyledProfile>
                <Box>
                    <p>B.Sc kinesiologist,ex-competitor in strength sports,high level
                        of knowledge and educational standarts,more than 20 years of 
                        experience training athletes,general population and different 
                        health conditions,flexible,always reaching the highest customer's 
                        potential,trustworthy.</p>
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

export default ProfileBrian;