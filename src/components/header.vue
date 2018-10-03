<template>
	<el-row class="main" type="flex" justify="space-between" align="middle">
		<el-col :span="12">
			<ul class="left">
				<li>
					<router-link to="/"><i class="iconfont icon-api"></i></router-link>
				</li>
				<li>
					<router-link to="/">琦益数据管理中心</router-link>
				</li>
			</ul>
		</el-col>
		<el-col :span="12">
			<ul class="right">
				<li>
					<el-button icon="iconfont icon-denglu" size="small" round @click="$router.push({path: '/login'})">登陆</el-button>
					<router-link to="/reg">注册</router-link>
				</li>
			</ul>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.el-row.main {
	padding: 10px 0;
}

div.el-row.main > div.el-col {
	height: 40px;
}

a {
	text-align: center;
	display: block;
	line-height: 40px;
	font-size: 14px;
	color: #fff;
}

a:hover {
	color: #85bcff;
	text-decoration: none;
}

ul {
	list-style: none;
}

ul.left > li {
	line-height: 40px;
	float: left;
}

ul.left > li > a {
	font-size: 16px;
	font-weight: bold;
}

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
	font-size: 40px;
}

ul > li > a:hover > i {
	color: #fff;
}
</style>
