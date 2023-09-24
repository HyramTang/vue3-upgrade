<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div>
      <b-button variant="warning" @click="onClickCount"
        >🍍 Pinia 计数 {{ root.count }}</b-button
      >
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import { rootStore } from "@/stores/index";

const root = rootStore();
// 自动补全！ ✨
const onClickCount = () => {
  root.$patch({ count: root.count + 1 });
};
// 或使用 action 代替
// const onClickCount = () => root.increment();
</script>
