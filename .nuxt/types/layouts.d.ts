import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/mikey/git/layertest/base/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}