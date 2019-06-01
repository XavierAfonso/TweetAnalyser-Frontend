import React, { Component } from 'react';
import axios from 'axios';
import { userService } from '../Utils/user.services';

const { 
    Provider : AuthContextProvider, 
    Consumer : AuthContext,
 } = React.createContext();

class AuthProvider extends Component {
  
  constructor(props){
      super(props);

          this.state = {

            user:null,
            error:null,
            login:this.login,
            register:this.register,
            logout:this.logout,
          }
    }

    removeLocalStorage = () => {

        window.localStorage.removeItem('token');
        window.localStorage.removeItem('username');
        this.setState({user: null}); 
    }

    componentWillMount () {

       // if(this.state.user === null){

            const token = window.localStorage.getItem('token');
            const username = window.localStorage.getItem('username');
            this.setState({user: token}); 

              if(token){ //token

                if(username){ //username

                    this.setState({user: username}); 
                
                    /*userService.getMe().then(val => {

                        // console.log(val);

                        if(val.data.email===username){
                            this.setState({user: username}); 
                        }
                        else{
                            this.removeLocalStorage();
                        }

                    }).catch(err => {
                        this.removeLocalStorage();
                    });*/
                }
            }
    }

    getError = (error) => {

        if(error.response.status===400){
            this.setState({error: '400 The email already exist'});
        }
        else if(error.response.status===404){
            this.setState({error: 'The email don\'t exist'});
        }
        else if(error.response.status===500){
            this.setState({error: '500 Server error'});
        }
        else if (error.response.status===403){
            this.setState({error: '403 forbidden'});
        }
        else{
            this.setState({error: 'Invalid username or password'});
        }
    }

    login = ({email,password}) =>{
        
        this.setState({error : ""});

        return userService.getLogin(email,password).then(response => {

            const {token} = response.data;

            window.localStorage.setItem('token',token);
            window.localStorage.setItem('username',email);
            this.setState({user: email});

        }).catch(error => {
            console.log(error)
             this.getError(error);
             throw error;
        });
    }

    register = (email,password) =>{

       this.setState({error : ""});

       return userService.getRegister(email,password).then(response => {
        const {token} = response.data;
        window.localStorage.setItem('token',token);
        window.localStorage.setItem('username',email);
        this.setState({user: email});
        }).catch((error) => {
            
            console.log(error)
            //this.getError(error);
            //throw error;
           
        });
    }

    logout = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('username');
        this.setState({user : null})
    }

    render() {

        const { children } = this.props;
        return (
            <AuthContextProvider value={this.state}>
                {children}
            </AuthContextProvider>
        )
  }
}

export { AuthContext };
export default AuthProvider;
