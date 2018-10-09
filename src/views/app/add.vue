<template>
	<el-row>
		<el-col :span="12" style="max-width: 600px; min-width: 400px;">
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="活动名称">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: "add",
	title: "添加应用",
	icon: "iconfont icon-tianjiayingyong",
	show: true,
	data() {
		return {
			form: {
				name: ""
			}
		};
	}
};
</script>

<style scoped>
</style>
