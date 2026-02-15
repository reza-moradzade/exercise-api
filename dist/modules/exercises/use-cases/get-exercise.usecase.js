import { FileLoader } from '../../../data/load.js';
import Fuse from 'fuse.js';
export class GetExercisesUseCase {
    exerciseData = null;
    fuse = null;
    constructor() { }
    async getExerciseData() {
        this.exerciseData = await FileLoader.loadExercises();
        return this.exerciseData;
    }
    getFuseInstance(data, threshold = 0.3) {
        this.fuse = new Fuse(data, {
            keys: [
                { name: 'name', weight: 0.4 },
                { name: 'targetMuscles', weight: 0.25 },
                { name: 'bodyParts', weight: 0.2 },
                { name: 'equipments', weight: 0.15 },
                { name: 'secondaryMuscles', weight: 0.1 }
            ],
            threshold,
            includeScore: false,
            ignoreLocation: true,
            findAllMatches: true
        });
        return this.fuse;
    }
    filterByQuery(exercises, query) {
        if (!query)
            return exercises;
        let filtered = exercises;
        // Handle text search with custom threshold
        if (query.search) {
            const threshold = query.searchThreshold || 0.3;
            const fuse = this.getFuseInstance(exercises, threshold);
            const result = fuse.search(query.search.toLowerCase());
            filtered = result.map((res) => res.item);
        }
        // Handle targetMuscles filtering
        if (query.targetMuscles) {
            const muscles = Array.isArray(query.targetMuscles) ? query.targetMuscles : query.targetMuscles || [];
            console.log(muscles);
            filtered = filtered.filter((exercise) => {
                const matchesTarget = muscles.every((muscle) => exercise.targetMuscles.some((target) => target.toLowerCase() === muscle.toLowerCase()));
                // If includeSecondaryMuscles is true, also check secondary muscles
                if (query.includeSecondaryMuscles && !matchesTarget) {
                    return muscles.some((muscle) => exercise.secondaryMuscles?.some((secondary) => secondary.toLowerCase() === muscle.toLowerCase()));
                }
                return matchesTarget;
            });
        }
        // Handle equipments filtering
        if (query.equipments) {
            const equipments = Array.isArray(query.equipments) ? query.equipments : query.equipments || [];
            filtered = filtered.filter((exercise) => equipments.every((equipment) => exercise.equipments.some((eq) => eq.toLowerCase() === equipment.toLowerCase())));
        }
        // Handle bodyParts filtering
        if (query.bodyParts && Array.isArray(query.bodyParts)) {
            filtered = filtered.filter((exercise) => query.bodyParts.some((bodyPart) => exercise.bodyParts.some((bp) => bp.toLowerCase() === bodyPart.toLowerCase())));
        }
        return filtered;
    }
    sortExercises(exercises, sort) {
        const sortKeys = Object.keys(sort || {});
        if (sortKeys.length === 0)
            return exercises;
        return [...exercises].sort((a, b) => {
            for (const key of sortKeys) {
                const order = sort[key];
                const aVal = a[key];
                const bVal = b[key];
                if (aVal == null && bVal == null)
                    continue;
                if (aVal == null)
                    return order;
                if (bVal == null)
                    return -order;
                // Handle array fields (bodyParts, targetMuscles, equipments)
                if (Array.isArray(aVal) && Array.isArray(bVal)) {
                    // Sort by first element of array, or by array length if first elements are equal
                    const aFirst = aVal[0] || '';
                    const bFirst = bVal[0] || '';
                    if (aFirst < bFirst)
                        return -1 * order;
                    if (aFirst > bFirst)
                        return 1 * order;
                    // If first elements are equal, sort by array length
                    if (aVal.length < bVal.length)
                        return -1 * order;
                    if (aVal.length > bVal.length)
                        return 1 * order;
                    continue;
                }
                // Handle case where one is array and other is not (shouldn't happen with proper typing)
                if (Array.isArray(aVal))
                    return -1 * order;
                if (Array.isArray(bVal))
                    return 1 * order;
                // Handle string/primitive fields
                if (aVal < bVal)
                    return -1 * order;
                if (aVal > bVal)
                    return 1 * order;
            }
            return 0;
        });
    }
    paginateResults(exercises, offset, limit) {
        const safeOffset = Math.max(0, Number(offset) || 0);
        const safeLimit = Math.max(1, Math.min(100, Number(limit) || 10));
        const totalCount = exercises.length;
        const totalPages = Math.ceil(totalCount / safeLimit);
        const currentPage = Math.floor(safeOffset / safeLimit) + 1;
        const paginated = exercises.slice(safeOffset, safeOffset + safeLimit);
        return {
            exercises: paginated,
            totalPages,
            currentPage
        };
    }
    async execute({ offset, limit, query = {}, sort = {} }) {
        try {
            const exerciseData = await this.getExerciseData();
            console.log({ query, offset, limit, sort, exrLenght: exerciseData.length });
            // Apply filters
            const filtered = this.filterByQuery(exerciseData, query);
            // Apply sorting
            const sorted = this.sortExercises(filtered, sort);
            // Apply pagination
            const { exercises, totalPages, currentPage } = this.paginateResults(sorted, offset || 0, limit || 10);
            return {
                exercises,
                totalPages,
                totalExercises: filtered.length,
                currentPage
            };
        }
        catch (error) {
            console.error('Error in GetExercisesUseCase:', error);
            throw new Error('Failed to fetch exercises');
        }
    }
}
