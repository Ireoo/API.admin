<template>
	<el-row>
		<el-col>
			<el-table :data="appsShow" border="" v-loading="loading" style="width: 100%">
				<el-table-column prop="title" label="名称"></el-table-column>
				<el-table-column prop="_id" label="APP id"></el-table-column>
				<el-table-column prop="secret" label="APP secret"></el-table-column>
				<el-table-column label="创建时间">
					<template slot-scope="scope">
						<i class="el-icon-time"></i>
						<span style="margin-left: 10px">{{ $time(scope.row.createTime).format("YYYY-MM-DD") }}</span>
					</template>
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="200">
					<template slot-scope="scope">
						<el-button
							@click="secret(scope.row)"
							:loading="scope.row.update"
							:disabled="scope.row.del"
							type="primary"
							size="mini"
						>重置密钥</el-button>
						<el-button
							@click="del(scope)"
							:loading="scope.row.del"
							:disabled="scope.row.update"
							type="danger"
							size="mini"
						>删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-col>
	</el-row>
</template>

<script>
export default {
	name: "admin",
	title: "应用管理",
	icon: "iconfont icon-gaikuang",
	index: 0,
	show: true,
	components: {},
	data() {
		return {
			apps: [],
			loading: true
		};
	},
	methods: {
		secret(row) {
			this.console(row);
		},
		del(app) {
			this.console(app);
			app.row.del = true;
			this.$http("apps/remove", { where: { _id: app.row._id } })
				.then(() => {
					this.$message.success("删除成功!");
					// this.apps.splice(app.$index,1);
					app.row.show = false;
					app.row.del = false;
				})
				.catch(e => {
					this.$message.error(e);
				});
		}
	},
	computed: {
		appsShow() {
			return this.apps.filter(app => app.show);
		}
	},
	mounted() {
		this.$http("apps/find", {})
			.then(data => {
				this.loading = false;
				this.apps = data.map(app => {
					app.del = false;
					app.update = false;
					app.show = true;
					return app;
				});
			})
			.catch(e => {
				this.loading = false;
				this.$message.error(e);
			});
	}
};
</script>

<style scoped>
button span {
	font-size: 12px !important;
}
</style>
