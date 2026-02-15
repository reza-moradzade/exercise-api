import { GetBodyPartsUseCase } from '../use-cases/index.js';
export class BodyPartService {
    getBodyPartsUseCase;
    constructor() {
        this.getBodyPartsUseCase = new GetBodyPartsUseCase();
    }
    getBodyParts = () => {
        return this.getBodyPartsUseCase.execute();
    };
}
