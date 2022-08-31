import { FallingLines } from "react-loader-spinner";
import styled from "styled-components";

const Loading = () => {
    return (
        <StyledDiv>
        <FallingLines height="200" width="200" color="grey" />
        </StyledDiv>
    );
    };

    const StyledDiv = styled.div`
    margin: 100px 0 0 0;
    padding: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
`;

export default Loading;
