import { createRoute, OpenAPIHono } from '@hono/zod-openapi';
import { z } from 'zod';
import { MuscleModel } from '../models/muscle.model.js';
import { MuscleService } from '../services/index.js';
export class MuscleController {
    controller;
    muscleService;
    constructor() {
        this.controller = new OpenAPIHono();
        this.muscleService = new MuscleService();
    }
    initRoutes() {
        this.controller.openapi(createRoute({
            method: 'get',
            path: '/muscles',
            tags: ['MUSCLES'],
            summary: 'GetAllMuscles',
            operationId: 'getMuscles',
            responses: {
                200: {
                    description: 'Successful response with list of all muscles.',
                    content: {
                        'application/json': {
                            schema: z.object({
                                success: z.boolean().openapi({
                                    description: 'Indicates whether the request was successful',
                                    type: 'boolean',
                                    example: true
                                }),
                                data: z.array(MuscleModel).openapi({
                                    description: 'Array of Muslces.'
                                })
                            })
                        }
                    }
                },
                500: {
                    description: 'Internal server error'
                }
            }
        }), async (ctx) => {
            const response = await this.muscleService.getMuscles();
            return ctx.json({ success: true, data: response });
        });
    }
}
