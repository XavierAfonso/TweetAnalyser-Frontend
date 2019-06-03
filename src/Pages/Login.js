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
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(1)* 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop:theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#1da1f2',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: "theme.spacing.unit",
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

class Login extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
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
        {({ error, user, login }) => { // authContext


          if(user===null){
            //checkConnection();
          }

          if(user) {
            return <Redirect to="/" />;
          }

          const { classes } = this.props;

          const onSubmit = (event) => {
            event.preventDefault();

            this.setState({ displayCircularProgress: true });

            this.setState({ errorLocal: "" });

            let email = this.state.email;
            let password = this.state.password;

            if (email !== "" && password !== "") {
              login({ email, password }).catch(() => {
                this.setState({ displayCircularProgress: false });
              })
            }
            else{
              this.setState({ displayCircularProgress: false });
              this.setState({ errorLocal: "The fields must not be null" });
            }
          }

          return (
            <main className={classes.main}>
              <CssBaseline />
              <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Login
                </Typography>
                <form className={classes.form}>

                <Grid container spacing={1}>

                  <Grid item xs={12} md={12}> 
                  <FormControl margin="normal"  fullWidth>
                      <TextField
                        required
                        id="username"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        variant="outlined"
                        type="email"
                        />
                  </FormControl>
                  
                  </Grid>

                  <Grid item xs={12} md={12}> 
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
                    Login
                  </Button>

                  {this.state.displayCircularProgress === true &&
                  <Grid container justify="center" alignItems="center">
                  <CircularProgress className={classes.progress} />
                  </Grid>
                  }

                  <br />
                  <a className={classes.a} href="/register">Not register yet ?</a>
                  <p style={{color:'red'}}>{error}</p>
                  <p style={{color:'red'}}>{this.state.errorLocal}</p>
                </form>
              </Paper>
            </main>
          );

        }}
      </AuthContext>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);