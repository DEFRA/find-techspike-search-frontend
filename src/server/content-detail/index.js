import { contentDetailController } from '~/src/server/content-detail/controller.js'

/**
 * Sets up the routes used in the /about page.
 * These routes are registered in src/server/router.js.
 * @satisfies {ServerRegisterPluginObject<void>}
 */
export const contentDetail = {
  plugin: {
    name: 'content-detail',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/content-detail',
          ...contentDetailController
        }
      ])
    }
  }
}

/**
 * @import { ServerRegisterPluginObject } from '@hapi/hapi'
 */
