import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddAlertSharpIcon from "@material-ui/icons/AddAlertSharp";
import Menu from "@material-ui/core/Menu";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import * as Styled from "../styles/reminder.styled";
import LuxonUtils from "@date-io/luxon";
import {
  TimePicker,
  DatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

export default function Reminder(props) {
  let currentDate = new Date();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showCustomOption, setShowCustomOption] = React.useState(
    props.reminder
  );
  const [dateAndTime, setDateAndTime] = React.useState(
    props.reminder ? new Date(props.reminder) : currentDate
  );
  React.useEffect(() => {
    setDateAndTime(props.reminder ? new Date(props.reminder) : new Date());
    setShowCustomOption(props.reminder);
  }, [props.reminder]);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setShowCustomOption(props.reminder);
  };

  const addReminderToday = () => {
    let current = new Date();
    current.setHours(20, 0, 0);
    props.addReminder(current.toISOString());
    closeMenu();
  };
  const addReminderTomorrow = () => {
    let current = new Date();
    current.setDate(current.getDate() + 1);
    current.setHours(20, 0, 0);
    props.addReminder(current.toISOString());
    closeMenu();
  };
  const addReminderNextWeek = () => {
    let current = new Date();
    current.setDate(current.getDate() + 7);
    current.setHours(20, 0, 0);
    props.addReminder(current.toISOString());
    closeMenu();
  };
  const addReminderCustom = () => {
    props.addReminder(dateAndTime.toISO());
    closeMenu();
  };
  if (!showCustomOption) {
    return (
      <>
        <IconButton {...props} onClick={openMenu}>
          <AddAlertSharpIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={anchorEl}
          onClose={closeMenu}
        >
          <Styled.MenuTitle>Reminder:</Styled.MenuTitle>
          <Styled.MenuOption
            disabled={currentDate.getHours() > 20}
            onClick={addReminderToday}
          >
            <Styled.MenuOptionText>Later today</Styled.MenuOptionText>
            <Styled.MenuOptionText>8:00 AM</Styled.MenuOptionText>
          </Styled.MenuOption>
          <Styled.MenuOption onClick={addReminderTomorrow}>
            <Styled.MenuOptionText>Tomorrow</Styled.MenuOptionText>
            <Styled.MenuOptionText>8:00 AM</Styled.MenuOptionText>
          </Styled.MenuOption>
          <Styled.MenuOption onClick={addReminderNextWeek}>
            <Styled.MenuOptionText>Next week</Styled.MenuOptionText>
            <Styled.MenuOptionText>{`${currentDate.toLocaleString("en-us", {
              weekday: "short",
            })}, 8:00 AM`}</Styled.MenuOptionText>
          </Styled.MenuOption>
          <Styled.MenuOption onClick={() => setShowCustomOption(true)}>
            <Styled.MenuOptionContainer>
              <QueryBuilderIcon fontSize="small" />
              <Styled.MenuOptionText>
                {"Pick date & time"}
              </Styled.MenuOptionText>
            </Styled.MenuOptionContainer>
          </Styled.MenuOption>
        </Menu>
      </>
    );
  }
  return (
    <>
      <IconButton {...props} onClick={openMenu}>
        <AddAlertSharpIcon />
      </IconButton>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={anchorEl}
          onClose={closeMenu}
        >
          <Styled.MenuTitle style={{ margin: "0 16px" }}>
            <IconButton onClick={() => setShowCustomOption(false)}>
              <ArrowBackIcon />
            </IconButton>
            {"Pick date & time"}
          </Styled.MenuTitle>
          <Styled.MenuOption>
            <DatePicker
              value={dateAndTime}
              onChange={setDateAndTime}
              minDate={currentDate}
            />
          </Styled.MenuOption>
          <Styled.MenuOption>
            <TimePicker value={dateAndTime} onChange={setDateAndTime} />
          </Styled.MenuOption>
          <Styled.MenuOption onClick={addReminderCustom}>
            <Styled.MenuOptionText>Save</Styled.MenuOptionText>
          </Styled.MenuOption>
        </Menu>
      </MuiPickersUtilsProvider>
    </>
  );
}
