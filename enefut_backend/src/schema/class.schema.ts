import { number, object, string, TypeOf } from "zod";

const payload = {
    body: object({
        
        name: string({
            required_error: 'Name is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        description: string({
            required_error: 'Description is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        duration: number({
            required_error: 'Duration is required'
        }).min(0, { message: 'Only positive numbers'}),

        language: string({
            required_error: 'Language is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        modality: string({
            required_error: 'Modality is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        type: string({
            required_error: 'Type teacher is required'
        }).min(2, { message: 'Must be 2 or more characters long'})
    })
};

const updatePayload = {
    body: object({
        
        name: string({
            invalid_type_error: 'Name must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),

        description: string({
            invalid_type_error: 'Description must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),

        duration: number({
            invalid_type_error: 'Duration must be a string'
        })
        .min(0, { message: 'Only positive numbers'})
        .optional(),

        language: string({
            invalid_type_error: 'Language must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),

        modality: string({
            invalid_type_error: 'Modality must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),

        type: string({
            invalid_type_error: 'Type teacher must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional()
    })
};

const params = {
    params: object({
        classId: string({
            required_error: 'Class ID is required'
        }),
    }),
};

export const createClassSchema = object({
    ...payload 
});

export const getClassSchema = object({
    ...params 
});

export const updateClassSchema = object({
    ...updatePayload,
    ...params
});

export const deleteClassSchema = object({
    ...params 
});

export type CreateClassInput = TypeOf<typeof createClassSchema>;
export type UpdateClassInput = TypeOf<typeof updateClassSchema>;
export type ReadClassInput = TypeOf<typeof getClassSchema>;
export type DeleteClassInput = TypeOf<typeof deleteClassSchema>;