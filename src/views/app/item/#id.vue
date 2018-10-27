<template>
	<el-row>
		<el-col></el-col>
	</el-row>
</template>

<script>
export default {
	name: "id",
	mounted() {
		this.console(this.$route.params.id);
	}
};
</script>

<style scoped>
</style>
