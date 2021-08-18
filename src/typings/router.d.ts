import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    name: string
    icon?: string
    showPageHeader?: boolean
  }
}
