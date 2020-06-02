import { ifAuthenticated } from '../plugins/authenticate';
import PostDetail from '../pages/Post/PostDetail';
import PostUpload from '../pages/Post/PostUpload';
import Search from '../pages/General/Search';
export default [
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