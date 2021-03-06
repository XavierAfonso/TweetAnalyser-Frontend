import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Canvas from './Canvas';
import DeleteIcon from '@material-ui/icons/Delete';

import BarChartIcon from '@material-ui/icons/BarChart';
import { userService } from '../Utils/user.services';

const styles = theme => ({

  avatar: {
    margin: 10,
    backgroundColor : 'yellow',
    width: 30,
    height: 30,
  },

  card: {
    marginTop:'10px'
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  veryNegativ: {backgroundColor: 'red'},
  negativ: {backgroundColor: 'orange'},
  neutral: {backgroundColor: 'grey'},
  positiv: {backgroundColor: 'blue'},
  veryPositiv: {backgroundColor: 'green'},
});

class RecipeReviewCard extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      setExpanded: false,

      twitterAccount : '',
      analyseAt: '',
      fullText: '',
      sentiment : 0,
      comments : [],
      data : [],
      open: false,
      tweet_id : '',
      visible:true,
      id : ''
    }

    this.state.twitterAccount = this.props.data.twitterAccount
    this.state.analyseAt = this.props.data.analyseAt
    this.state.fullText = this.props.data.fullText
    this.state.sentiment = this.props.data.sentiment
    this.state.comments = this.props.data.comments
    this.state.data = this.props.data.data
    this.state.tweet_id = this.props.data.tweet_id
    this.state.id = this.props.data.id

  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  deletePost = () => {

    // eslint-disable-next-line no-restricted-globals
    let response = confirm("Voulez-vous supprimer cette analyse ?");

    if(response){

    userService.getDeleteTweet(this.state.id).then(res => {
      //console.log(res)
      this.setState({visible : false})
    }).catch(err => console.log(err))
  }

  }

  componentDidMount() {
  };


  render() {

  const { classes } = this.props;

  const sentimentGeneral = (input) => {
    switch(input) {
      case 0:
        return(    
        <Avatar aria-label="Recipe" className={classes.veryNegativ}></Avatar>
      )
      case 1:
        return(    
        <Avatar aria-label="Recipe" className={classes.negativ}></Avatar>
      )
      case 2:
        return(    
        <Avatar aria-label="Recipe" className={classes.neutral}></Avatar>
      )
      case 3:
      return(    
      <Avatar aria-label="Recipe" className={classes.positiv}></Avatar>
      )
      case 4:
      return(    
      <Avatar aria-label="Recipe" className={classes.veryPositiv}></Avatar>
      )
      default:
      return(    
        <Avatar aria-label="Recipe" className={classes.neutral}></Avatar>
      )
    }
  }

  const sentimentTweet = (input) => {
    switch(input) {
      case 0:
        return(    
        <Avatar style={{height:10,width:10}} aria-label="Recipe" className={classes.veryNegativ}></Avatar>
      )
      case 1:
        return(    
        <Avatar style={{height:10,width:10}} aria-label="Recipe" className={classes.negativ}></Avatar>
      )
      case 2:
        return(    
        <Avatar  style={{height:10,width:10}} aria-label="Recipe" className={classes.neutral}></Avatar>
      )
      case 3:
      return(    
      <Avatar  style={{height:10,width:10}} aria-label="Recipe" className={classes.positiv}></Avatar>
      )
      case 4:
      return(    
        <Avatar  style={{height:10,width:10}} aria-label="Recipe" className={classes.veryPositiv}></Avatar>
      )
      default:
      case 5:
      return(    
      <Avatar  style={{height:10,width:10}} aria-label="Recipe" className={classes.neutral}></Avatar>
      )
    }
  }

  const renderData = this.state.comments.map( (element,key) => 
  <Grid key = {key} item xs={12} md={12} style={{ marginTop:'10px',overflow: 'auto',border:(key %2===0 ? '1 px solid #bcd2e9' : ' 1 px solid #ffffff'),
  backgroundColor: (key %2==0 ? '#eef5fc' : '#eaeff1')}}>
    <div style={{ display: 'inline-flex'}}>
    <div style={{marginBottom:'10px'}} > {sentimentTweet(element.sentiment)}</div>
    <div style={{marginLeft:'5px'}}>{element.author_screen_name}</div>
  </div>
  <div>
  {element.full_text}
  </div>
  </Grid>)
  
  return (
    
    <div >

{this.state.visible &&
 
 <>
<Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Statistic info"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
          <Canvas data={this.state.data} />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
    <Card  className={classes.card}>
      
      <CardHeader
        avatar={sentimentGeneral(this.state.sentiment)}
        title={this.state.twitterAccount}
        subheader={this.state.analyseAt}
        
        action = {
            <>
            <IconButton
              onClick={() => this.deletePost()}
            >
              <DeleteIcon />
            </IconButton>
          <IconButton
          onClick={this.handleClickOpen}
        >
          <BarChartIcon />
        </IconButton>
        </>
        }
        
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {this.state.fullText}
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: this.state.expanded,
          })}
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <div style={{height : '200px', overflowY:'auto'}}>
        <Grid style={{backgroundColor:'transparent'}} justify = "center" container spacing={2}>

           {renderData} 
          </Grid>
       </div>
        </CardContent>
      </Collapse>
    </Card>
    </>
}
    </div>
  );
 }
}

export default withStyles(styles)(RecipeReviewCard);
