import { defineStore } from 'pinia'
import { createPinia } from 'pinia';

const pinia = createPinia();

export const rootStore = defineStore('root', {
  state: () => {
    return { count: 0 }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})

export default pinia;