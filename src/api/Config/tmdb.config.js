const apiKey = '555dd368605c297c15840de44d6429b9'
const mediaType = {
    movie: "movie",
    tv: "tv"
}

const mediaCategory = {
    popular: "popular",
    upcoming: 'upcoming',
    nowplaying: 'now_playing',
    top_rated: "top_rated"
}


const backdropPath = (imgEndpoint) => `https://image.tmdb.org/t/p/original${imgEndpoint}`

const posterPath = (imgEndpoint) => `https://image.tmdb.org/t/p/w500${imgEndpoint}`

const youtubePath = (videoId) => `https://www.youtube.com/embed/${videoId}?controls=0`

const requests = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&witg_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
}

const tmdbConfigs = {
    backdropPath,
    posterPath,
    youtubePath,
    requests,
    mediaCategory,
    mediaType,
    apiKey,
}

export default tmdbConfigs