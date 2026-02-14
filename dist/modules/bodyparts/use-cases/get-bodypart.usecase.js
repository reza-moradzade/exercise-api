import { FileLoader } from '../../../data/load.js';
export class GetBodyPartsUseCase {
    constructor() { }
    async execute() {
        const result = await FileLoader.loadBodyParts();
        return result;
    }
}
