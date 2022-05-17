import Home from './components/Home.vue';
import SingUp from './components/SingUp.vue';
import Login from './components/Login.vue';
import UpdatePost from './components/UpdatePost.vue';
import AddPost from './components/AddPost.vue';
import { createRouter,createWebHistory } from 'vue-router';

const routes = [
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SingUp',
        component:SingUp,
        path:'/registration'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'AddPost',
        component:AddPost,
        path:'/add-post'
    },
    {
        name:'UpdatePost',
        component:UpdatePost,
        path:'/update-post'
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;