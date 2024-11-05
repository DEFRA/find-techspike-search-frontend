import { fetcher } from '~/src/server/common/helpers/fetch/index.js'
import { config } from '~/src/config/config.js'
import { createLogger } from '~/src/server/common/helpers/logging/logger.js'
const logger = createLogger()

const getSearchResults = async (search) => {
  logger.info('Fetching search results from Gov UK Search API')

  const projectsEndpoint = `${config.get('searchApiEndpoint')}/search.json?q=${search}&filter_organisations=department-for-environment-food-rural-affairs`
  logger.info(`searchEndpoint': ${projectsEndpoint}`)

  const result = await fetcher(projectsEndpoint)

  if (!result?.json) {
    logger.error('Failed to fetch search results or invalid response structure')
    return {}
  }

  return result.json
}

export { getSearchResults }
