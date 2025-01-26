const { z } = require('zod');


const validateUserSignupSchema = z.object({ 
    username: z.string().max(10),
    email: z.string().email("Invalid email format"),
    password: z.string(),
    role: z.string()
})

const validateUserLoginSchema = z.object({ 
    email: z.string().email(),
    password: z.string(),
})

module.exports = {
    validateUserSignupSchema,
    validateUserLoginSchema
}

// .min(8, { message: "Password must be at least 8 characters long." })
//         .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
//         .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
//         .regex(/[0-9]/, { message: "Password must contain at least one number." })
//         .regex(/[\W_]/, { message: "Password must contain at least one special character." }),