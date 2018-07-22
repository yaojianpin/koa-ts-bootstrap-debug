
import ProdcutController from './controllers/product.controller'
import HomeController from './controllers/home.controller';

const routers = [
    { path: '/', method: 'get', action: HomeController.getHome },
    { path: '/product', method: 'get', action: ProdcutController.getProduct },
];

export default routers;