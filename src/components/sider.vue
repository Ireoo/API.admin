<template>
	<el-row>
		<el-col>
			<!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group> -->
<el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
	  menu-trigger="click"
	  :router="true"
	   :collapse="isCollapse">
      <el-submenu v-for="(route, index) in routes" :key="index" :index="route.path">
        <template slot="title">
          <i :class="route.meta.icon"></i>
          <span>{{route.meta.title}}</span>
        </template>
		      <el-menu-item :index="route.path">
        <i :class="route.meta.icon"></i>
        <span slot="title">{{route.meta.title}}</span>
      </el-menu-item>
      <el-menu-item v-for="(router, i) in route.child" :key="i" :index="router.path">
        <i :class="router.meta.icon"></i>
        <span slot="title">{{router.meta.title}}</span>
      </el-menu-item>
      </el-submenu>

    </el-menu>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			isCollapse: false,
			show: ["Admin"]
		};
	},
	methods: {
		logout() {
			this.$store.commit("account.REMOVE");
		}
	},
	computed: {
		routes() {
			let routes = this.$router.options.routes.filter(route => !this.show.indexOf(route.name)).map(route => {
				let r = JSON.parse(JSON.stringify(route));
				r.child = this.$router.options.routes.filter(t => new RegExp(`^${r.path}\/`).test(t.path));
				return r;
			});
			return routes;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
i {
	margin-right: 10px;
}
</style>
