export interface PGPInterface {
    one(query: string, values?: any):Promise<any>;

    none(query: string, values?: any): Promise<any>;

    oneOrNone(query: string, values?: any): Promise<any>;

    many(query: string, values?: any): Promise<any>;

    manyOrNone(query: string, values?: any): Promise<any>;

    any(query: string, values?: any): Promise<any>;
}