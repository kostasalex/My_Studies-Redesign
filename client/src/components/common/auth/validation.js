import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, { message: 'Username is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export const registerSchema = z.object({
  newUsername: z.string().min(1, { message: 'Username is required' }),
  newPassword: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
  confirmPassword: z.string().min(6, { message: 'Confirm password must be at least 6 characters long' }),
  studentId: z.string().min(1, { message: 'Student ID is required' }),
  firstName: z.string().min(1, { message: 'First Name is required' }),
  lastName: z.string().min(1, { message: 'Last Name is required' }),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: 'Passwords must match',
  path: ["confirmPassword"],
});

export const validateWithZod = (schema) => {
  return (values) => {
    const result = schema.safeParse(values);
    if (!result.success) {
      const errors = {};
      for (const issue of result.error.issues) {
        errors[issue.path[0]] = issue.message;
      }
      console.log(errors)
      return errors;
    }
    return {};
  };
};
