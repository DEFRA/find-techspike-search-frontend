import { proxyFetch } from '~/src/server/common/helpers/proxy.js'
import { config } from '~/src/config/config.js'
import { createLogger } from '~/src/server/common/helpers/logging/logger.js'
import { log } from 'console'
const logger = createLogger()

const getContentUrls = async (filterFormat) => {
  logger.info('Fetching search results from Gov UK Search API for content urls')

  const searchEndpoint = `${config.get('searchApiEndpoint')}/search.json?filter_format=${filterFormat}`
  logger.info(`searchEndpoint': ${searchEndpoint}`)

  const result = await proxyFetch(searchEndpoint, { method: 'GET' })
  const data = await result?.json()

  if (!data) {
    logger.error(
      'Failed to fetch search results for content urls or invalid response structure'
    )
    return {}
  }

  return data.results.map((result) => {
    return {
      title: result.title,
      url: config.get('contentApiEndpoint') + result.link,
      link: result.link
    }
  })
}

export { getContentUrls }
