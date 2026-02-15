import { Routes } from '../../../common/types/route.type.js';
import { OpenAPIHono } from '@hono/zod-openapi';
export declare class EquipmentController implements Routes {
    controller: OpenAPIHono;
    private readonly equipmentService;
    constructor();
    initRoutes(): void;
}
