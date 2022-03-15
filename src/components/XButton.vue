<template>
  <div class="x-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "xButton",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "medium",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<style scoped>
.x-button {
  display: inline-block;
  padding: 10px 20px;
  background: #000;
  color: #fff;
}
</style>
