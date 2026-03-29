"use client";
import {
  InputOrderContentItem,
  OrderFormInputs,
  OrderFormSchema,
} from "@/app/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "./ui/field";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";

const inputOrderContent: InputOrderContentItem[] = [
  {
    name: "amount",
    description: "Enter the amount of the order.",
    type: "number",
  },
  {
    name: "userId",
    description: "Enter the User ID.",
  },
  {
    name: "status",
    description: "Select the status of the order.",
    type: "select",
    options: ["pending", "process", "success", "failed"],
  },
];

export default function AddOrder() {
  const form = useForm<OrderFormInputs>({
    resolver: zodResolver(OrderFormSchema),
    defaultValues: {
      amount: 0,
      userId: "",
    },
  });

  const toCapitalize = (text: string) => {
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
            console.log("Order data: ", data);
          })}
        >
          <FieldGroup>
            {inputOrderContent.map((item, index) => (
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
                        value={field.value as string}
                      >
                        <SelectTrigger
                          id={field.name}
                          className="text-foreground"
                        >
                          <SelectValue placeholder="Select a status" />
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
                        onChange={(e) => {
                          if (item.type === "number")
                            field.onChange(Number(e.target.value));
                          else field.onChange(e.target.value);
                        }}
                        id={item.name}
                        type={item.type === "number" ? "number" : "text"}
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
}
