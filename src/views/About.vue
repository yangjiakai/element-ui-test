<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button @click="jump">google</button>
    {{ username }}
    {{ pass }}
    <hr />
    <div v-for="(item, index) in list" :key="item.id">
      <p>{{ item.id }}</p>
      <p>{{ item.name }}</p>
      <div id="example-4">
        <input
          type="radio"
          id="one"
          value="1"
          v-model="item.mode"
          @change="changeMode($event, item, index)"
        />
        <label for="one">One</label>
        <br />
        <input
          type="radio"
          id="two"
          value="2"
          v-model="item.mode"
          @change="changeMode($event, item, index)"
        />
        <label for="two">Two</label>
        <br />
        <input
          type="radio"
          id="three"
          value="3"
          v-model="item.mode"
          @change="changeMode($event, item, index)"
        />
        <label for="three">Three</label>

        <br />
        <hr />
      </div>
      <button @click="update">update</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapMutations } from "vuex";
import urlJson from "../../public/url.json";
export default {
  name: "About",
  data() {
    return {
      googleUrl: urlJson.url1,
      username: "",
      pass: "",
      mode: "",
      list: [
        {
          id: "1",
          mode: "1",
          name: "china",
        },
        {
          id: "2",
          mode: "2",
          name: "japan",
        },
        {
          id: "3",
          mode: "3",
          name: "asian",
        },
      ],
      index: 0,
    };
  },
  created() {
    console.log(this.$route);
    this.username = this.$route.params.username;
    this.pass = localStorage.getItem("pass");
    let str1 = 1;
    let str2 = 2;
    let str3 = str1 + str2;

    console.log(str3);
  },
  components: {},

  methods: {
    ...mapMutations([
      "upadteAge", // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    ]),
    show() {
      this.$message.success("okkkkk");
    },

    jump() {
      window.location.href = this.googleUrl;
    },

    changeMode(e, item, index) {
      this.index = index;
      console.log(e);

      console.log(item);
      console.log(index);
    },
    update() {
      this.upadteAge(3);
    },
  },
};
</script>
