import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Hidden from '@material-ui/core/Hidden';
import { AuthContext } from '../Utils/AuthProvider';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
    }

  };

  static contextTypes = {
    router: PropTypes.object
  }

  redirectToTarget = (page) => {
   this.props.history.push(`${page}`)
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  componentDidMount() {}

  render() {

    return (

      <AuthContext>

        {({logout, test }) => { // authContext


          const { anchorEl, mobileMoreAnchorEl } = this.state;
          const { classes } = this.props;
          const isMenuOpen = Boolean(anchorEl);
          const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

          const renderMenu = (
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMenuOpen}
              onClose={this.handleMenuClose}
            >

              <MenuItem onClick={() => this.redirectToTarget("/")}>Home</MenuItem>
              <MenuItem onClick={() => this.redirectToTarget("/analyse")}>Analyse</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          );

          const renderMobileMenu = (

            <Menu
              anchorEl={mobileMoreAnchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMobileMenuOpen}
              onClose={this.handleMobileMenuClose}
            >

              <MenuItem onClick={this.handleProfileMenuOpen}>
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
                <p>Profile</p>
              </MenuItem>
            </Menu>
          );

          const { onDrawerToggle } = this.props;

          return (
            <div className={classes.root}>

              <AppBar  style={{ background: '#1da1f2' }} position="fixed" className={classes.appBar}>
                <Toolbar>

                  {this.props.home === "true" &&
                    <Hidden smUp>
                      <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={onDrawerToggle}
                        className={classes.menuButton}
                      >
                        <MenuIcon />
                      </IconButton>
                    </Hidden>}

            <span style={{fontSize:'1.2em'}}>
            TweetAnalyser
            </span>

                  <div className={classes.grow} />

                  <div className={classes.sectionDesktop}>

                    <IconButton 
                      aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                      aria-haspopup="true"
                      onClick={this.handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </div>


                  <div className={classes.sectionMobile}>
                    <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                      <MoreIcon />
                    </IconButton>
                  </div>

                </Toolbar>
              </AppBar>

              {renderMenu}
              {renderMobileMenu}
             
            </div>
          );
        }}
      </AuthContext>
    )
  }
}


Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
