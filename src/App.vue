<template>
	<el-container id="app" ref="app" class="wrapper">
		<el-header>
			<Header :collapse="collapse"></Header>
		</el-header>
		<el-container>
			<el-aside :class="{collapse}" v-if="$route.meta.show">
				<el-scrollbar>
					<Sider :collapse="collapse"></Sider>
				</el-scrollbar>
			</el-aside>
			<!-- <el-container> -->
			<el-main :class="{body: !$route.meta.show}">
				<el-scrollbar>
					<router-view/>
				</el-scrollbar>
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
			uri: "",
			collapse: document.documentElement.clientWidth < 500
		};
	},
	components: {
		Header,
		Sider
	},
	mounted() {
		window.onresize = () => {
			this.collapse = document.documentElement.clientWidth < 500;
		};
	}
};
</script>

<style>
@import url("//at.alicdn.com/t/font_860942_ktbhb8ijtc.css");

* {
	margin: 0;
	padding: 0;
	font-size: 14px;
}

.el-scrollbar {
	height: 100%;
}

.el-scrollbar__wrap {
	overflow-x: hidden !important;
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

aside.collapse {
	width: 64px !important;
	background: #545c64;
}

main.body {
	margin: auto;
	max-width: 800px;
}
</style>
