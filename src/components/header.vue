<template>
	<el-menu
		:default-active="$route.path"
		mode="horizontal"
		background-color="#515961"
		text-color="#fff"
		:router="true"
		active-text-color="#ffd04b">

		<el-row>

			<el-col :span="12">
				<el-menu-item class="logo" index="/home">
					<i class="iconfont icon-api logo"></i>
					<span slot="title">琦益数据管理中心</span>
				</el-menu-item>
				<el-submenu v-for="(route, index) in routes" :key="index" :index="route.path">
					<template slot="title">
						<span slot="title">{{route.meta.title}}</span>
					</template>
					<el-menu-item :index="route.path">
						<span slot="title">{{route.meta.title}}</span>
					</el-menu-item>
					<el-menu-item v-for="(router, i) in route.child" :key="i" :index="router.path">
						<span slot="title">{{router.meta.title}}</span>
					</el-menu-item>
				</el-submenu>
			</el-col>

			<el-col class="right" :span="12">
				<el-menu-item v-if="!$store.state.user.info" index="/login">
					<i class="iconfont icon-denglu"></i>
					<span slot="title">登陆</span>
				</el-menu-item>

				<el-menu-item v-if="!$store.state.user.info" index="/reg">
					<span slot="title">注册</span>
				</el-menu-item>


				<el-menu-item v-if="$store.state.user.info" index="/account">
					<i class="iconfont icon-denglu"></i>
					<span slot="title">{{$store.state.user.info.username}}</span>
				</el-menu-item>

				<el-menu-item v-if="$store.state.user.info" index="/logout" @click="logout">
					<span slot="title">退出</span>
				</el-menu-item>
			</el-col>

		</el-row>

	</el-menu>
</template>

<script>
export default {
	name: "Header",
	methods: {
		logout() {
			this.$store.commit("account.REMOVE");
			location.href = "/";
		}
	},
	data() {
		return {
			isCollapse: false,
			show: ["App"]
		};
	},
	computed: {
		routes() {
			let routes = this.$router.options.routes
				.filter(route => this.show.indexOf(route.name) > -1)
				.sort((a, b) => a.meta.index - b.meta.index)
				.map(route => {
					let r = JSON.parse(JSON.stringify(route));
					r.child = this.$router.options.routes
						.filter(t => new RegExp(`^${r.path}/`).test(t.path))
						.sort((a, b) => a.meta.index - b.meta.index);
					// console.log(r);
					return r;
				});
			// console.log(routes);
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

.el-menu-item.logo {
	width: 240px;
	background: RGB(65, 71, 78) !important;
}

.el-col {
	height: 60px;
}

.el-col.right {
	text-align: right;
}

.el-col > .el-menu-item,
.el-col > .el-submenu {
	height: 60px;
	line-height: 60px;
	display: inline-block;
}

i.logo {
	font-size: 24px;
	color: #4898f8;
	/*font-weight: bold;*/
}

a {
	text-align: center;
	display: block;
	line-height: 40px;
	font-size: 14px;
	color: #fff;
}

a:hover {
	color: #ffd04b;
	text-decoration: none;
}

ul {
	list-style: none;
}

/* ul.left > li {
            line-height: 40px;
            float: left;
        }

        ul.left > li > a {
            font-size: 14px;
            font-weight: bold;
        } */

ul.right > li {
	text-align: right;
}

ul.right > li > a {
	display: inline-block;
}

ul.right > li > button,
ul.right > li > a {
	margin-left: 10px;
}

ul.right > li > button > span {
	margin-left: 10px;
}

ul > li > a > i {
	font-size: 30px;
}

ul > li > a:hover > i {
	color: #fff;
}
</style>
