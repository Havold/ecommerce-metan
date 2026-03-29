import { z } from "zod";

export type UserLabelEnum = "fullName" | "email" | "phone" | "address" | "city";
export type OrderLabelEnum = "amount" | "userId" | "status";
// export type OrderStatusEnum = "pending" | "process" | "success" | "failed";

type InputContentBase<TD> = {
  name: TD;
  description: string;
  type?: string;
  options?: string[];
};
export type InputUserContentItem = InputContentBase<UserLabelEnum>;

export type InputOrderContentItem = InputContentBase<OrderLabelEnum>;

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

export const OrderFormSchema = z.object({
  amount: z.number().min(1, "Amount is required!"),
  userId: z.string().min(1, "User ID is required!"),
  status: z.enum(["pending", "process", "success", "failed"]),
});

export type UserFormInputs = z.infer<typeof UserFormSchema>;
export type OrderFormInputs = z.infer<typeof OrderFormSchema>;
