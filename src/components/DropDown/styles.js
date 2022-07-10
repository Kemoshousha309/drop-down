import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  width: min(300px, 100%);
`;

export const Bar = styled.button`
  background-color: white;
  border: 1px solid #9CB4CC;
  border-radius: 4px;
  padding: 5px 25px;
  font-size: inherit;
  font-family: inherit;
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all .5s;
  span:nth-child(2) {
    transform: translateY(5px);
  }
  :hover, :focus {
    box-shadow: 0px 0px 3px 1px #2155CD;
    border: 1px solid transparent;
  }
`;

export const Item = styled.div`
  padding: 7px 25px;
  cursor: pointer;
  :hover {
    background-color: #2155CD;
    color: white;
  }
`;

export const List = styled.div `
  transform: translateY(6px);
  transition: all .5s;
  height: ${props => props.show ? "100px" : "0px"};
  background-color: white;
  box-shadow: 0px 1px 4px 0px #4a4a4a;
  position: relative;
  z-index: 1001;
  overflow: hidden;
`

export const Backdrop = styled.div`
  display: ${props => props.show};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`

