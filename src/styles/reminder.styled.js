import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";

export const MenuTitle = styled.span`
  display: block;
  margin: 25px 16px;
  outline: none;
`;
export const MenuOption = styled(MenuItem)`
  justify-content: space-between;
  width: 18rem;
  margin: 5px 0;
`;
export const MenuOptionContainer = styled.span`
  width: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MenuOptionText = styled.span`
  font-size: 0.8rem;
`;
