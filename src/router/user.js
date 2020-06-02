import { ifAuthenticated } from '../plugins/authenticate';
import ChangePassword from '../pages/User/ChangePassword';
import UserPage from '../pages/User/UserPage';
import UserProfile from '../pages/User/UserProfile';
export default [
    { 
        path: '/user/:id', 
        name: 'user-page',
        component: UserPage,
        beforeEnter: ifAuthenticated
    },
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
    }
]