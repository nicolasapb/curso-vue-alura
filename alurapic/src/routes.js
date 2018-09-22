// @ts-ignore
import Cadastro from './components/cadastro/Cadastro.vue';
// @ts-ignore
import Home from './components/home/Home.vue';

export const routes = [
    {
        path: '',
        component: Home,
        titulo: 'Home'
    },
    {
        path: '/cadastro',
        component: Cadastro,
        titulo: 'Cadastro'
    }
];
