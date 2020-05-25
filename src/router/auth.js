import { ifNotAuthenticated } from '../plugins/authenticate';
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
export default [
    { 
        path: '/login', 
        name: 'login',
        component: Login,
        beforeEnter: ifNotAuthenticated
    },
    { 
        path: '/register', 
        name: 'register',
        component: Register,
        beforeEnter: ifNotAuthenticated
    }
]