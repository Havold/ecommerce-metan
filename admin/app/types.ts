import { z } from "zod";

export type UserLabelEnum = "fullName" | "email" | "phone" | "address" | "city";

export type InputUserContentItem = {
  name: UserLabelEnum;
  description: string;
  type?: string;
  options?: string[];
};

export const UserFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Username requires at least 2 characters")
    .max(10, "Maximum length of username is 10 characters"),
  email: z.email("Please enter a valid email!").min(1, "Email is required!"),
  phone: z
    .string()
    .min(7, "Phone number must be between 7 and 10 digits.")
    .max(10, "Phone number must be between 7 and 10 digits."),
  address: z.string(),
  city: z.string(),
  role: z.enum(["admin", "user"]),
});

export type UserFormInputs = z.infer<typeof UserFormSchema>;
