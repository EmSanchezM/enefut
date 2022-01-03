import { object, string, TypeOf } from "zod";

const payload = {
    body: object({
        identidad: string({
            required_error: 'Identidad is required'
        }),

        name: string({
            required_error: 'Name is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        lastName: string({
            required_error: 'Last Name is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        title: string({
            required_error: 'Title is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),
        
        birth: string(),

        email: string({
            required_error: 'Email is required'
        }).email('Not a valid email'),

        password: string({
            required_error: 'Password is required'
        }).min(6, 'Password too short should be 6 chars minimum'),

        passwordConfirm: string({
            required_error: 'Password is required'
        }).min(6, 'Password Confirm too short should be 6 chars minimum'),

        phone: string(),

        location: string(),

        specialty: string({
            required_error: 'Especialty is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        experience: string({
            required_error: 'Experience is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        type: string({
            required_error: 'Type teacher is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

    }).refine((data) => data.password === data.passwordConfirm, {
        message: 'Password do not match',
        path: ['passwordConfirm']
    })
};

const updatePayload = {
    body: object({
        identidad: string({
            invalid_type_error: 'Identidad must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),

        name: string({
            invalid_type_error: 'Identidad must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),

        lastName: string({
            invalid_type_error: 'Last Name must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),

        code: string({
            invalid_type_error: 'Code must be a string'
        })
        .optional(),

        title: string({
            invalid_type_error: 'Title must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),
        
        birth: string().optional(),

        email: string({
            invalid_type_error: 'Email must be a string'
        })
        .email('Not a valid email')
        .optional(),

        phone: string().optional(),

        location: string().optional(),

        specialty: string({
            invalid_type_error: 'Specialty must be a string'
        })
        .optional(),

        experience: string({
            invalid_type_error: 'Experience must be a string'
        })
        .optional(),

        type: string({
            invalid_type_error: 'Type must be a string'
        })
        .optional(),
    })
};

const params = {
    params: object({
        teacherId: string({
            required_error: 'Teacher ID is required'
        }),
    }),
};

export const createTeacherSchema = object({
    ...payload
});

export const getTeacherSchema = object({
    ...params 
});

export const updateTeacherSchema = object({
    ...updatePayload,
    ...params
});

export const deleteTeacherSchema = object({
    ...params 
});

export type CreateTeacherInput = Omit<TypeOf<typeof createTeacherSchema>, 'body.passwordConfirm'>;
export type UpdateTeacherInput = TypeOf<typeof updateTeacherSchema>;
export type ReadTeacherInput = TypeOf<typeof getTeacherSchema>;
export type DeleteTeacherInput = TypeOf<typeof deleteTeacherSchema>;