import { GetMusclesUseCase } from '../use-cases/index.js';
export class MuscleService {
    getMuscleUseCase;
    constructor() {
        this.getMuscleUseCase = new GetMusclesUseCase();
    }
    getMuscles = () => {
        return this.getMuscleUseCase.execute();
    };
}
