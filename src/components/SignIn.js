import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
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
    };
  }

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
