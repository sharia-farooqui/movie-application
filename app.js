import { api_url } from './config.js';
fetch(api_url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.results);
    })