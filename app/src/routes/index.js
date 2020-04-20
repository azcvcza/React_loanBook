import 'react-router';
import Form from '../components/form'
import Home from '../containers/Home'
const routes = [
    {
        path: '/create',
        component: Form,
    },
    {
        path:'/edit/:id',
        component: Form,
    },
    {
        path:'/home',
        component: Home,
    }
]

export default routes;