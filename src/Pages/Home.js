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

import { userService } from '../Utils/user.services';

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
    //background: '#ffffff',
    background: '#eaeff1',
  },
  progress: {
    margin: theme.spacing(2),
  },

});

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value : '',
      loading : false
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

    analyse = () => {
      this.setState({loading : true})

      userService.getAnalyse(this.state.value)
      .then(res => {
        this.setState({loading : false})
        console.log(res)}
        )
      .catch(err => {
        this.setState({loading : false})
        console.log(err)
      })
    }

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
                        value={this.state.value}
                        onChange={this.handleChange('value')}
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
                    onClick={() => this.analyse()}
                  >
                    Analyse
                  </Button>
                  </Grid>

                {this.state.loading &&
                  <Grid style={{marginTop:'5px'}} justify = "center" container spacing={2}>
                  <Grid  style={{backgroundColor:'transparent'}}item xs = {12} md = {12}>
                  <img style={{ display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto'}} 
                                src="loading.gif" alt="Flowers in Chania"></img>
                  </Grid>
                  </Grid>
                }


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