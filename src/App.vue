<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/componentTest">组件测试|</router-link>
      <router-link to="/requestTest">请求测试|</router-link>
      <router-link to="/child">父子组件双向数据绑定</router-link>
    </div>
    <h1>{{ $store.state.age }}</h1>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import { mapState } from "vuex";
export default {
  name: "Vue",
  watch: {
    age: function (newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["age"]),
  },
  created() {},
  components: {},

  methods: {},
};
</script>