<template>
  <div>
    <h1>Child</h1>
    <el-button type="primary">主要按钮</el-button>
    <hr class="my-10" />
    <h4>父组件输入框</h4>
    <label for="time">Time</label>
    <input type="text" name="time" v-model="time" />
    <hr class="my-10" />
    <date :time.sync="time"></date>
  </div>
</template>

<script>
import Date from "./Date.vue";
export default {
  data() {
    return {
      time: "2019-12-12",
    };
  },
  components: { Date },
  methods: {},
};
</script>

<style scoped>
.box-card {
  width: 480px;
}
</style>
