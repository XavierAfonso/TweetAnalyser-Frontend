import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { AuthContext } from '../Utils/AuthProvider';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
    padding: '80px 36px 0',
    background: '#ffffff',
  },
  progress: {
    margin: theme.spacing(2),
  },

});

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username : ''
    }
  }

  componentDidMount() {
  };

  //Textfield
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      });
    };

  render() {

    console.log()
    return (
      <AuthContext>
        {({}) => {

          const { classes } = this.props;

          return (

            <div className={classes.root}>
              <CssBaseline />

              <div className={classes.appContent}>
                <Header history ={this.props.history}/>

                <main className={classes.mainContent}>

                  <Grid container spacing={1}>
                  <Grid item xs={12} md={12}> 
                  <FormControl margin="normal"  fullWidth>
                      <TextField
                        required
                        id="twitterAccount"
                        label="Twitter Account"
                        value={this.state.username}
                        onChange={this.handleChange('username')}
                        variant="outlined"
                        type="twitterAccount"
                        />
                  </FormControl>
                  </Grid>
                  </Grid>

                  <Grid container  direction="row-reverse" spacing={1}>
                  <Grid  item xs = {12} md = {2}>
                  <Button
                    style={{ background: '#1da1f2' }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                   // onClick={onSubmit}
                  >
                    Analyse
                  </Button>
                  </Grid>
                  </Grid>
                </main>
              </div>
            </div>
          );
        }
        }
      </AuthContext>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);