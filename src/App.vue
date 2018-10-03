<template>
  <el-container id="app">
    <el-header>
      <Header></Header>
    </el-header>

    <el-container>
      <el-aside v-if="$route.meta.show">

      </el-aside>

      <!-- <el-container> -->
        <el-main :class="{body: !$route.meta.show}">
          <router-view />
        </el-main>
      <!-- </el-container> -->

    </el-container>

    <el-footer>

    </el-footer>
  </el-container>
</template>

<script>
import Header from "./components/header.vue";

export default {
	name: "App",
	components: {
		Header
	}
};
</script>

<style>
/* @import url("//unpkg.com/element-ui@2.4.7/lib/theme-chalk/index.css"); */

* {
	margin: 0;
	padding: 0;
	font-size: 14px;
}

a {
	color: #333;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

.text-right {
	text-align: right;
}
</style>


<style scoped>
header {
	background: #4898f8;
}

main.body {
	max-width: 1200px;
}
</style>
