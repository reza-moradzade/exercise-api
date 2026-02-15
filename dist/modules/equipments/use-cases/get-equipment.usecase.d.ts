import { IUseCase } from '../../../common/types/use-case.type.js';
import { FetchAllEquipmentRes } from '../types/index.js';
export declare class GetEquipmentsUseCase implements IUseCase<void, FetchAllEquipmentRes> {
    constructor();
    execute(): Promise<FetchAllEquipmentRes>;
}
