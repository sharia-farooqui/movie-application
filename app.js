import { api_url } from './config.js';
const main=document.querySelector('#main');
const base_img_url='https://image.tmdb.org/t/p/w500';
//fetching data from API
function fetchMovies(url){
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data.results);
        displayMovies(data.results); //array
    })
}
function classColor(vote){
    if(vote>=8){
        return 'green';
    }else if(vote>=5){
        return 'orange';
    }else{
        return 'red';
    }
}
//displaying data
function displayMovies(data){
    //applying forEach() method on the array
    data.forEach(movie=>{
        const {poster_path,title,vote_average,overview}=movie;
        const movieDiv=document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML=`
        <img src="${base_img_url+poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${classColor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview"><h3>Overview</h3>${overview}</div>
        `
        main.appendChild(movieDiv);
    })
}

fetchMovies(api_url);
