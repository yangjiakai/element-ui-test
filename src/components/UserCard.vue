<template>
  <div>
    <div>
      <h3>
        姓名：<span class="x-name"><slot name="name"></slot></span>
      </h3>
      <h3>
        年龄：<span class="x-age"><slot name="age"></slot></span>
      </h3>
      <h3>
        性别：<span class="x-sex"><slot name="sex"></slot></span>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "userCard",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<style scoped>
.x-name {
  color: rgb(255, 115, 0);
}

.x-age {
  color: rgb(42, 83, 197);
}

.x-sex {
  color: rgb(6, 100, 177);
}
</style>
