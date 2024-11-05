import { getContentUrls } from './helpers/fetch/index.js'

export const contentController = {
  async handler(_request, h) {
    const urls = await getContentUrls('farming_grant')
    return h.view('content/index', {
      pageTitle: 'Content',
      heading: 'Content',
      urls
    })
  }
}
