import styled from "styled-components";

/* normal styled div */
const Box = styled.div`
  background-color: #ef476f;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  text-align: center;
  color: white;
  font-weight: bold;
`;

/* buttons using props */
const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  background-color: ${(props) =>
    props.primary ? "#06d6a0" : "#118ab2"};
`;

function StyledComponentDemo() {
  return (
    <>
      <Box>Styled Component Box</Box>

      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </>
  );
}

export default StyledComponentDemo;