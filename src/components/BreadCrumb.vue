<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="breadCrumbItem in breadCrumbList"
        :key="breadCrumbItem.path"
        :to="breadCrumbItem.path"
        >{{ breadCrumbItem.meta.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    breadCrumbList() {
      return this.$route.matched;

      // return this.$route.matched.map((item) => {
      //   return {
      //     path: item.path,
      //     name: item.name,
      //   };
      // });
    },
  },
  components: {},
  methods: {},
  mounted() {
    // 打印路由信息
    console.log(this.$route);
  },
};
</script>

<style scoped>
</style>
