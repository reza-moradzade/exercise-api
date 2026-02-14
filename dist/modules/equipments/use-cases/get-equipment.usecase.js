import { FileLoader } from '../../../data/load.js';
export class GetEquipmentsUseCase {
    constructor() { }
    async execute() {
        const result = await FileLoader.loadEquipments();
        return result;
    }
}
