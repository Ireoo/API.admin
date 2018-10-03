<template>
	<el-row class="main" type="flex" justify="space-between" align="middle">
		<el-col :span="12">
			<el-row>
				<el-col :span="8">
					<router-link to="/"><i class="el-icon-setting"></i>琦益数据管理中心</router-link>
				</el-col>
			</el-row>
		</el-col>
		<el-col :span="12">
			<el-row type="flex" justify="end" align="middle">
				<el-col :span="4">
					<el-button round @click="$router.push({path: '/login'})">登陆</el-button>
				</el-col>
				<el-col :span="4">
					<router-link to="/reg">注册</router-link>
				</el-col>
			</el-row>
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

a {
	text-align: center;
	display: block;
	line-height: 40px;
	font-size: 14px;
	color: #fff;
}

a:hover {
	color: #ccc;
	text-decoration: none;
}
</style>
