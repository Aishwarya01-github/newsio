import axios from 'axios'

const api = '020124d7d46d4cc1aaa2cba748b5555e'
const url = 'https://newsapi.org/v2'

export const fetchSources = async () => {
  const requestSource = `sources?apiKey=`
  try {
    const {
      data: { sources },
    } = await axios.get(`${url}/${requestSource}${api}`)

    return sources.map((source) => source)
  } catch (error) {
    return error
  }
}

export const fetchNews = async (request) => {
  try {
    const {
      data: { articles },
    } = await axios.get(
      `${url}/${request.category}?${request.query}&pageSize=${request.results}&apiKey=${api}`
    )

    return articles.map((article) => article)
  } catch (error) {
    return error
  }
}
