<template>
	<div>
		<el-row>
			<el-col :span="8" :offset="12">
				<el-row>
					<el-col>
						<label>
							<span>用户名:</span>
							<el-input focus="alert(1);"></el-input>
						</label>
					</el-col>
					<el-col>
						<label>
							<span>密码:</span>
							<el-input></el-input>
						</label>
					</el-col>
					<el-col>
						<el-button type="primary">123</el-button>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {};
	},
	mounted: {}
};
</script>

<style scoped>
div.el-col {
	margin-bottom: 20px;
}

label {
	user-select: none;
	position: relative;
	display: block;
}

label > span {
	font-size: 14px;
	position: absolute;
	z-index: 1;
	top: 10px;
	left: 15px;
	color: #999;
	background: none;
	padding: 0;
}

label.focus > span {
	font-size: 12px;
	position: absolute;
	z-index: 1;
	top: -8px;
	left: 15px;
	color: #333;
	background: #fff;
	padding: 0 10px;
}
</style>
