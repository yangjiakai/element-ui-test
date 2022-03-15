<template>
  <div>
    <h1>组件测试页面</h1>
    <button @click="show = !show">切换</button>
    <x-button type="primary" size="large">按钮</x-button>
    <x-button type="primary" size="large">厉害了</x-button>
    <user-card>
      <template #name> yjk </template>
      <template #age> 188 </template>
      <template #sex> man </template>
    </user-card>
    <user-card>
      <template #name> pdf </template>
      <template #age> 999 </template>
      <template #sex> gril </template>
    </user-card>
    <x-dialog v-model="show"></x-dialog>

    <hr />
  </div>
</template>

<script>
import xButton from "../components/XButton";
import userCard from "../components/UserCard";
import xDialog from "../components/Dialog";
import Axios from "axios";
export default {
  data() {
    return {
      show: false,
    };
  },
  components: { xButton, userCard, xDialog },
  methods: {},
  created() {},
  mounted() {
    Axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      this.show = true;
      console.log(res);
    });
  },
};
</script>

<style scoped>
</style>
