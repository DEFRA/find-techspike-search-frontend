import Joi from 'joi'
import { getSearchResults } from './helpers/fetch/index.js'

const homeControllerGet = {
  handler(_request, h) {
    return h.view('home/index', {
      pageTitle: 'Home',
      heading: 'Home'
    })
  }
}

const homeControllerPost = {
  options: {
    validate: {
      payload: Joi.object({
        search: Joi.string().min(3).max(30)
      }),
      failAction: (request, h, error) => {
        return h
          .view('home/index', {
            name: request.payload.name,
            errorMessage: {
              text: error.details[0].message
            }
          })
          .takeover()
      }
    }
  },
  async handler(request, h) {
    const search = request.payload.search
    const searchResults = await getSearchResults(search)

    if (searchResults?.results) {
      searchResults.results.forEach((result) => {
        if (result.public_timestamp) {
          const date = new Date(result.public_timestamp)
          result.public_timestamp = date.toLocaleDateString('en-GB')
        }
      })
    }

    return h.view('home/index', {
      pageTitle: 'Home',
      heading: 'Home',
      searchResults: searchResults?.results,
      search
    })
  }
}

export { homeControllerGet, homeControllerPost }
