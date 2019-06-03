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
        'Authorization': `Bearer ${token}`,
    }

    return { headers };
}

function getLogin(email, password) {
    return axios.get(`${baseUrl}/user/login?email=${email}&password=${password}`);
}

function getRegister(email, password) {
    return axios.get(`${baseUrl}/user/register?email=${email}&password=${password}`);
}

function getAnalyse(screenName,mode) {
    return axios.get(`${baseUrl}/tweet?screenName=${screenName}&mode=${mode}`,getHeader());
}

function getTweets() {
    return axios.get(`${baseUrl}/tweets`,getHeader());
}

function getTweetsResponses(tweetId) {
    return axios.get(`${baseUrl}/tweetResponses?id=${tweetId}`,getHeader());
}

function getDeleteTweet(tweetId) {
    return axios.get(`${baseUrl}/tweet/delete?id=${tweetId}`,getHeader());
}

export const userService = {
    getLogin,
    getRegister,
    getAnalyse,
    getTweets,
    getTweetsResponses,
    getDeleteTweet
};
