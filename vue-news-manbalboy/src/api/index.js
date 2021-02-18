import axios from 'axios';

const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(sId) {
    return axios.get(`${config.baseUrl}user/${sId}.json`);
}

function fetchItemInfo(sId) {
    return axios.get(`${config.baseUrl}item/${sId}.json`);
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList

}