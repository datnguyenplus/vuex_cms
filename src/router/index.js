import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../pages/Home/HomePage';
import ChangePassword from '../pages/User/ChangePassword';
import PostDetail from '../pages/Post/PostDetail';
import PostUpload from '../pages/Post/PostUpload';
import UserPage from '../pages/User/UserPage';
import UserProfile from '../pages/User/UserProfile';
import Search from '../pages/General/Search';
import { ifAuthenticated } from '../plugins/authenticate';
import auth from './auth';

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        name: 'home-page',
        component: HomePage 
    },
    { 
        path: '/user/:id', 
        name: 'user-page',
        component: UserPage,
        beforeEnter: ifAuthenticated
    },
    ...auth,
    { 
        path: '/user/:id/profile', 
        name: 'user-profile',
        component: UserProfile,
        beforeEnter: ifAuthenticated
    },
    { 
        path: '/user/:id/password', 
        name: 'change-password',
        component: ChangePassword 
    },
    { 
        path: '/post-detail/:id', 
        name: 'post-detail',
        component: PostDetail
    },
    {
        path: '/upload',
        name: 'upload',
        component: PostUpload,
        beforeEnter: ifAuthenticated
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    }
]

const router = new VueRouter({
    routes
});

export default router;

// 1. Router chỉ cho phép vào khi chưa đăng nhập (Login, Register)
// 2. Router chỉ chó phép vào khi đã đăng nhập
// 3. Router cho phép vào thoải mái