import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer KHzFonMNVGMeu7gIPzJp0-FJuwoIumzLPu56Wlj3B0HVXGtFfYriKNi403Lv4jUtt5M--l9AX6h7mpuLHW4RehNPeBS6MJH1PKeuHw5d8b8uDkdcv8EbqkwpD8mdXnYx'
    }
});