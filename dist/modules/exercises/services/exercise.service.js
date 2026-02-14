import { GetExerciseByIdUseCase } from '../use-cases/index.js';
import { GetExercisesUseCase } from '../use-cases/get-exercise.usecase.js';
export class ExerciseService {
    getExercisesUseCase;
    getExerciseByIdUseCase;
    constructor() {
        this.getExercisesUseCase = new GetExercisesUseCase();
        this.getExerciseByIdUseCase = new GetExerciseByIdUseCase();
    }
    async searchExercises(params) {
        const query = {
            offset: params.offset,
            limit: params.limit,
            query: {
                search: params.query,
                searchThreshold: params.threshold
            }
        };
        return this.getExercisesUseCase.execute(query);
    }
    getExerciseById = (request) => {
        return this.getExerciseByIdUseCase.execute(request);
    };
    async getAllExercises(params) {
        const query = {
            offset: params.offset,
            limit: params.limit,
            query: params.search ? { search: params.search } : {},
            sort: params.sort
        };
        return this.getExercisesUseCase.execute(query);
    }
    async filterExercises(params) {
        const queryFilters = {};
        if (params.search) {
            queryFilters.search = params.search;
        }
        if (params.targetMuscles && params.targetMuscles.length > 0) {
            queryFilters.targetMuscles = params.targetMuscles;
        }
        if (params.equipments && params.equipments.length > 0) {
            queryFilters.equipments = params.equipments;
        }
        if (params.bodyParts && params.bodyParts.length > 0) {
            queryFilters.bodyParts = params.bodyParts;
        }
        const query = {
            offset: params.offset,
            limit: params.limit,
            query: queryFilters,
            sort: params.sort
        };
        return this.getExercisesUseCase.execute(query);
    }
    // Get exercises by body part
    async getExercisesByBodyPart(params) {
        const query = {
            offset: params.offset,
            limit: params.limit,
            query: {
                bodyParts: [params.bodyPart]
            }
        };
        return this.getExercisesUseCase.execute(query);
    }
    // Get exercises by equipment
    async getExercisesByEquipment(params) {
        const query = {
            offset: params.offset,
            limit: params.limit,
            query: {
                equipments: [params.equipment]
            }
        };
        return this.getExercisesUseCase.execute(query);
    }
    // Get exercises by muscle (with option to include secondary muscles)
    async getExercisesByMuscle(params) {
        const query = {
            offset: params.offset,
            limit: params.limit,
            query: {
                targetMuscles: [params.muscle],
                includeSecondaryMuscles: params.includeSecondary
            }
        };
        return this.getExercisesUseCase.execute(query);
    }
}
