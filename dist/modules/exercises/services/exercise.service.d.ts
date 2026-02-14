import { FetchExerciseByIdReq, FilterExercisesArgs, GetAllExercisesArgs, GetExercisesByBodyPartArgs, GetExercisesByEquipmentArgs, GetExercisesByMuscleArgs, SearchExercisesArgs } from '../types/index.js';
export declare class ExerciseService {
    private readonly getExercisesUseCase;
    private readonly getExerciseByIdUseCase;
    constructor();
    searchExercises(params: SearchExercisesArgs): Promise<import("../types/index.js").GetExercisesReturnArgs>;
    getExerciseById: (request: FetchExerciseByIdReq) => Promise<import("../types/index.js").Exercise>;
    getAllExercises(params: GetAllExercisesArgs): Promise<import("../types/index.js").GetExercisesReturnArgs>;
    filterExercises(params: FilterExercisesArgs): Promise<import("../types/index.js").GetExercisesReturnArgs>;
    getExercisesByBodyPart(params: GetExercisesByBodyPartArgs): Promise<import("../types/index.js").GetExercisesReturnArgs>;
    getExercisesByEquipment(params: GetExercisesByEquipmentArgs): Promise<import("../types/index.js").GetExercisesReturnArgs>;
    getExercisesByMuscle(params: GetExercisesByMuscleArgs): Promise<import("../types/index.js").GetExercisesReturnArgs>;
}
