<template>
  <div>
    <h1>请求测试</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {
    this.axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        console.log(res);
      });
  },
};
</script>

<style scoped>
</style>
