import { fetcher } from '~/src/server/common/helpers/fetch/index.js'
import { createLogger } from '~/src/server/common/helpers/logging/logger.js'
const logger = createLogger()

const getContent = async (url) => {
  logger.info('Fetching content from Gov UK API')

  const result = await fetcher(url)

  if (!result?.json) {
    logger.error('Failed to fetch content or invalid response structure')
    return {}
  }

  return result?.json
}

export { getContent }
