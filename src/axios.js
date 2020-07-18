import axios from "axios";

const instance = axios.create({
    base_url: "https://api.themoviedb.org/3", 
});

//instance.get('/foobar')
//https://api.themoviedb.org/3/foobar

export default instance;