import Categories from '@/views/Categories';
import Category from '@/views/Category';

const routes = [
    {
        path: '/',
        name: 'categories',
        component: Categories
    },
    {
        path: '/category/:categoryName',
        name: 'category',
        component: Category
    },
]

export default routes;