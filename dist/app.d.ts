import { OpenAPIHono } from '@hono/zod-openapi';
import { Routes } from './common/types/index.js';
export declare class App {
    private app;
    constructor(routes: Routes[]);
    private initializeApp;
    private initializeRoutes;
    private initializeGlobalMiddleware;
    private initializeSwaggerUI;
    private initializeRouteFallback;
    private initializeErrorHandler;
    getApp(): OpenAPIHono<import("hono").Env, {}, "/">;
}
