import { proxyFetch } from '~/src/server/common/helpers/proxy.js'
import { createLogger } from '~/src/server/common/helpers/logging/logger.js'
const logger = createLogger()

const getContent = async (url) => {
  logger.info('Fetching content from Gov UK API')

  const result = await proxyFetch(url, { method: 'GET' })
  const data = await result?.json()

  if (!data) {
    logger.error('Failed to fetch content or invalid response structure')
    return {}
  }

  return data
}

export { getContent }
