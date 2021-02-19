import axios from 'axios';

const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
}

async function fetchList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`);
    } catch (error) {
        console.log(' fetchAskList >>>>> ', error);
    }
}

async function fetchNewsList() {
    try {
        return await axios.get(`${config.baseUrl}news/1.json`);
    } catch (error) {
        console.log(' fetchAskList >>>>> ', error);
    }
}

async function fetchAskList() {
    try {
        return await axios.get(`${config.baseUrl}ask/1.json`);
    } catch (error) {
        console.log(' fetchAskList >>>>> ', error);
    }
}

async function fetchJobsList() {
    try {
        return await axios.get(`${config.baseUrl}jobs/1.json`);
    } catch (error) {
        console.log(' fetchJobsList >>>>> ', error);
    }
}

async function fetchUserInfo(sId) {
    try {
        return await axios.get(`${config.baseUrl}user/${sId}.json`);
    } catch (error) {
        console.log(' fetchUserInfo >>>>> ', error);
    }
    
}

async function fetchItemInfo(sId) {
    try {
        return await axios.get(`${config.baseUrl}item/${sId}.json`);
    } catch (error) {
        console.log(' fetchItemInfo >>>>> ', error);
    }
}



export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList

}