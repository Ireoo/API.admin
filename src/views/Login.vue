<template>
	<div>
		<el-row type="flex" justify="center">
			<el-col :span="12">
				<el-row class="form">
					<el-col>
						<label :class="{focus: focus.username}">
							<span>用户名</span>
							<el-input @focus="focus.username=true" @blur="focus.username=form.username==''?false:true" :placeholder="focus.username?placeholder.username:''" v-model="form.username"></el-input>
						</label>
					</el-col>
					<el-col>
						<label :class="{focus: focus.password}">
							<span>密码</span>
							<el-input type="password" @focus="focus.password=true" @blur="focus.password=form.password==''?false:true" :placeholder="focus.password?placeholder.password:''" v-model="form.password"></el-input>
						</label>
					</el-col>
					<el-col>
						<el-row type="flex" align="bottom">
							<el-col :span="12">
								<el-button type="primary" @click="login">登陆</el-button>
							</el-col>
							<el-col :span="12" class="text-right">
								<router-link to="/reg">注册一个账号</router-link>
							</el-col>
						</el-row>
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
		return {
			focus: {
				username: false,
				password: false
			},
			placeholder: {
				username: "手机号/邮箱",
				password: "格式:[A-Z]{1}(.*){7,}"
			},
			form: {
				username: "",
				password: ""
			}
		};
	},
	methods: {
		login() {
			this.console(this.form);
		}
	},
	mounted() {}
};
</script>

<style scoped>
div.el-row.form > div.el-col {
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
	left: 7px;
	color: #333;
	background: #fff;
	padding: 0 10px;
}

button.el-button {
	margin-right: 20px;
}
</style>
