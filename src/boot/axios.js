import axios from "axios";
import {boot} from "quasar/wrappers";

const api = axios.create({baseURL:'/api/movies/'});
export default boot(({app})=>{
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api

})
export {
  axios , api
}
