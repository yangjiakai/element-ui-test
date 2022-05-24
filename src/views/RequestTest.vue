<template>
  <div>
    <h1>请求测试</h1>
    <button @click="print">print</button>
    <iframe
      :src="src"
      width="500"
      height="300"
      frameborder="0"
      type="application/pdf"
      name="pdf"
      @load="load"
    ></iframe>
    <a href="https://www.showakinen-koen.jp/document/facility/time.pdf"
      >手册下载</a
    >
    <el-button @click="openNewWindow" ref="defautButton">手册下载2</el-button>
    <el-button @click="file" ref="defautButton">文件下载</el-button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      src: "../assets/高度人材.pdf",
    };
  },
  components: {},

  created() {
    this.axios
      .get("https://www.showakinen-koen.jp/document/facility/time.pdf")
      .then((res) => {
        console.log(res);
      });
  },
  methods: {
    print() {
      this.src =
        "https://www.showakinen-koen.jp/wp-content/uploads/webmap_japanese.pdf";
      console.log(new Date().getTime());
    },
    load() {
      console.log(new Date().getTime());
    },
    // 打开一个新的窗口
    openNewWindow() {
      window.open(
        "https://www.showakinen-koen.jp/document/facility/time.pdf",
        "newWindow",
        "width=1200,height=800,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no"
      );
    },
    // 文件下载
    file() {
      this.axios
        .get("http://www.gov.cn/zhengce/pdfFile/2017_PDF.pdf", {
          responseType: "blob",
        })
        .then((res) => {
          const blob = new Blob([res.data], {
            type: "application/pdf",
          });
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = "文件下载";
          link.click();
        });
    },
    // 防止双击
    preventDoubleClick() {
      if (this.isDoubleClick) {
        return;
      }
      this.isDoubleClick = true;
      setTimeout(() => {
        this.isDoubleClick = false;
      }, 500);
    },
    // 防止连点
    preventConsecutiveClick() {
      if (this.isConsecutiveClick) {
        return;
      }
      this.isConsecutiveClick = true;
      setTimeout(() => {
        this.isConsecutiveClick = false;
      }, 500);
    },
  },
};
</script>

<style scoped>
</style>
