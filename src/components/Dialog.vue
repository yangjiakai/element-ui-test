<template>
  <div class="dialog" v-if="showConfirm">
    <h1>Dialog</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showConfirm: false, // 控制弹框显示和隐藏
    };
  },
  watch: {
    // 因为无法在子组件直接修改props的value属性，所以借助value属性来修改data里面的showfirm属性
    value(val) {
      this.showConfirm = val;
    },
  },

  components: {},
  methods: {},
  props: {
    // 父组件调用通过v-model属性传入
    value: {
      type: Boolean,
      default: false,
    },

    content: {
      type: String,
      default: "这里是提示文本",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    confirmText: {
      type: String,
      default: "确认",
    },
  },
};
</script>

<style scoped>
.dialog {
  position: absolute;
  left: 50%;
  height: 50%;
  width: 300px;
  height: 200px;
  transform: translate(-50%, -50%);
  background-color: antiquewhite;
}
</style>
