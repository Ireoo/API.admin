<template>
	<el-row>
		<el-col>
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item
					prop="title"
					label="应用名称"
					:rules="{required: true, message: '不能为空', trigger: 'blur'}"
				>
					<el-input v-model="form.title"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit('form')" :loading="loading">创建</el-button>
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
	index: 0,
	data() {
		return {
			form: {
				title: ""
			},
			loading: false
		};
	},
	methods: {
		onSubmit(formName) {
			this.loading = true;
			this.$refs[formName].validate(valid => {
				if (valid) {
					let form = JSON.parse(JSON.stringify(this.form));
					form.secret = this.$md5(new Date().getTime());
					form.createTime = new Date().getTime();
					form.updateTime = new Date().getTime();
					this.$http("apps/insert", { data: form })
						.then(data => {
							this.$message.success(
								`添加应用 ${form.title} 成功!`
							);
							this.loading = false;
						})
						.catch(e => {
							this.$message.error(e);
							this.loading = false;
						});
				} else {
					this.$message.error(valid);
					this.loading = false;
				}
			});
		}
	}
};
</script>

<style scoped>
</style>
