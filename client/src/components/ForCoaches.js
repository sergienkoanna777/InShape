import styled from "styled-components";
// import img19 from "../media/img19.jpg";

const ForCoaches = () => {
    return (
        <>
        <ImageStyle>
            {/* <img src={img19} width="1000px" alt="watch" /> */}
        <p>For Coaches</p>
        </ImageStyle>
        </>
    );
};

const ImageStyle = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;

    img {
        width: 100%;
        height: 70%;
        object-fit: cover;
    }
`

export default ForCoaches;