<template>
	<el-row>
		<el-col>
			<el-table :data="apps" border="" style="width: 100%">
				<el-table-column prop="_id" label="应用ID"></el-table-column>
				<el-table-column prop="title" label="名称"></el-table-column>
				<el-table-column prop="secret" label="密钥"></el-table-column>
				<el-table-column prop="createTime" label="创建时间"></el-table-column>
				<el-table-column prop="updateTime" label="修改时间"></el-table-column>
				<el-table-column fixed="right" label="操作" width="100">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
						<el-button type="text" size="small">编辑</el-button>
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
			apps: []
		};
	},
	methods: {
		handleClick(row) {
			console.log(row);
		}
	}
};
</script>
