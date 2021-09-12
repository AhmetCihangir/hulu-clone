const API_KEY = process.env.API_KEY;

export default {
    fetchTrending : {
        title : "Trending",
        url : `/trending/all/week?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`
    },
    fetchTopRated: {
        title : "Top Rated",
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`
    },
    fetchActionMovies : {
        title : "Action",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc&page=1`
    },
    fetchComedyMovies : {
        title : "Comedy",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&page=1`
    },
    fetchHorrorMovies : {
        title : "Horror",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc&page=1`
    },
    fetchRomanceMovies : {
        title : "Romance",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc&page=1`
    },
    fetchMystery : {
        title : "Mystery",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=9648&sort_by=popularity.desc&page=1`
    },
    fetchSciFi : {
        title : "Sci-Fi",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=878&sort_by=popularity.desc&page=1`
    },
    fetchWestern : {
        title : "Western",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=37&sort_by=popularity.desc&page=1`
    },
    fetchAnimation : {
        title : "Animation",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&page=1`
    },
    fetchTV : {
        title : "TV Movie",
        url : `/discover/movie?api_key=${API_KEY}&with_genres=10770&sort_by=popularity.desc&page=1`
    },
}