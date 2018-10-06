import Vue from "vue";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.post["Authorization"] = "94f3eee0-218f-41fc-9318-94cf5430fc7f";

const api = "https://apo.herokuapp.com/";

Vue.prototype.$http = (url, data) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${api}${url}`, data)
			.then(result => {
				if (result.data.success) resolve(result.data.data);
				else reject(result.data.data);
			})
			.catch(e => {
				reject(e);
			});
	});
};

export default Vue;
