import Vue from "vue";
import App from "./App.vue";

// 加载主要组件
import store from "./store";
import router from "./router";

// 加载插件
const files = require.context("./plugins", false, /\.js$/);
files.keys().forEach(key => {
	require(`./plugins/${key.replace(/(\.\/|\.js)/g, "")}`);
});
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
