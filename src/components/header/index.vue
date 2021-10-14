<template>
  <div class="header">
    <a href="/" class="icon clearfix">
      <img src="https://openlayers.org/assets/theme/img/logo70.png" />
    </a>
    <a href="/" class="title"><div>My OpenLayers</div></a>
    <div class="router">
      <router-link to="/examples"><el-button type="text">examples</el-button></router-link>
      <router-link to="/home"><el-button type="text">Home</el-button></router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  background-color: #1f6b75;
  display: flex;
  color: #fff;
  > * {
    margin-left: 10px;
    height: 50px;
  }
  > a {
    display: block;
    // background-color: rgb(248, 249, 250);
    text-decoration: none;
    color: #fff;
  }
  .title {
    > div {
      font-size: 25.6px !important;
      font-family: "Segoe UI";
      font-weight: 400;
      height: 25.6px;
      margin-top: 10px;
      line-height: 25.6px;
      vertical-align: middle;
    }
  }
  .icon {
    img {
      width: 35px;
      height: 35px;
      margin-top: 7.5px;
    }
  }

  .router {
    margin-right: 20px;
    * {
      height: 50px;
      font-size: 16px;
      margin-left: 10px;
    }
    flex-grow: 1;
    > * {
      float: right;
    }
    // width: 100%;
    float: right;
  }
}
</style>
<style lang="scss">
.header {
  .router-link-active .el-button--text {
    color: #fff !important;
    cursor: default;
  }
  a {
    .el-button--text {
      color: rgba(255, 255, 255, 0.5) !important;
    }
    &:hover {
      &.router-link-active .el-button--text {
        color: #fff !important;
      }
      .el-button--text {
        color: rgba(255, 255, 255, 0.75) !important;
      }
    }
  }
}
</style>
