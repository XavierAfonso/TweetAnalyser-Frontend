const axios = require('axios');

// Header
function getHeader() {

    const token = window.localStorage.getItem('token');

    let headers = {
        'Content-Type': 'application/json',
        'Authorization': token,
    }

    return { headers };
}

function postLogin(username, password) {
    return axios.post('/users/signin', { username, password })
}

function postRegister(firstname, lastname, realUsername, username, password) {
    return axios.post('/users/signup', { firstname, lastname, realUsername, username, password });
}

function getMe() {
    return axios.get(`/users/me`, getHeader());
}

export const userService = {
    getMe,
    postLogin,
    postRegister,
};
