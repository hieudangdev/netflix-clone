
import PublicClient from './../Config/ClientApi'
const apikey = process.env.REACT_APP_API_KEY
const mediaEndpoint = {
    list: ({ mediaType, mediaCategory, page }) => `${mediaType}/${mediaCategory}?api_key=${apikey}&page=${page}`,
    detail: ({ mediaType, mediaId }) => `${mediaType}/${mediaId}?api_key=${apikey}`,
    search: ({ mediaType, query, page }) => `search/${mediaType}?api_key=${apikey}&language=en-US&query=${query}&page=${page}&include_adult=false`,
    listcast: ({ mediaType, mediaId }) => `${mediaType}/${mediaId}/casts?api_key=${apikey}`,
    listsimilar: ({ mediaType, mediaId }) => `${mediaType}/${mediaId}/similar?api_key=${apikey}&language=en-US&page=1`
}

const mediaApi = {
    getList: async ({ mediaType, mediaCategory, page }) => {
        try {
            const response = await PublicClient.get(
                mediaEndpoint.list({ mediaType, mediaCategory, page })
            )
            return { response }
        } catch (err) {
            return { err }
        }
    },
    getDetail: async ({ mediaType, mediaId }) => {
        try {
            const response = await PublicClient.get(
                mediaEndpoint.detail({ mediaType, mediaId })
            )
            return { response }
        } catch (err) {
            return { err }
        }
    },
    getCast: async ({ mediaType, mediaId }) => {
        try {
            const response = await PublicClient.get(
                mediaEndpoint.listcast({ mediaType, mediaId })
            )
            return { response }

        } catch (err) { return { err } }
    },
    getSimiler: async ({ mediaType, mediaId }) => {
        try {
            const response = await PublicClient.get(
                mediaEndpoint.listsimilar({ mediaType, mediaId })
            )
            return { response }
        } catch (err) { return { err } }
    },
    search: async ({ mediaType, query, page }) => {
        try {
            const response = await PublicClient.get(
                mediaEndpoint.search({ mediaType, query, page })
            )
            return { response }
        } catch (err) {
            return { err }
        }
    }
}
export default mediaApi