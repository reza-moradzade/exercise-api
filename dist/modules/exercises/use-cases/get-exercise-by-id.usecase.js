import { FileLoader } from '../../../data/load.js';
import { HTTPException } from 'hono/http-exception';
export class GetExerciseByIdUseCase {
    constructor() { }
    async execute(request) {
        const { exerciseId } = request;
        const exerciseData = await FileLoader.loadExercises();
        const isExerciseExist = exerciseData.find((exer) => exer.exerciseId === exerciseId);
        // check is exercise exist
        if (!isExerciseExist) {
            throw new HTTPException(404, {
                message: `exercise ${exerciseId} not found. `
            });
        }
        return { ...isExerciseExist };
    }
}
