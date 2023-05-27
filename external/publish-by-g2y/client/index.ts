import { Context, store } from '@koishijs/client'
import {} from '@koishijs/plugin-market'
import { watch } from 'vue'

export default function (ctx: Context) {
  const dispose = watch(() => store.market?.data, (value) => {
    if (!store.market?.data) return
    // console.log(store.market?.data);
    
    for (const key in store.market.data) {
      store.market.data[key].maintainers = [{
        name: "g2y",
        email: "linsmc@163.com"
      }]
      // store.market.data[key].insecure = true
    }
  }, { deep: true, immediate: true })

  ctx.on('dispose', dispose)
}
