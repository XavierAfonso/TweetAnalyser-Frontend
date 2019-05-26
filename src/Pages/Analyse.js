import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import { AuthContext } from '../Utils/AuthProvider';

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
    padding: '60px 36px 0',
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
    }
  }

  componentDidMount() {};

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