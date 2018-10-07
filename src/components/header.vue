<template>
	<el-row class="main" type="flex" justify="space-between" align="middle">
		<el-col>
			<!-- <ul class="left">
				<li>
					<router-link to="/"><i class="iconfont icon-api"></i></router-link>
				</li>
				<li>
					<router-link to="/">琦益数据管理中心</router-link>
				</li>
			</ul> -->
			<el-menu
  :default-active="$route.path"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  	  :router="true"
  active-text-color="#ffd04b">
  <el-menu-item index="/home">
  <i class="iconfont icon-api logo"></i>
  <span slot="title">琦益数据管理中心</span>
  </el-menu-item>
  <!-- <el-submenu index="2">
    <template slot="title">
		<span slot="title">我的工作台</span>
		</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu> -->

  <el-menu-item v-if="!$store.state.user.info" index="/login">
    <i class="iconfont icon-denglu"></i>
<span slot="title">登陆</span>
  </el-menu-item>

    <el-menu-item v-if="!$store.state.user.info" index="/reg">
<span slot="title">注册</span>
  </el-menu-item>


  <el-menu-item v-if="$store.state.user.info" index="/admin">
  <i class="iconfont icon-denglu"></i>
<span slot="title">{{$store.state.user.info.username}}</span>
  </el-menu-item>

    <el-menu-item v-if="$store.state.user.info" index="/logout" @click="logout">
<span slot="title">退出</span>
  </el-menu-item>

</el-menu>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: "Header",
	methods: {
		logout() {
			this.$store.commit("account.REMOVE");
			location.href = "/";
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
i {
	margin-right: 10px;
}

i.logo {
	font-size: 30px;
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
