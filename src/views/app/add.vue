<template>
	<el-row>
		<el-col>
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item
					prop="title"
					label="活动名称"
					:rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
				>
					<el-input v-model="form.title"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
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
				title: ""
			}
		};
	},
	methods: {
		onSubmit(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					alert("submit!");
				} else {
					console.log("error submit!!");
					return false;
				}
			});
		}
	}
};
</script>

<style scoped>
</style>
