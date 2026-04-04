"use client";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "./ui/field";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CategoryFormInputs,
  CategoryFormSchema,
  InputCategoryContentItem,
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

const inputUserContent: InputCategoryContentItem[] = [
  { name: "category", description: "Enter category name to add." },
];

const AddCategory = () => {
  const form = useForm<CategoryFormInputs>({
    resolver: zodResolver(CategoryFormSchema),
    defaultValues: {
      category: "",
    },
  });

  const toCapitalize = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
    <SheetContent className="p-4">
      <SheetHeader>
        <SheetTitle>Add Category</SheetTitle>
      </SheetHeader>
      <SheetDescription asChild>
        <form
          onSubmit={form.handleSubmit((data) => {
            console.log("Category data: ", data);
          })}
        >
          <FieldGroup>
            {inputUserContent.map((item, index) => (
              <Controller
                key={index}
                name={item.name}
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field aria-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>
                      {toCapitalize(field.name)}
                    </FieldLabel>
                    {item.type === "select" ? (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger
                          id={field.name}
                          className="text-foreground"
                        >
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectGroup>
                            {item.options &&
                              item.options.map((option, index) => (
                                <SelectItem value={option} key={index}>
                                  {toCapitalize(option)}
                                </SelectItem>
                              ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        className="text-foreground"
                        {...field}
                        aria-invalid={fieldState.invalid}
                        id={item.name}
                      />
                    )}
                    <FieldDescription>{item.description}</FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            ))}
          </FieldGroup>
          <Button className="mt-4 cursor-pointer" type="submit">
            Submit
          </Button>
        </form>
      </SheetDescription>
    </SheetContent>
  );
};

export default AddCategory;
