import styled from "styled-components";
import videoBg from "../media/Untitled.mp4";

const VideoPage = () => {
    return (
        <VideoStyle>
        <video src={videoBg} autoPlay loop muted />
        <div className="VideoText">
            <h1>InShape</h1>
        </div>
        </VideoStyle>
    );
};

const VideoStyle = styled.div`
    width: 100%;
    height: 100vh;
    video {
        width: 100%;
        height: 65vh;
        object-fit: cover;
        position: absolute;
    }

.VideoText {
    position: relative;
    width: 100%;
    padding-top: 48vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;

    p {
        font-size: 2em;
        margin: 0px;
        padding-top: 10px;
    }

    h1 {
        font-size: 4em;
        margin: 10px;
    }
}
`;
export default VideoPage;
