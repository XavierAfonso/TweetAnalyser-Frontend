import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { AuthContext } from '../Utils/AuthProvider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Redirect } from 'react-router-dom';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(6))]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    top: '100px',
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    //backgroundColor : 'red',
    
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: '#1da1f2',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  a: {
    display: 'flex',
    marginTop: '10px',
  },
  progress: {
    margin: theme.spacing(2),
  },
});

class SignIn extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      //email:"",
      username: "",
      password: "",
      confirmPassword : "",
      statusRegister: null,
      errorLocal : "",
      displayCircularProgress : false,
    }
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

    //Textfield
    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

  render() {

    return (
      <AuthContext>
        {({ error, user, signUp }) => { // authContext

          /*if(user) {
              return <Redirect to="/" />;
          }*/

          const { classes } = this.props;

          const onSubmit = (event) => {
            event.preventDefault();

            this.setState({ displayCircularProgress: true });
            this.setState({ statusRegister: "" });
            this.setState({ errorLocal: "" });
            let email = this.state.email;

            let username = this.state.username;
            let password = this.state.password;
            let confirmPassword = this.state.confirmPassword;

            /*console.log(firstname);
            console.log(lastname);
            console.log(email);
            console.log(username);
            console.log(password);
            console.log(confirmPassword);*/

            /*if (firstname !== "" && lastname !== "" && email !== "" 
            && username !== "" && password !== "" && confirmPassword !== "") {

              //if ( email !== ""  && password !== "" && confirmPassword !== "") {

              if(password === confirmPassword){
                  return signUp(firstname,lastname,username,email, password).then((element) => {
                    this.setState({ statusRegister: "Account has been successfully registered" });
                    this.setState({ displayCircularProgress: false });
                  }).catch(err => {
                    this.setState({ displayCircularProgress: false });
                }
              )}

              else{
                this.setState({ errorLocal: "Password must be the same" });
                this.setState({ displayCircularProgress: false });
              }
            }else{
              this.setState({ errorLocal: "The fields must not be null" });
              this.setState({ displayCircularProgress: false });
            }*/


          }

          return (
            <main className={classes.main}>
              <CssBaseline />
              <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Register
                </Typography>
                <form className={classes.form}>

                <Grid container spacing={1}>



                    <Grid item xs={12} md={12}>
                      <FormControl margin="normal"  fullWidth>
                      <TextField
                      required
                        id="username"
                        label="Username"
                        value={this.state.username}
                        onChange={this.handleChange('username')}
                        variant="outlined"
                        />
                      </FormControl>
          </Grid>

                    {/*<Grid item xs={12} md={12}>
                      <FormControl margin="normal"  fullWidth>
                      <TextField
                      required
                        id="email"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        variant="outlined"
                        type="email"
                        />
                      </FormControl>
                    </Grid>*/}

                    <Grid item xs={12} md={6}>
                      <FormControl margin="normal"  fullWidth>
                      <TextField
                      required
                        id="password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        variant="outlined"
                        type="password"
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6}>
                     <FormControl margin="normal"  fullWidth>
                     <TextField
                     required
                        id="confirmPassword"
                        label="Confirm password"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange('confirmPassword')}
                        variant="outlined"
                        type="password"
                        />
                    </FormControl>
                    </Grid>
                </Grid>

          
                  <Button
                    style={{ background: '#1da1f2' }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={onSubmit}
                  >
                    Register
                  </Button>

                  
                  {this.state.displayCircularProgress === true &&
                  <Grid container justify="center" alignItems="center">
                  <CircularProgress className={classes.progress} />
                  </Grid>
                  }

                  <br />
                  <a className={classes.a} href="/login">You already have an account ?</a>
                  <p style={{ color: 'red' }}>{error}</p>
                  <p style={{ color: 'red' }}>{this.state.errorLocal}</p>
                  <p style={{ color: 'green' }}>{this.state.statusRegister}</p>
                </form>
              </Paper>
            </main>
          );

        }}
      </AuthContext>
    )
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);