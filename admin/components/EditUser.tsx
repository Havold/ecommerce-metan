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
  InputUserContentItem,
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

const inputUserContent: InputUserContentItem[] = [
  { name: "fullName", description: "Enter user full name." },
  { name: "email", description: "Only admin can see your email." },
  {
    name: "phone",
    description: "Only admin can see your phone number. (optional)",
  },
  { name: "address", description: "Enter user address. (optional)" },
  {
    name: "city",
    description: "Enter user city. (optional)",
  },
];

const EditUser = () => {
  const form = useForm<UserFormInputs>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      fullName: "john.doe",
      email: "john.doe@gmail.com",
      phone: "+1 234 678",
      address: "123 Main St",
      city: "New York",
    },
  });

  const toCapitalize = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
    <SheetContent className="p-4">
      <SheetHeader>
        <SheetTitle>Edit Profile</SheetTitle>
      </SheetHeader>
      <SheetDescription asChild>
        <form
          onSubmit={form.handleSubmit((data) => {
            console.log("User data: ", data);
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

export default EditUser;
