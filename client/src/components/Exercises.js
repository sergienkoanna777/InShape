import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import img19 from "../media/img19.jpg";
import image8 from "../media/image8.jpg";
import image9 from "../media/image9.jpg";
import image14 from "../media/image14.jpg";
import image15 from "../media/image15.jpg";

const Exercises = () => {
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <ItemCategory>
                    <Visual>
                        <img onClick={()=>(navigate("/forcoaches"))} src={image14} width="250px" alt="watch" />
                            <div className="text">
                                <div className="nameItems">
                                    <h3>List of body parts</h3>
                                </div>
                            </div>
                    </Visual>
                </ItemCategory>
                <ItemCategory>
                    <Visual>
                        <img  onClick={()=>(navigate("/foratletes"))} src={image9} width="250px" alt="watch" />
                            <div className="text">
                                <div className="nameItems">
                                    <h3>List of target muscles</h3>
                                </div>
                            </div>
                    </Visual>
                </ItemCategory>
                <ItemCategory>
                    <Visual>
                        <img  onClick={()=>(navigate("/foratletes"))} src={image8} width="250px" alt="watch" />
                            <div className="text">
                                <div className="nameItems">
                                    <h3>List of equipement</h3>
                                </div>
                            </div>
                    </Visual>
                </ItemCategory>
            </Container>
            <ContainerTwo>
                <HomepageBox>
                    <img onClick={()=>(navigate("/allexercisespage"))}  src={image15} width="1000px" alt="watch" />
                        <div className="text">
                            <div className="nameItems">
                                <h3>All exercises</h3>
                            </div>
                        </div>
                </HomepageBox>
            </ContainerTwo>
        </>
    );
};

const HomepageBox = styled.div`
    width: 80%;
    height: 50vh;
    
    img {
        width: 100%;
        height: 60%;
        object-fit: cover;
        border-radius: 4px;
    box-shadow: 10px 10px 10px 0 rgba(128, 128, 128, 0.44);
}
img:hover {
    box-shadow: 0 0 45px 2px #1cd6ce;
    opacity: 70%;
}
`;

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin:50px 250px;

    
`;

const ContainerTwo = styled.div`
    display: flex;
    justify-content: center;

`;

const ItemCategory = styled.div`
    width: 25%;
    padding-left: 12px;
    padding-right: 12px;
    margin-bottom: 24px;
    transform: translate(0px, 0px);
    margin: 10px;

img {
    border-radius: 4px;
    box-shadow: 10px 10px 10px 0 rgba(128, 128, 128, 0.44);
}
img:hover {
    box-shadow: 0 0 45px 2px #1cd6ce;
    opacity: 70%;
}
`;

const Visual = styled.div`
.text {
    color: #fff;
    transition: 0.2s ease;
    position: absolute;
    text-align: center;
    left: 40%;
    top: 80%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
h3{
    font-size: 35px;
    
}
.nameItems {
    line-height: 1;
}
`;





export default Exercises;