"use client";

import { ArrowRight } from "lucide-react";
import Button from "./Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ShippingFormInputs, ShippingFormSchema } from "../types";

const ShippingForm = ({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(ShippingFormSchema),
  });

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3");
  };

  return (
    <div>
      <h1 className="text-md font-semibold mb-8">Shipping Address</h1>
      <form
        onSubmit={handleSubmit(handleShippingForm)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500" htmlFor="name">
            Name
          </label>
          <input
            className="text-sm ring-1 ring-gray-200 rounded-md py-2 px-3 placeholder:text-gray-300 caret-primary focus:ring-primary"
            type="text"
            id="name"
            placeholder="John Doe"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-xs text-error">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500" htmlFor="email">
            Email
          </label>
          <input
            className="text-sm ring-1 ring-gray-200 rounded-md py-2 px-3 placeholder:text-gray-300 caret-primary focus:ring-primary"
            type="text"
            id="email"
            placeholder="john.doe@example.com"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-xs text-error">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500" htmlFor="phone">
            Phone
          </label>
          <input
            className="text-sm ring-1 ring-gray-200 rounded-md py-2 px-3 placeholder:text-gray-300 caret-primary focus:ring-primary"
            type="text"
            id="Phone"
            placeholder="1234567890"
            {...register("phone")}
          />
          {errors.phone && (
            <span className="text-xs text-error">{errors.phone.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500" htmlFor="name">
            Address
          </label>
          <input
            className="text-sm ring-1 ring-gray-200 rounded-md placeholder:text-gray-300 py-2 px-3 caret-primary focus:ring-primary"
            type="text"
            id="address"
            placeholder="123 Main St, Anytown"
            {...register("address")}
          />
          {errors.address && (
            <span className="text-xs text-error">{errors.address.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500" htmlFor="name">
            City
          </label>
          <input
            className="text-sm ring-1 ring-gray-200 rounded-md placeholder:text-gray-300 py-2 px-3 caret-primary focus:ring-primary"
            type="text"
            id="city"
            placeholder="Anytown"
            {...register("city")}
          />
          {errors.city && (
            <span className="text-xs text-error">{errors.city.message}</span>
          )}
        </div>
        <Button type="submit">
          {" "}
          Continue
          <ArrowRight size={12} />
        </Button>
      </form>
    </div>
  );
};

export default ShippingForm;
