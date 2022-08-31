import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ItemCard = (props) => {
    const exercise = props.exercise;

    return (
        <Wrapper>
        {/* Conditional rendering below */}
        {props.loading && (
            <>
            <NavigationLink to={`/exercises/${exercise.exercise}`}>
                <StyledImg
                alt="base64 encoded URL of product"
                src={exercise.gifUrl}
                />
                <StyledInfo>
                <p className="name">{exercise.name}</p>
                <p className="target">{exercise.target}</p>
                </StyledInfo>
            </NavigationLink>
            </>
        )}
        </Wrapper>
    );
};



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