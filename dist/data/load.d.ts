import { Equipment, Exercise, Muscle, BodyPart } from './types.js';
export declare class FileLoader {
    private static dataPath;
    private static cache;
    private static loadJSON;
    static loadExercises(): Promise<Exercise[]>;
    static loadEquipments(): Promise<Equipment[]>;
    static loadBodyParts(): Promise<BodyPart[]>;
    static loadMuscles(): Promise<Muscle[]>;
}
