/**
 * @param {Partial<Request> | null} request
 */
export function buildNavigation(request) {
  return [
    {
      text: 'Search',
      url: '/',
      isActive: request?.path === '/'
    },
    {
      text: 'Content',
      url: '/content',
      isActive: request?.path === '/content'
    }
  ]
}

/**
 * @import { Request } from '@hapi/hapi'
 */
