import { z } from 'zod';

const NameValidator = z.string().min(1, 'Required');

export const loginValidator = z.object({
  userName: NameValidator,
  password: NameValidator,
});

export function validateWithZod(schema) {
  return (values) => {
    const result = schema.safeParse(values);
    if (!result.success) {
      const errors = {};
      result.error.issues.forEach((issue) => {
        errors[issue.path[0]] = issue.message;
      });
      return errors;
    }
    return {};
  };
}
