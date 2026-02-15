import { IUseCase } from '../../../common/types/use-case.type.js';
import { GetExercisesArgs, GetExercisesReturnArgs } from '../types/index.js';
export declare class GetExercisesUseCase implements IUseCase<GetExercisesArgs, GetExercisesReturnArgs> {
    private exerciseData;
    private fuse;
    constructor();
    private getExerciseData;
    private getFuseInstance;
    private filterByQuery;
    private sortExercises;
    private paginateResults;
    execute({ offset, limit, query, sort }: GetExercisesArgs): Promise<GetExercisesReturnArgs>;
}
