import styled from "styled-components";
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { GrFacebook } from 'react-icons/gr';

const Footer = () => (
    <FooterStyle>
        <Box>
            <Icon/>
            <IconTwo/>
            <IconThree/>
        </Box>
    </FooterStyle>
);


const Icon = styled(BsInstagram)`
font-size:40px;
`
const IconTwo = styled(FiTwitter)`
font-size:40px;
`
const IconThree = styled(GrFacebook)`
font-size:40px;
`
const FooterStyle = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    background-color: #35858B;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    opacity: 0.6;
`;
const Box = styled.div`
    display: flex;
    justify-content: space-around;
`;


export default Footer;