import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

const Btn = styled.button`
    box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: 2px solid #D61C4E;
  border-radius: 0.6em;
  color: #D61C4E;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: center;
      -ms-flex-item-align: center;
          align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  border-color: #D61C4E;
  color: #fff;
  box-shadow: 0 0 40px 40px #D61C4E inset, 0 0 0 0 #D61C4E;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;

:hover, :focus {
  color: #fff;
  outline: 0;
}

:hover {
  box-shadow: 0 0 10px 0 #D61C4E inset, 0 0 10px 4px #D61C4E;
}
`;
export default Button;
