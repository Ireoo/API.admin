import Vue from "vue";
import axios from "axios";
import c from "./console";

// axios.defaults.headers.post["Content-Type"] =
// "application/x-www-form-urlencoded";
axios.defaults.headers.post["Authorization"] =
  "94f3eee0-218f-41fc-9318-94cf5430fc7f";

const api =
  process.env.NODE_ENV === "production" ? "/" : "http://127.0.0.1:2019/";

Vue.prototype.$http = (url, data) => {
  return new Promise((resolve, reject) => {
    c("[DATA] (input) ->", url, JSON.stringify(data));
    axios
      .post(`${api}${url}`, data)
      .then(result => {
        let data = JSON.parse(JSON.stringify(result.data));
        if (data.Success) {
          data.success = data.Success;
          delete data.Success;
        }
        if (data.Data) {
          data.data = data.Data;
          delete data.Data;
        }
        c("[DATA] (output) ->", data);
        if (data.success) resolve(data.data);
        else reject(data.data);
      })
      .catch(e => {
        c("[DATA] (error) ->", e);
        reject(e);
      });
  });
};

export default Vue;
