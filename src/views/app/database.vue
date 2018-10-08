<template>

</template>

<script>
export default {
	name: "info",
	title: "数据库信息",
	icon: "iconfont icon-database1",
	show: true,
	login: true,
	methods: {
		logout() {
			this.$store.commit("account.REMOVE");
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
