import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import { AuthContext } from '../Utils/AuthProvider';
import Post from '../Components/Post'

let data = [ 
  {
  twitterAccount : '@ROLEX',
  analyseAt: '28/05/2019',
  fullText: 'Skill, patience and endurance. The clay courts at @rolandgarros test the mettle of the toughest champions. This year marks the beginning of our relationship with the enthralling Grand Slam® tournament. #RolandGarros #RG19 #Perpetual',
  sentiment : 4,

  comments : [
    {
      text : 'Only the best ware',
      sentiment: 4
    },
    {
      text : 'Skill, patience and endurance That’s what us punters have to have if we want to buy one of your SS sport watches.',
      sentiment: 3
    }

  ]
},
{
  twitterAccount : '@CocaCola',
  analyseAt: '28/05/2019',
  fullText: 'We were just as excited as you, and apologize for the glitch. We’re doing our best to make New Coke available. Stay tuned.',
  sentiment : 1,

  comments : [
    {
      text : 'I ordered, PayPal was charged but I got no confirmation or indication on the actual site that my order was successful',
      sentiment: 1
    },
    {
      text : 'We are working on a solution as we tweet. Sorry for the delay, please send us a DM if you still havent received your email confirmation of your order',
      sentiment: 0
    }

  ]
},
]

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
    paddingBottom:'100px'
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

    const renderData = data.map( (element,key) => {
      return(
      <Post key={key} data = {element} />
      )
    })

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

                  <Grid style={{marginTop:'1px',backgroundColor:'transparent'}} justify = "center" container spacing={2}>

                  <Grid item xs={12} md={7}>
                  
                  {renderData}
               
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