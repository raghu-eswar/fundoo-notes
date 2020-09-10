import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withRouter } from "react-router-dom";
import { logIn } from "../services/userServices";
import * as Styled from "../styles/signIn.styled";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      error: "",
      showPassword: false,
    };
  }

  toggleShowPassword = () =>
    this.setState({ showPassword: !this.state.showPassword });

  updateEmail = (event) => {
    this.setState({ email: event.target.value });
    if (this.state.emailError) this.validateEmail(event);
  };

  validateEmail = (event) => {
    let email = event.target.value;
    if (
      !/^[a-zA-Z0-9$&+_-]+(\.[a-zA-Z0-9]+)*@([a-z0-9]+([a-z0-9-]*)\.)+[a-z]{2,4}$/.test(
        email
      ) &&
      email
    )
      this.setState({ emailError: "invalid user name" });
    else this.setState({ emailError: "" });
  };

  updatePassword = (event) => {
    this.setState({ password: event.target.value });
    if (this.state.passwordError) this.validatePassword(event);
  };

  validatePassword = (event) => {
    let password = event.target.value;
    if (
      !/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}/.test(
        password
      ) &&
      password
    )
      this.setState({ passwordError: "invalid password" });
    else this.setState({ passwordError: "" });
  };

  login = (event) => {
    event.preventDefault();
    let logInData = { email: this.state.email, password: this.state.password };
    logIn(logInData)
      .then((response) => {
        if (response.status === 200) {
          let user = {
            token: response.data.id,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
            imageUrl: response.data.imageUrl,
          };
          localStorage.setItem("user", JSON.stringify(user));
          this.props.history.push("home");
        }
      })
      .catch((error) => {
        if (error.response.data.error.code === "LOGIN_FAILED") {
          this.setState({ error: "invalid email or password" });
          setTimeout(() => this.setState({ error: "" }), 3000);
        }
      });
  };

  render() {
    return (
      <Styled.MainContainer component="main" maxWidth="xs">
        <Styled.MainContent>
          <Styled.StyledAvatar>
            <LockOutlinedIcon />
          </Styled.StyledAvatar>
          <Typography
            component="h1"
            variant="h5"
            align="center"
            color="primary"
          >
            Sign in
          </Typography>
          <Styled.LogInForm onSubmit={this.login}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              type="email"
              autoFocus
              error={this.state.emailError}
              helperText={this.state.emailError}
              onChange={this.updateEmail}
              onBlur={this.validateEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={this.state.showPassword ? "text" : "password"}
              error={this.state.passwordError}
              helperText={this.state.passwordError}
              onChange={this.updatePassword}
              onBlur={this.validatePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.toggleShowPassword}
                    >
                      {this.state.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Styled.FormError>{this.state.error}</Styled.FormError>
            <Styled.StyledButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={this.state.emailError || this.state.passwordError}
            >
              Sign In
            </Styled.StyledButton>
            <Grid container>
              <Grid item xs>
                <Link href="#">Forgot password?</Link>
              </Grid>
              <Grid item xs>
                <Link href="#">Don't have an account?</Link>
              </Grid>
            </Grid>
          </Styled.LogInForm>
        </Styled.MainContent>
      </Styled.MainContainer>
    );
  }
}
export default withRouter(SignIn);
