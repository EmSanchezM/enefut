import { number, object, string, TypeOf } from "zod";

const payload = {
    body: object({
        
        title: string({
            required_error: 'Title is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        description: string({
            required_error: 'Description is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        value: number({
            required_error: 'Value is required'
        }).min(0, { message: 'Only positive numbers'}),

        deliveryDate: string(),

        student: string({
            required_error: 'Student ID is required'
        }),
        
        class: string({
            required_error: 'Class ID is required'
        }),

        teacher: string({
            required_error: 'Teacher ID is required'
        }),

        type: string({
            required_error: 'Type teacher is required'
        }).min(2, { message: 'Must be 2 or more characters long'})
    })
};

const updatePayload = {
    body : object({
        title: string({
            invalid_type_error: 'Title must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),
    
        description: string({
            required_error: 'Description must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),
    
        value: number({
            required_error: 'Value must be a number'
        })
        .min(0, { message: 'Only positive numbers'})
        .optional(),
    
        deliveryDate: string().optional(),
    
        student: string({
            invalid_type_error: 'Student ID must be a string'
        }).optional(),
        
        class: string({
            invalid_type_error: 'Class ID must be a string'
        }).optional(),
    
        teacher: string({
            invalid_type_error: 'Teacher ID must be a string'
        }).optional(),
    
        type: string({
            invalid_type_error: 'Type teacher must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional()
    })
};

const params = {
    params: object({
        activityId: string({
            required_error: 'Activity ID is required'
        }),
    }),
};

export const createActivitySchema = object({
    ...payload 
});

export const getActivitySchema = object({
    ...params 
});

export const updateActivitySchema = object({
    ...updatePayload,
    ...params
});

export const deleteActivitySchema = object({
    ...params 
});

export type CreateActivityInput = TypeOf<typeof createActivitySchema>;
export type UpdateActivityInput = TypeOf<typeof updateActivitySchema>;
export type ReadActivityInput = TypeOf<typeof getActivitySchema>;
export type DeleteActivityInput = TypeOf<typeof deleteActivitySchema>;
