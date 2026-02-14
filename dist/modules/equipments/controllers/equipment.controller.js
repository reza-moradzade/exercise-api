import { createRoute, OpenAPIHono } from '@hono/zod-openapi';
import { z } from 'zod';
import { EquipmentModel } from '../models/equipment.model.js';
import { EquipmentService } from '../services/index.js';
export class EquipmentController {
    controller;
    equipmentService;
    constructor() {
        this.controller = new OpenAPIHono();
        this.equipmentService = new EquipmentService();
    }
    initRoutes() {
        this.controller.openapi(createRoute({
            method: 'get',
            path: '/equipments',
            tags: ['EQUIPMENTS'],
            summary: 'GetAllEquipments',
            operationId: 'getEquipments',
            responses: {
                200: {
                    description: 'Successful response with list of all equipments.',
                    content: {
                        'application/json': {
                            schema: z.object({
                                success: z.boolean().openapi({
                                    description: 'Indicates whether the request was successful',
                                    type: 'boolean',
                                    example: true
                                }),
                                data: z.array(EquipmentModel).openapi({
                                    description: 'Array of equipments.'
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
            const response = await this.equipmentService.getEquipments();
            return ctx.json({ success: true, data: response });
        });
    }
}
