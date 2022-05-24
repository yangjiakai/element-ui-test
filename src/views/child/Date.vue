<template>
  <div>
    <el-card class="box-card mt-5">
      <h1>子组件</h1>
      <label for="hour">hour</label>
      <input type="text" name="hour" v-model="hour" />
      <label for="minute">minute</label>
      <input type="text" name="minute" v-model="minute" />
      <label for="second">second</label>
      <input type="text" name="second" v-model="second" />

      <el-button type="primary" @click="changeTime">提交</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hour: "",
      minute: "",
      second: "",
    };
  },
  props: {
    time: {
      type: String,
      default: "",
    },
  },
  watch: {
    time(newValue) {
      this.hour = newValue.slice(0, 2);
      this.minute = newValue.slice(2, 4);
      this.second = newValue.slice(4);
    },
  },
  components: {},
  methods: {
    changeTime() {
      const time = this.hour + this.minute + this.second;
      this.$emit("update:time", time);
    },
  },
};
</script>

<style scoped>
</style>
