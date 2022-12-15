import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    // /**
    //  * @property {string | null} poster_path,
    //  * @property {boolean} adult,
    //  * @property {strin} overview, 
    //  * @property {string} title,
    //  * @property {string} original_title,
    //  * @property {string} original_language,
    //  * @property {number} vote_average
    //  * @property {string} name 
    //  * @property {string} original_name 
    //  * 
    //  *  
    //  */
    searchText: "world",
    moviesList: [],
    seriesTvList: [],
    error: "",
    img: {
        link: "https://image.tmdb.org/t/p/",
        size: "w342",
    }
})

export function fetchMovies(){
    axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
            api_key: "c1a7d4ce91a21746e829397da97ae1e7",
            query: store.searchText,
        }
    })
        .then( (resp) => {
            console.log(resp);
            store.moviesList = resp.data.results;
        })
        .catch(() => {
            store.error = "Abbiamo un guasto";
        })
}

export function fetchSeriesTv(){
    axios.get("https://api.themoviedb.org/3/search/tv", {
        params: {
            api_key: "c1a7d4ce91a21746e829397da97ae1e7",
            query: store.searchText
        }
    })
    .then( (resp) =>{
        store.seriesTvList = resp.data.results;
    })
    .catch(() => {
        store.error="Abbiamo un guasto";
    })
}