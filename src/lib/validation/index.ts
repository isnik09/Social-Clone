import * as z from "zod";


export const SignUpValidationFormSchema = z.object({
    name: z.string().min(2, { message: "Too Short" }),

    userName: z.string().min(2, { message: "Too Short" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be 8 characters or long" })


});

export const SignInValidationFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be 8 characters or long" })
});