import { Connection } from './db.connection';
export class BaseController {

    constructor() {
    }

    getClient() {
        return Connection.getClient();
    }
    list(req:any, res: any, next?: any): void{
        throw new Error("List not implemented")
    }
    detailed(req:any, res: any, next?: any): void {
        throw new Error("Detailed not implemented")
    }
    update(req:any, res: any, next?: any): void {
        throw new Error("Update not implemented")

    }
    delete(req:any, res: any, next?: any): void {
        throw new Error("Delete not implemented")
    }

    create(req:any, res: any, next?: any): void {
        throw new Error("Create not implemented")
    }
    
}