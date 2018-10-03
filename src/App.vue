<template>
  <div id="app">
    <div class="header"></div>
    <router-view class="body" />
  </div>
</template>

<style scoped>
* {
	margin: 0;
	padding: 0;
	font-size: 14px;
}

#app > div.body {
	padding: 10px;
	max-width: 1200px;
}
</style>
