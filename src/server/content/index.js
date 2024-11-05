import { contentController } from '~/src/server/content/controller.js'

/**
 * Sets up the routes used in the /about page.
 * These routes are registered in src/server/router.js.
 * @satisfies {ServerRegisterPluginObject<void>}
 */
export const content = {
  plugin: {
    name: 'content',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/content',
          ...contentController
        }
      ])
    }
  }
}

/**
 * @import { ServerRegisterPluginObject } from '@hapi/hapi'
 */
