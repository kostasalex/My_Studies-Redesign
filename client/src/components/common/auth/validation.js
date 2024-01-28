import { z } from 'zod';

const englishMessages = {
  username: 'Username is required',
  newUsername: 'Απαιτείται όνομα χρήστη',
  password: 'Password is required',
  newPassword: 'Password is required',
  confirmPassword: 'Confirm password required',
  studentId: 'Student ID is required',
  firstName: 'First Name is required',
  lastName: 'Last Name is required',
  confirmPasswordMatch: 'Passwords must match',
};

const greekMessages = {
  username: 'Απαιτείται όνομα χρήστη',
  newUsername: 'Απαιτείται όνομα χρήστη',
  password: 'Απαιτείται κωδικός',
  newPassword: 'Απαιτείται κωδικός',
  confirmPassword: 'Απαιτείται η επιβεβαίωση του κωδικού',
  studentId: 'Απαιτείται αριθμός μητρώου',
  firstName: 'Απαιτείται όνομα',
  lastName: 'Απαιτείται επώνυμο',
  confirmPasswordMatch: 'Οι κωδικοί πρέπει να ταιριάζουν',
};

export const loginSchema = z.object({
  username: z.string().min(1, { message: englishMessages.username }),
  password: z.string().min(1, { message: englishMessages.password }),
});

export const registerSchema = z.object({
  newUsername: z.string().min(1, { message: englishMessages.username }),
  newPassword: z.string().min(1, { message: englishMessages.newPassword }),
  confirmPassword: z.string().min(1, { message: englishMessages.confirmPassword }),
  studentId: z.string().min(1, { message: englishMessages.studentId }),
  firstName: z.string().min(1, { message: englishMessages.firstName }),
  lastName: z.string().min(1, { message: englishMessages.lastName }),
}).refine(data => data.newPassword === data.confirmPassword, {
  message: greekMessages.confirmPasswordMatch, // Use Greek message for matching
  path: ["confirmPassword"],
});

export const validateWithZod = (schema, language) => {
  const messages = language === 'en' ? englishMessages : greekMessages;

  return (values) => {
    const result = schema.safeParse(values);
    if (!result.success) {
      const errors = {};
      for (const issue of result.error.issues) {
        if (issue.path[0] === 'confirmPassword') {
          errors[issue.path[0]] = messages.confirmPasswordMatch; // Custom message for confirmPassword
        } else {
          errors[issue.path[0]] = messages[issue.path[0]];
        }
      }
      console.log(errors);
      return errors;
    }
    return {};
  };
};
