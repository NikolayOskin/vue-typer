import Categories from '@/views/Categories';
import Category from '@/views/Category';
import Exercise from '@/components/Exercise';

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
    {
        path: '/exercise/:id',
        name: 'exercise',
        props: true,
        component: Exercise
    },
]

export default routes;