import { promises as fs } from 'fs';
import path from 'path';
import { HTTPException } from 'hono/http-exception';
export class FileLoader {
    static dataPath = path.resolve(process.cwd(), 'src', 'data');
    static cache = new Map();
    static async loadJSON(filename) {
        const filePath = path.resolve(this.dataPath, filename);
        if (this.cache.has(filePath)) {
            return this.cache.get(filePath);
        }
        try {
            const fileContent = await fs.readFile(filePath, 'utf-8');
            const data = JSON.parse(fileContent);
            this.cache.set(filePath, data);
            return data;
        }
        catch (error) {
            console.error(`❌ Error loading JSON file [${filename}]:`, error);
            throw new HTTPException(500, { message: `database not working` });
        }
    }
    static loadExercises() {
        return this.loadJSON(`exercises.json`);
    }
    static loadEquipments() {
        return this.loadJSON('equipments.json');
    }
    static loadBodyParts() {
        return this.loadJSON('bodyparts.json');
    }
    static loadMuscles() {
        return this.loadJSON('muscles.json');
    }
}
