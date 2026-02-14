import { GetEquipmentsUseCase } from '../use-cases/index.js';
export class EquipmentService {
    getEquipmentUseCase;
    constructor() {
        this.getEquipmentUseCase = new GetEquipmentsUseCase();
    }
    getEquipments = () => {
        return this.getEquipmentUseCase.execute();
    };
}
