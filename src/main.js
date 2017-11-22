import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from "../routers/routers.config.js";
import app from './app.vue';
import store from "../store/store.js";
import axios from "../axios/axios.js";
import alias from "../css/reset.css";
var router = new VueRouter({
    routes: routes
});

new Vue({
    el: ".container",
    render: function(createElement) {
        return createElement(app);
    },
    router: router,
    store
});
console.log(555)
if (module.hot) {
    module.hot.accept();
}