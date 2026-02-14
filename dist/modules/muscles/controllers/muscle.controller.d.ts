import { Routes } from '../../../common/types/route.type.js';
import { OpenAPIHono } from '@hono/zod-openapi';
export declare class MuscleController implements Routes {
    controller: OpenAPIHono;
    private readonly muscleService;
    constructor();
    initRoutes(): void;
}
