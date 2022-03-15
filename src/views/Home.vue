<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <el-button>默认按钮</el-button>
    <el-button type="primary" @click="show">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger" @click="toAbout">危险按钮</el-button>
    <h1>{{ arr }}</h1>

    <hr />
    <div id="example-4">
      <input type="radio" id="one" value="One" v-model="document.picked" />
      <label for="one">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="document.picked" />
      <label for="two">Two</label>
      <br />
      <span>Picked: {{ document.picked }}</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      arr: [1, 3, 4].filter((item) => item > 1),
      document: {
        picked: "",
      },
    };
  },
  name: "Home",
  components: {},
  methods: {
    show() {
      this.$message.success("okkkkk");
    },
    toAbout() {
      localStorage.setItem("pass", "123");
      this.$router.push({ name: "About", params: { username: "eduardo" } });
    },
  },
};
</script>
