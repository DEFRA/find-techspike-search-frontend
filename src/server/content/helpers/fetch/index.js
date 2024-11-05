import { fetcher } from '~/src/server/common/helpers/fetch/index.js'
import { config } from '~/src/config/config.js'
import { createLogger } from '~/src/server/common/helpers/logging/logger.js'
const logger = createLogger()

const getContentUrls = async (filterFormat) => {
  logger.info('Fetching search results from Gov UK Search API for content urls')

  const searchEndpoint = `${config.get('searchApiEndpoint')}/search.json?filter_format=${filterFormat}`
  logger.info(`searchEndpoint': ${searchEndpoint}`)

  const result = await fetcher(searchEndpoint)

  if (!result?.json) {
    logger.error(
      'Failed to fetch search results for content urls or invalid response structure'
    )
    return {}
  }

  return result.json.results.map((result) => {
    return {
      title: result.title,
      url: config.get('contentApiEndpoint') + result.link,
      link: result.link
    }
  })
}

const getContent = async (url) => {
  logger.info('Fetching content from Gov UK API')

  const result = await fetcher(url)

  if (!result?.json) {
    logger.error('Failed to fetch content or invalid response structure')
    return {}
  }

  return result?.json
}

export { getContentUrls, getContent }
