import { IUseCase } from '../../../common/types/use-case.type.js';
import { FetchExerciseByIdReq, Exercise as FetchExerciseByIdRes } from '../types/index.js';
export declare class GetExerciseByIdUseCase implements IUseCase<FetchExerciseByIdReq, FetchExerciseByIdRes> {
    constructor();
    execute(request: FetchExerciseByIdReq): Promise<FetchExerciseByIdRes>;
}
