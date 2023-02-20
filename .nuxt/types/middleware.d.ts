import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/mikey/git/layertest/base/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}