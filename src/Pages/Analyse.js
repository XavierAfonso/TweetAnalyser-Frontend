import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import { AuthContext } from '../Utils/AuthProvider';
import Post from '../Components/Post'
import CircularProgress from '@material-ui/core/CircularProgress';

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

      newData : [],
      tweets : [],
      tweetsResponses : [],
      displayCircularProgress : true,
    }
  }

  componentDidMount() {

    let newDataold = this.state.newData
    var promises = [];

    userService.getTweets().then(res => {

       res.data.forEach(element => {
         
        promises.push(

        userService.getTweetsResponses(element.id).then(res2 => {

          var newPost = {
            id : element.id,
            tweet_id : element.tweet_id,
            twitterAccount:element.author_screen_name,
            analyseAt: new Date(element.analyzed_at).toDateString(),
            fullText: element.full_text,
            sentiment : Math.round(element.avg_sentiment),
            comments: res2.data,
            data: [0,0,0,0,0]
          }
        
          let sumSentiment = 0
          let nbReponses = 0

          newPost.comments.forEach(element2 => {
            sumSentiment += element2.sentiment
            nbReponses += 1
            newPost.data[element2.sentiment] = newPost.data[element2.sentiment]+ 1
          })

          let res = Math.ceil(sumSentiment/nbReponses)
          const maxValue = 4

          if(res > maxValue){
            res = maxValue
          }
          else if (res < 0){
            res = 0
          }
          newPost.sentiment = res
          newDataold.push(newPost)
        })
        )
    })

    Promise.all(promises).then(res => {
    
      newDataold = newDataold.sort((a,b) => {
        if(a.id < b.id)
         return 1
         else
         return -1
      })

      this.setState({ displayCircularProgress: false });
      this.setState({newData :newDataold })
    })
  }).catch(err => {
    this.setState({ displayCircularProgress: false });
  })
}

  render() {

    const renderData = this.state.newData.map( (element,key) => {
      return(
      <Post key={key} data = {element} />
      )
    })

    return (
      <AuthContext>
        {() => {

          const { classes } = this.props;

          return (

            <div className={classes.root}>
              <CssBaseline />

              <div className={classes.appContent}>
                <Header history ={this.props.history}/>

                <main className={classes.mainContent}>

                  <Grid style={{marginTop:'1px',backgroundColor:'transparent'}} justify = "center" container spacing={2}>

                  {this.state.displayCircularProgress === true &&
                  <Grid container justify="center" alignItems="center">
                  <CircularProgress className={classes.progress} />
                  </Grid>
                  }

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