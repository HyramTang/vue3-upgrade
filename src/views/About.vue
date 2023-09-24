<template>
  <div class="about">
    <b-form-group>
      <b-button>按钮展示</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="success">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
    </b-form-group>
    <b-form-group>
      <b-button variant="success" @click="showModal = true"
        >显示模态框</b-button
      >
      <b-button variant="primary" @click="$bvModal.show('bv-modal-example')"
        >实例方法调用模态框</b-button
      >
    </b-form-group>
    <b-modal id="bv-modal-example" v-model="showModal" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
</script>

<style lang="less">
.btn + .btn {
  margin-left: 8px;
}
</style>
