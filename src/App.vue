<template>
	<el-container id="app">
		<el-header>
			<Header></Header>
		</el-header>
		<el-container>
			<el-aside v-if="$route.meta.show" style="width: 240px;">
				<Sider></Sider>
			</el-aside>
			<!-- <el-container> -->
			<el-main :class="{body: !$route.meta.show}">
				<router-view/>
			</el-main>
			<!-- </el-container> -->
		</el-container>
		<el-footer></el-footer>
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
	watch: {
		"$store.state.user.info": function(v) {
			if (!v && this.$route.meta.login) {
				this.uri = this.$route.path;
				this.$router.push({ path: "/login" });
			} else if (v && (this.$route.name === "Login" || this.$route.name === "Reg")) {
				if (this.uri === "") this.$router.push({ path: "/home" });
				else this.$router.push({ path: this.uri });
			}
		}
	},
	mounted() {
		console.log(this.$router);
		if (!this.$store.state.user.info && this.$route.meta.login) {
			this.uri = this.$route.path;
			this.$router.push({ path: "/login" });
		}
	}
};
</script>

<style>
@import url("//at.alicdn.com/t/font_860942_6k7yuves3ae.css");

* {
	margin: 0;
	padding: 0;
	font-size: 14px;
}
</style>


<style scoped>
header {
	background: #545c64;
	padding: 0;
}

main.body {
	margin: auto;
	max-width: 800px;
}
</style>
