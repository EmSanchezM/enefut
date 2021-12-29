import { object, string, TypeOf } from "zod";

const payload = {
    body: object({
        section: string({
            required_error: 'Section is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),

        title: string({
            required_error: 'Title is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),
        
        description: string({
            required_error: 'Description is required'
        }).min(2, { message: 'Must be 2 or more characters long'}),
 
        license: string({
            required_error: 'License ID is required'
        }),

        dateInit: string(),

        dateEnd: string(),

        type: string({
            required_error: 'Type is required'
        }).min(2, { message: 'Must be 2 or more characters long'})
    })
};

const updatePayload = {
    body: object({
        section: string({
            invalid_type_error: 'Section must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),

        title: string({
            invalid_type_error: 'Title must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),
        
        description: string({
            invalid_type_error: 'Description must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional(),
 
        license: string({
            invalid_type_error: 'License ID must be a string'
        })
        .optional(),

        dateInit: string().optional(),

        dateEnd: string().optional(),

        type: string({
            invalid_type_error: 'Type must be a string'
        })
        .min(2, { message: 'Must be 2 or more characters long'})
        .optional()
    })
};

const params = {
    params: object({
        noticeId: string({
            required_error: 'Notice ID is required'
        }),
    }),
};

export const createNoticeSchema = object({
    ...payload 
});

export const getNoticeSchema = object({
    ...params 
});

export const updateNoticeSchema = object({
    ...updatePayload,
    ...params
});

export const deleteNoticeSchema = object({
    ...params 
});

export type CreateNoticeInput = TypeOf<typeof createNoticeSchema>;
export type UpdateNoticeInput = TypeOf<typeof updateNoticeSchema>;
export type ReadNoticeInput = TypeOf<typeof getNoticeSchema>;
export type DeleteNoticeInput = TypeOf<typeof deleteNoticeSchema>;
