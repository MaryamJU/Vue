import Vue from "vue";
import VueRouter from "vue-router";
import Shop from "../views/Shop.vue";
import about from "../views/AboutView.vue";
import MyAccount from "../views/MyAccount.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "shop",
        component: Shop,
    },
    {
        path: "/about",
        name: "about",
        component: about,
    },
    {
        path: "/MyAccount",
        name: "MyAccount",
        component: MyAccount,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
