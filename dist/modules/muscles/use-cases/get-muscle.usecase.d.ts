import { IUseCase } from '../../../common/types/use-case.type.js';
import { Muscle as FetchAllMuscleRes } from '../types/index.js';
export declare class GetMusclesUseCase implements IUseCase<void, FetchAllMuscleRes[]> {
    constructor();
    execute(): Promise<FetchAllMuscleRes[]>;
}
