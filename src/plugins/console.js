import Vue from "vue";

Vue.prototype.console = txt => {
	if (process.env.NODE_ENV !== "production") console.log(txt);
};

export default Vue;
