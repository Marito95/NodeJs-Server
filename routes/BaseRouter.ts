import { Router } from 'express';
import { BaseController } from '../controllers/BaseController';
export default class BaseRouter {
    controller: BaseController;
    router: Router;
    constructor(controller: any) {
        this.controller = controller;
        this.router = Router();
        this.initRouter();
    }

    initRouter() {
        this.router.get('/', this.controller.list)
        this.router.post('/', this.controller.create)
        this.router.get('/:id', this.controller.detailed)
        this.router.put('/:id', this.controller.update)
        this.router.delete('/:id', this.controller.delete)
    }

    getRouter() {
        return this.router;
    }

}