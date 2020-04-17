<template>
  <div class="main">
    <div class="main-header">
    </div>
    <div class="main-footer">
      <el-button type="success" icon="el-icon-check" style="background-color:#371a9f" circle @click="openPage('about')"></el-button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    openPage(url) {
      window.location.href += url + "/";
    },
    openHomePage(url) {
      window.location.href = url;
    }
  }
};
</script>

<style>
html,
body,
#app,
.theme-container,
.custom-layout {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url("../public/img/back.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.main-header {
  display: flex;
  flex-direction: column;
  vertical-align: center;
  align-content: center;
  margin-bottom: 20px;
}
.main-header p {
  margin: 0px;
}
.main-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin-top: 450px;
  z-index: 30;
}
</style>


