import styled from "styled-components";
import Container from "@material-ui/core/Container";

export const MainContainer = styled(Container)`
  margin: 15rem auto;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  border-radius: 0.5rem;
  outline: none;
  padding: 24px;
`;
export const LableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledTextField = styled.input`
  flex: 1;
  height: 30px;
  outline: none;
  border: none;
  border-bottom: 1px solid transparent;
  font-weight: bold;
  &:hover,
  &:focus {
    border-bottom: 1px solid gray;
  }
`;
export const ButtonWraper = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
