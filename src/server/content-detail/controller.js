import { log } from 'console'
import { getContent } from './helpers/fetch/index.js'
import { config } from '~/src/config/config.js'

export const contentDetailController = {
  async handler(_request, h) {
    const link = config.get('contentApiEndpoint') + _request.query.link
    const content = await getContent(link)
    log(content)

    return h.view('content-detail/index', {
      pageTitle: 'Content Detail',
      heading: 'Content Detail',
      breadcrumbs: [
        {
          text: 'Content',
          href: '/content'
        },
        {
          text: 'Content detail'
        }
      ],
      link,
      content
    })
  }
}
