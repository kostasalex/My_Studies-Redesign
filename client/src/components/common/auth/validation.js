import { z } from 'zod';

const englishMessages = {
  username: 'Username is required',
  password: 'Password is required',
  newPassword: 'Password must be at least 6 characters long',
  confirmPassword: 'Confirm password must be at least 6 characters long',
  studentId: 'Student ID is required',
  firstName: 'First Name is required',
  lastName: 'Last Name is required',
  confirmPasswordMatch: 'Passwords must match',
};

const greekMessages = {
  newUsername: 'Απαιτείται όνομα χρήστη',
  password: 'Απαιτείται κωδικός',
  newPassword: 'Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες',
  confirmPassword: 'Η επιβεβαίωση του κωδικού πρέπει να έχει τουλάχιστον 6 χαρακτήρες',
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
  newUsername: z.string().min(1, { message: greekMessages.newUsername }),
  newPassword: z.string().min(6, { message: englishMessages.newPassword }),
  confirmPassword: z.string().min(6, { message: englishMessages.confirmPassword }),
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
        // Use the translated field name as the key for error messages
        if (issue.path[0] === 'confirmPassword') {
          errors[issue.path[0]] = messages.confirmPasswordMatch; // Custom message for confirmPassword
        } else {
          errors[issue.path[0]] = messages[issue.path[0]] || messages.confirmPasswordMatch;
        }
      }
      console.log(errors);
      return errors;
    }
    return {};
  };
};
