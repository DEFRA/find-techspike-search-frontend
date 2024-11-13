import { proxyFetch } from '~/src/server/common/helpers/proxy.js'
import { config } from '~/src/config/config.js'
import { createLogger } from '~/src/server/common/helpers/logging/logger.js'

const logger = createLogger()

const getSearchResults = async (search) => {
  logger.info('Fetching search results from Gov UK Search API')

  const searchEndpoint = `${config.get('searchApiEndpoint')}/search.json?q=${search}&filter_organisations=department-for-environment-food-rural-affairs`
  logger.info(`searchEndpoint': ${searchEndpoint}`)

  const result = await proxyFetch(searchEndpoint, { method: 'GET' })
  const data = await result?.json()

  if (!data) {
    logger.error('Failed to fetch search results or invalid response structure')
    return {}
  }

  return data
}

export { getSearchResults }
