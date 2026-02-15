import { Routes } from '../../../common/types/route.type.js';
import { OpenAPIHono } from '@hono/zod-openapi';
export declare class ExerciseController implements Routes {
    controller: OpenAPIHono;
    private readonly exerciseService;
    constructor();
    private buildPaginationUrls;
    initRoutes(): void;
}
