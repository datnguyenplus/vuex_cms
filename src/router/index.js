import Vue from 'vue';
import VueRouter from 'vue-router';
import auth from './auth';
import blog from './blog';
import user from './user';
import home from './home';
Vue.use(VueRouter)

const routes = [
    ...home,
    ...auth,
    ...blog,
    ...user,
]

const router = new VueRouter({
    routes
});

export default router;

// 1. Router chỉ cho phép vào khi chưa đăng nhập (Login, Register)
// 2. Router chỉ chó phép vào khi đã đăng nhập
// 3. Router cho phép vào thoải mái