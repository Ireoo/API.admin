<template>
	<el-container id="app" class="wrapper">
		<el-header>
			<Header></Header>
		</el-header>
		<el-container>
			<el-aside v-if="$route.meta.show">
				<Sider></Sider>
			</el-aside>
			<!-- <el-container> -->
			<el-main :class="{body: !$route.meta.show}">
				<router-view/>
			</el-main>
			<!-- </el-container> -->
		</el-container>
		<!--<el-footer></el-footer>-->
	</el-container>
</template>

<script>
import Header from "./components/header.vue";
import Sider from "./components/sider.vue";

export default {
	name: "App",
	data() {
		return {
			uri: ""
		};
	},
	components: {
		Header,
		Sider
	},
	mounted() {}
};
</script>

<style>
@import url("//at.alicdn.com/t/font_860942_73ypiiiy1mc.css");

* {
	margin: 0;
	padding: 0;
	font-size: 14px;
}
</style>


<style scoped>
.wrapper {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

header {
	background: #545c64;
	padding: 0;
}

aside {
	width: 240px !important;
	background: #545c64;
}

main.body {
	margin: auto;
	max-width: 800px;
}
</style>
