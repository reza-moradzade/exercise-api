import { FileLoader } from '../../../data/load.js';
export class GetMusclesUseCase {
    constructor() { }
    async execute() {
        const result = await FileLoader.loadMuscles();
        return result;
    }
}
