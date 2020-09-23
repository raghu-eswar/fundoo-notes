import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function FormCheckbox(props) {
  const [checked, setChecked] = React.useState(props.checked);

  React.useEffect(() => setChecked(props.checked), [props.checked]);

  const onChangeHandler = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) props.onCheck(props.label);
    else props.onUnCheck(props.label);
  };
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          color="primary"
          onChange={onChangeHandler}
        />
      }
      label={props.label.label}
    />
  );
}
