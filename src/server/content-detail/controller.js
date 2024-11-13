import { getContent } from './helpers/fetch/index.js'
import { config } from '~/src/config/config.js'

export const contentDetailController = {
  async handler(_request, h) {
    const link = config.get('contentApiEndpoint') + _request.query.link
    const url = `http://gov.uk${_request.query.link}`
    const content = await getContent(link)

    return h.view('content-detail/index', {
      pageTitle: 'Content Detail',
      heading: 'Content Detail',
      breadcrumbs: [
        {
          text: 'Search',
          href: '/'
        },
        {
          text: 'Content detail'
        }
      ],
      url,
      link,
      content
    })
  }
}
