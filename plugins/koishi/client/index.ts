import Settings from './settings.vue'
import page from './page.vue'
import { defineExtension } from '@koishijs/client'
import {} from '@koishijs/plugin-market'
import {} from 'koishi-plugin-gocqhttp'

export default defineExtension((ctx) => {
  ctx.slot({
    type: 'market-settings',
    component: Settings,
  })
  ctx.page({
    name: 'koishi',
    path: '/custom-page',
    component: page,
  })
})
