import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import FormCheckbox from "./FormCheckbox";
import * as Styled from "../styles/addLabelsOption.styled";

export default function AddLabelsOption(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [labels, setLabels] = React.useState(props.labels);
  React.useEffect(() => setLabels(props.labels), [props.labels]);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const filterLabels = (event) => {
    let _labels = props.labels.filter((label) =>
      label.label.toUpperCase().includes(event.target.value.toUpperCase())
    );
    setLabels(_labels);
  };

  const isActiveLabel = (label) => {
    return (
      props.activeLabels.filter((activeLabelId) => activeLabelId === label.id)
        .length > 0
    );
  };
  
  return (
    <>
      <MenuItem onClick={openMenu} style={{ width: "10rem" }}>
        Add label
      </MenuItem>
      <Popover
        anchorEl={anchorEl}
        open={anchorEl}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Styled.MainContainer>
          <Typography variant="subtitle1" align="left">
            Label note
          </Typography>
          <Styled.SearchContainer>
            <Styled.Input
              placeholder="search"
              onChange={filterLabels}
              autoFocus
            />
          </Styled.SearchContainer>
          <Styled.LabelsContainer>
            {labels.map((label) => (
              <FormCheckbox
                onCheck={props.addLabels}
                onUnCheck={props.removeLabels}
                label={label}
                checked={isActiveLabel(label)}
              />
            ))}
          </Styled.LabelsContainer>
        </Styled.MainContainer>
      </Popover>
    </>
  );
}
