import { validateHeaderValue } from "http";
import { z } from "zod";

const colors = [
  "blue",
  "green",
  "red",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "black",
  "white",
] as const;

const categories = [
  "T-shirts",
  "Shoes",
  "Accessories",
  "Bags",
  "Dresses",
  "Jackets",
  "Gloves",
] as const;

const sizes = [
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
] as const;

export type UserLabelEnum = "fullName" | "email" | "phone" | "address" | "city";
export type OrderLabelEnum = "amount" | "userId" | "status";
export type CategoryEnum = "category";
// export type OrderStatusEnum = "pending" | "process" | "success" | "failed";

type InputContentBase<TD> = {
  name: TD;
  description: string;
  type?: string;
  options?: string[];
};
export type InputUserContentItem = InputContentBase<UserLabelEnum>;

export type InputOrderContentItem = InputContentBase<OrderLabelEnum>;

export type InputCategoryContentItem = InputContentBase<CategoryEnum>;

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
});

export const OrderFormSchema = z.object({
  amount: z.number().min(1, "Amount is required!"),
  userId: z.string().min(1, "User ID is required!"),
  status: z.enum(["pending", "process", "success", "failed"]),
});

export const ProductFormSchema = z
  .object({
    name: z.string().min(1, "Name is required!"),
    shortDescription: z.string().min(1, "Short description is required!"),
    description: z.string().min(1, "Description is required!"),
    price: z.number().min(1, "Please enter valid price!"),
    category: z.enum(categories, "Please select a category!"),
    sizes: z.array(z.enum(sizes)).min(1, "Please select at least 1 size"),
    colors: z.array(z.enum(colors)).min(1, "Please select at least 1 color"),
    images: z.record(z.enum(colors), z.instanceof(File)),
  })
  .superRefine((data, ctx) => {
    const { colors, images } = data;
    const missingColors = colors.filter((color) => !images[color]);

    if (missingColors.length > 0) {
      ctx.addIssue({
        path: ["images"],
        code: "custom",
        message: `Missing images for colors: ${missingColors.join(", ")}`,
      });
    }
  });

export const CategoryFormSchema = z.object({
  category: z.string().min(1, "Category name is required!"),
});

export type UserFormInputs = z.infer<typeof UserFormSchema>;
export type OrderFormInputs = z.infer<typeof OrderFormSchema>;
export type ProductFormInputs = z.infer<typeof ProductFormSchema>;
export type CategoryFormInputs = z.infer<typeof CategoryFormSchema>;
