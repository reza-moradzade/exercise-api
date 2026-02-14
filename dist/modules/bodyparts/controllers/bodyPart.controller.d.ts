import { Routes } from '../../../common/types/route.type.js';
import { OpenAPIHono } from '@hono/zod-openapi';
export declare class BodyPartController implements Routes {
    controller: OpenAPIHono;
    private readonly bodyPartService;
    constructor();
    initRoutes(): void;
}
