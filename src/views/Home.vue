<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button ref="button">AAAA</button>

    <el-button ref="defautButton">默认按钮</el-button>
    <el-button type="primary" @click="show">主要按钮</el-button>
    <el-button type="success" @click="findTodos">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger" @click="toAbout">危险按钮</el-button>
    <h1>{{ arr }}</h1>

    <label for="">
      mingzi
      <input type="input" v-model="telephone" @change="change" />
    </label>
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
import _ from "lodash";
import Axios from "axios";
// @ is an alias to /src

export default {
  data() {
    return {
      arr: [1, 3, 4].filter((item) => item > 1),
      document: {
        picked: "",
      },
      telephone: "",
    };
  },
  watch: {
    // 因为无法在子组件直接修改props的value属性，所以借助value属性来修改data里面的showfirm属性
    telephone(newValue) {
      let temValue = newValue.trim().replace(/-/g, "");
      if (temValue.length <= 8) {
        this.telephone = temValue;
      } else if (temValue.length > 8 && temValue.length <= 12) {
        this.telephone =
          temValue.substring(0, 8) +
          "-" +
          temValue.substring(8, temValue.length);
      } else if (temValue.length > 12 && temValue.length <= 16) {
        this.telephone =
          temValue.substring(0, 8) +
          "-" +
          temValue.substring(8, 12) +
          "-" +
          temValue.substring(12, temValue.length);
      } else if (temValue.length > 16 && temValue.length <= 20) {
        this.telephone =
          temValue.substring(0, 8) +
          "-" +
          temValue.substring(8, 12) +
          "-" +
          temValue.substring(12, 16) +
          "-" +
          temValue.substring(16, temValue.length);
      } else if (temValue.length > 20 && temValue.length <= 33) {
        this.telephone =
          temValue.substring(0, 8) +
          "-" +
          temValue.substring(8, 12) +
          "-" +
          temValue.substring(12, 16) +
          "-" +
          temValue.substring(16, 20) +
          "-" +
          temValue.substring(20, temValue.length);
      } else {
        this.telephone =
          temValue.substring(0, 8) +
          "-" +
          temValue.substring(8, 12) +
          "-" +
          temValue.substring(12, 16) +
          "-" +
          temValue.substring(16, 20) +
          "-" +
          temValue.substring(20, 33) +
          "-" +
          temValue.substring(33, temValue.length);
      }

      // this.telephone = temValue;

      // if (newValue > oldValue) {
      //   if (newValue.length === 4 || newValue.length === 9) {
      //     var pre = newValue.substring(0, newValue.length - 1);
      //     var last = newValue.substr(newValue.length - 1, 1);
      //     this.telephone = pre + " " + last;
      //   } else {
      //     this.telephone = newValue;
      //   }
      // } else {
      //   if (newValue.length === 9 || newValue.length === 4) {
      //     this.telephone = this.telephone.trim();
      //   } else {
      //     this.telephone = newValue;
      //   }
      // }
    },
  },
  computed: {},
  name: "Home",
  components: {},
  mounted() {
    console.log(this.$refs.defautButton);
    this.$refs.defautButton.$el.focus();
    this.$refs.button.focus();
  },
  methods: {
    show() {
      this.$message.success("okkkkk");
    },
    change(e) {
      console.log(e.target.value);
    },

    toAbout() {
      localStorage.setItem("pass", "123");
      this.$router.push({ name: "About", params: { username: "eduardo" } });
    },

    findTodos() {
      _.debounce(
        () => {
          Axios.get("https://jsonplaceholder.typicode.com/todos/1").then(
            (res) => {
              console.log(res);
            }
          );
        },
        2000,
        {
          leading: false,
          trailing: true,
        }
      )();
    },
    // 获取用户信息列表
    getUserList() {
      Axios.get("/api/user/list").then((res) => {
        console.log(res);
      });
    },

    // 打印预览
    print() {
      window.print();
    },

    // 冒泡排序
    bubbleSort() {
      let arr = [1, 3, 4, 2, 5, 6, 7, 8, 9, 10];
      let len = arr.length;
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
      console.log(arr);
    },

    // 校验表单
    validateForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message({
            message: "验证通过",
            type: "success",
          });
        } else {
          this.$message.error("验证失败");
        }
      });
    },

    // 定时3秒后执行
    setTimeout() {
      setTimeout(() => {
        this.$message.success("成功");
      }, 3000);
    },

    // 获取当前时间
    getTime() {
      console.log(new Date());
    },

    // 获取iframe加载时间
    getIframeTime() {
      console.log(window.frames["pdf"].document.getElementById("pageNumber"));
    },
  },
};
</script>
