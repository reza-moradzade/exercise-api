import { z } from 'zod';
export declare const ExerciseModel: z.ZodObject<{
    exerciseId: z.ZodString;
    name: z.ZodString;
    gifUrl: z.ZodString;
    targetMuscles: z.ZodArray<z.ZodString, "many">;
    bodyParts: z.ZodArray<z.ZodString, "many">;
    equipments: z.ZodArray<z.ZodString, "many">;
    secondaryMuscles: z.ZodArray<z.ZodString, "many">;
    instructions: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    targetMuscles: string[];
    equipments: string[];
    bodyParts: string[];
    exerciseId: string;
    gifUrl: string;
    secondaryMuscles: string[];
    instructions: string[];
}, {
    name: string;
    targetMuscles: string[];
    equipments: string[];
    bodyParts: string[];
    exerciseId: string;
    gifUrl: string;
    secondaryMuscles: string[];
    instructions: string[];
}>;
export declare const PaginationQuerySchema: z.ZodObject<{
    offset: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    offset?: number | undefined;
    limit?: number | undefined;
}, {
    offset?: number | undefined;
    limit?: number | undefined;
}>;
export declare const ExerciseResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
    metadata: z.ZodObject<{
        totalExercises: z.ZodNumber;
        totalPages: z.ZodNumber;
        currentPage: z.ZodNumber;
        previousPage: z.ZodNullable<z.ZodString>;
        nextPage: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        totalPages: number;
        currentPage: number;
        totalExercises: number;
        previousPage: string | null;
        nextPage: string | null;
    }, {
        totalPages: number;
        currentPage: number;
        totalExercises: number;
        previousPage: string | null;
        nextPage: string | null;
    }>;
    data: z.ZodArray<z.ZodObject<{
        exerciseId: z.ZodString;
        name: z.ZodString;
        gifUrl: z.ZodString;
        targetMuscles: z.ZodArray<z.ZodString, "many">;
        bodyParts: z.ZodArray<z.ZodString, "many">;
        equipments: z.ZodArray<z.ZodString, "many">;
        secondaryMuscles: z.ZodArray<z.ZodString, "many">;
        instructions: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        targetMuscles: string[];
        equipments: string[];
        bodyParts: string[];
        exerciseId: string;
        gifUrl: string;
        secondaryMuscles: string[];
        instructions: string[];
    }, {
        name: string;
        targetMuscles: string[];
        equipments: string[];
        bodyParts: string[];
        exerciseId: string;
        gifUrl: string;
        secondaryMuscles: string[];
        instructions: string[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    data: {
        name: string;
        targetMuscles: string[];
        equipments: string[];
        bodyParts: string[];
        exerciseId: string;
        gifUrl: string;
        secondaryMuscles: string[];
        instructions: string[];
    }[];
    success: true;
    metadata: {
        totalPages: number;
        currentPage: number;
        totalExercises: number;
        previousPage: string | null;
        nextPage: string | null;
    };
}, {
    data: {
        name: string;
        targetMuscles: string[];
        equipments: string[];
        bodyParts: string[];
        exerciseId: string;
        gifUrl: string;
        secondaryMuscles: string[];
        instructions: string[];
    }[];
    success: true;
    metadata: {
        totalPages: number;
        currentPage: number;
        totalExercises: number;
        previousPage: string | null;
        nextPage: string | null;
    };
}>;
