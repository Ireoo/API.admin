import Vue from "vue";

const c = (...txt) => {
	if (process.env.NODE_ENV !== "production") console.log(...txt);
};

Vue.prototype.console = c;

export default c;
