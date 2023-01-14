const apiKey = '555dd368605c297c15840de44d6429b9'
const mediaType = {
    movie: "movie",
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
const youtubeThumnail = (videoId, size) => `https://img.youtube.com/vi/${videoId}/${size}.jpg`

const requests = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&witg_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
}

const tmdbConfigs = {
    backdropPath,
    youtubeThumnail,
    posterPath,
    youtubePath,
    requests,
    mediaCategory,
    mediaType,
    apiKey,
}

export default tmdbConfigs