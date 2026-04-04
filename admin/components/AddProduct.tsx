"use client";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "./ui/field";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ProductFormInputs,
  ProductFormSchema,
  UserFormInputs,
  UserFormSchema,
} from "@/app/types";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { ScrollArea } from "./ui/scroll-area";
import { Checkbox } from "./ui/checkbox";

const categories = [
  "T-shirts",
  "Shoes",
  "Accessories",
  "Bags",
  "Dresses",
  "Jackets",
  "Gloves",
] as const;

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

const AddProduct = () => {
  const form = useForm<ProductFormInputs>({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: {
      name: "",
      shortDescription: "",
      description: "",
      price: 0,
      sizes: [],
      colors: [],
      images: {},
    },
  });

  const selectedColors = useWatch({
    control: form.control,
    name: "colors",
  });

  const toCapitalize = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
    <SheetContent className="px-4">
      <ScrollArea className="h-screen">
        <SheetHeader className="py-4 px-0">
          <SheetTitle>Add Product</SheetTitle>
        </SheetHeader>
        <SheetDescription asChild>
          <form
            onSubmit={form.handleSubmit((data) => {
              console.log("User data: ", data);
            })}
          >
            <FieldGroup>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="name">Product Name</FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      id="name"
                    />
                    <FieldDescription>Enter product name.</FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="shortDescription"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="shortDesc">
                      Short Description
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      id="shortDesc"
                    />
                    <FieldDescription>
                      Enter short description about the product.
                    </FieldDescription>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="desc">Description</FieldLabel>
                    <Textarea
                      {...field}
                      aria-invalid={fieldState.invalid}
                      id="desc"
                    />
                    <FieldDescription>
                      Enter description about the product.
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="price"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="price">Price</FieldLabel>
                    <Input
                      type="number"
                      {...field}
                      aria-invalid={fieldState.invalid}
                      id="price"
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                    <FieldDescription>
                      Enter product&apos;s price (Currency: $)
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="category"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel htmlFor="category">Category</FieldLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger
                        {...field}
                        aria-invalid={fieldState.invalid}
                        id="category"
                        className="max-w-fit"
                      >
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectGroup>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FieldDescription>
                      Select category for product.
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="sizes"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Sizes</FieldLabel>
                    <FieldDescription>
                      Choose sizes for the product
                    </FieldDescription>
                    <div className="grid grid-cols-3 gap-3">
                      {sizes.map((size) => (
                        <div key={size} className="flex gap-2 items-center">
                          <Checkbox
                            className="cursor-pointer"
                            aria-invalid={fieldState.invalid}
                            checked={field.value.includes(size)}
                            onCheckedChange={(checked) => {
                              const values = field.value || [];
                              if (checked) {
                                field.onChange([...values, size]);
                              } else {
                                field.onChange(
                                  values.filter((value) => value !== size),
                                );
                              }
                            }}
                          />
                          <span className="text-primary">{size}</span>
                        </div>
                      ))}
                    </div>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="colors"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Colors</FieldLabel>
                    <FieldDescription>
                      Choose colors for the product
                    </FieldDescription>
                    <div className="grid grid-cols-3 gap-3">
                      {colors.map((color) => (
                        <div key={color} className="flex gap-2 items-center">
                          <Checkbox
                            className="cursor-pointer"
                            aria-invalid={fieldState.invalid}
                            checked={field.value.includes(color)}
                            onCheckedChange={(checked) => {
                              const values = field.value || [];
                              if (checked) {
                                field.onChange([...values, color]);
                              } else {
                                field.onChange(
                                  values.filter((value) => value !== color),
                                );
                              }
                            }}
                          />
                          <div className="flex gap-1 items-center">
                            <div
                              style={{ backgroundColor: color }}
                              className="w-2 h-2 rounded-full border border-gray-400"
                            ></div>
                            <span className="text-xs text-primary">
                              {color}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="images"
                control={form.control}
                render={({ field, fieldState }) => {
                  return selectedColors && selectedColors.length > 0 ? (
                    <Field>
                      <FieldLabel>Upload</FieldLabel>
                      <FieldDescription>
                        Upload images for selected colors
                      </FieldDescription>
                      <FieldContent className="space-y-2">
                        {selectedColors.map((color) => (
                          <div className="flex justify-between" key={color}>
                            <div className="flex items-center gap-2">
                              <div
                                style={{ backgroundColor: color }}
                                className="w-2 h-2 rounded-full border border-primary"
                              ></div>
                              <span className="text-sm text-primary">
                                {color}
                              </span>
                            </div>
                            <Input
                              aria-invalid={fieldState.invalid}
                              className="max-w-60"
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                const newValue = {
                                  ...field.value,
                                  [color]: file,
                                };
                                const filteredValue = Object.fromEntries(
                                  Object.entries(newValue).filter(([key]) =>
                                    selectedColors.includes(
                                      key as typeof color,
                                    ),
                                  ),
                                );
                                field.onChange(filteredValue);
                                console.log(filteredValue);
                              }}
                            />
                          </div>
                        ))}
                      </FieldContent>
                      {form.formState.errors.images && (
                        <FieldError errors={[form.formState.errors.images]} />
                      )}
                    </Field>
                  ) : (
                    <></>
                  );
                }}
              />
            </FieldGroup>
            <Button className="my-4 cursor-pointer" type="submit">
              Submit
            </Button>
          </form>
        </SheetDescription>
      </ScrollArea>
    </SheetContent>
  );
};

export default AddProduct;
