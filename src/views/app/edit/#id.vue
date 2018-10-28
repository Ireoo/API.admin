<template>
    <el-row>
        <el-col>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item
                    prop="title"
                    label="应用名称"
                    :rules="{required: true, message: '不能为空', trigger: 'blur'}"
                >
                    <el-input :disabled="loading" v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="应用简介">
                    <el-input :disabled="loading" type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item label="是否公开">
                    <el-radio-group :disabled="loading" v-model="form.own">
                        <el-radio :label="1" disabled>私有</el-radio>
                        <el-radio :label="0">公开</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item
                    label="容量大小"
                    prop="size"
                    :rules="[{required: true, message: '不能为空', trigger: 'blur'}]"
                >
                    <el-input :disabled="loading" v-model.number="form.size">
                        <template slot="append">GB</template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit('form')" :loading="loading">保存</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
export default {
	name: "edit",
	title: "修改应用",
	icon: "iconfont icon-tianjiayingyong",
	index: 0,
	data() {
		return {
			form: {
				title: "",
				desc: "",
				own: 0,
				size: 1
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
					form.uuid = this.$store.state.user.info._id;
					form.secret = this.$uuid();
					form.createTime = new Date().getTime();
					form.updateTime = new Date().getTime();
					this.$http("apps/update", {
						data: form,
						where: {
							_id: this.$route.params.id,
							uuid: this.$store.state.user.info._id
						}
					})
						.then(() => {
							this.$message.success(`保存成功!`);
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
	},
	created() {
		this.$http("apps/once", {
			where: {
				_id: this.$route.params.id,
				uuid: this.$store.state.user.info._id
			}
		})
			.then(data => {
				if (data) {
					delete data._id;
					delete data.uuid;
					this.form = data;
				} else {
					this.$message.error(`没有此应用存在!`);
					this.$router.push({ path: "/app" });
				}
			})
			.catch(error => {
				this.$message.error(error);
			});
	}
};
</script>

<style scoped>
</style>
