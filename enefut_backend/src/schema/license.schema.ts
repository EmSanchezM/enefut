import { number, object, optional, string, TypeOf } from "zod";

const payload = {
    body: object({
        
        name: string({
            required_error: 'Name is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        letter: string({
            required_error: 'Letter is required'
        }).min(1, { message: 'Must be 1 or more characters long'}),

        description: string({
            required_error: 'Description is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        duration: number({
            required_error: 'Duration is required'
        }).min(0, { message: 'Only positive numbers'}),

        cost: number({
            required_error: 'Cost is required'
        }).min(0, { message: 'Only positive numbers'}),

        language: string({
            required_error: 'Language is required'
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

        letter: string({
            invalid_type_error: 'Letter must be a string'
        })
        .min(1, { message: 'Must be 1 or more characters long'})
        .optional(),

        description: string({
            invalid_type_error: 'Description must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),

        duration: number({
            invalid_type_error: 'Duration must be a number'
        })
        .min(0, { message: 'Only positive numbers'})
        .optional(),

        cost: number({
            invalid_type_error: 'Cost must be a number'
        })
        .min(0, { message: 'Only positive numbers'})
        .optional(),

        language: string({
            invalid_type_error: 'Language must be a string'
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
        licenseId: string({
            required_error: 'License ID is required'
        }),
    }),
};

export const createLicenseSchema = object({
    ...payload
});

export const getLicenseSchema = object({
    ...params 
});

export const updateLicenseSchema = object({
    ...updatePayload,
    ...params
});

export const deleteLicenseSchema = object({
    ...params 
});

export type CreateLicenseInput = TypeOf<typeof createLicenseSchema>;
export type UpdateLicenseInput = TypeOf<typeof updateLicenseSchema>;
export type ReadLicenseInput = TypeOf<typeof getLicenseSchema>;
export type DeleteLicenseInput = TypeOf<typeof deleteLicenseSchema>;