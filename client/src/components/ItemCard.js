import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ItemCard = ({exercise}) => {
    return (
        <ItemProfile>
            <Wrapper>
                <NavigationLink to={`/exercises/${exercise.exercise}`}>
                    <StyledImg 
                    alt="URL of product"
                    src={exercise.gifUrl}
                    />
                    <StyledInfo>
                    <p className="name">{exercise.name}</p>
                    <p className="target">{exercise.target}</p>
                    </StyledInfo>
                </NavigationLink>

            </Wrapper>
        </ItemProfile>
    );
};

const ItemProfile = styled.div`
        display: flex;
        background: white;
        box-shadow: 10px 10px 8px 0 rgba(128, 128, 128, 0.44);
        gap: 20px;
        border-radius: 20px;
        margin: 30px;
        border: none;
        font-size: 20px;
        image-resolution: unset;
    
        :hover {
        box-shadow: 0 0 15px 2px #00FFDD;
        opacity: 80%;
        }
    `;

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .name {
        min-height: 40px;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        word-break: break-all;
    }
    p{
        color: #072227;
    }
    .target{
        text-transform: uppercase;
    }
`;

const StyledImg = styled.img`
    max-height: 150px;
    margin: 30px 0 0 0;
    color: black;
`;

const NavigationLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: none;
    
`;

const Wrapper = styled.div`
    width: 200px;
    padding: 10px;
`;

export default ItemCard;