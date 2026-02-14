import { IUseCase } from '../../../common/types/use-case.type.js';
import { FetchAllBodyPartRes } from '../types/index.js';
export declare class GetBodyPartsUseCase implements IUseCase<void, FetchAllBodyPartRes> {
    constructor();
    execute(): Promise<FetchAllBodyPartRes>;
}
