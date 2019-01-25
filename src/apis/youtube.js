import axios from 'axios';

const KEY = 'AIzaSyApsVAswlHZcGNEur-_kDmEDgFBt0Su49A';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
