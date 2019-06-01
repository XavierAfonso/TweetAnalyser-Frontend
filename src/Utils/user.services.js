const axios = require('axios');

let baseUrl

// Set the base Url
try {
    baseUrl =
        window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
            ? 'http://localhost:9000'
            : '' //url deployement
} catch (err) {
    console.log('Window not loaded')
}

// Header
function getHeader() {

    const token = window.localStorage.getItem('token');

    let headers = {
        //'Content-Type': 'application/json',
        'Authorization': `${token}`,
    }

    return { headers };
}

function getLogin(email, password) {
    return axios.get(`${baseUrl}/user/login?email=${email}&password=${password}`);
}

function getRegister(email, password) {
    return axios.get(`${baseUrl}/user/register?email=${email}&password=${password}`);
}

function getAnalyse(screenName) {
    return axios.get(`${baseUrl}/tweet?tweetId=${screenName}`,getHeader());
}

function getTweets() {
    return axios.get(`${baseUrl}/tweets`,getHeader());
}

function getTweetsResponses() {
    return axios.get(`${baseUrl}/tweetsResponses`,getHeader());
}

/*function getMe() {
    return axios.get(`/users/me`, getHeader());
}*/

export const userService = {
    //getMe,
    getLogin,
    getRegister,
    getAnalyse,
    getTweets,
    getTweetsResponses
};
