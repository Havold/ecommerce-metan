"use client";

import { ArrowRight } from "lucide-react";
import Button from "./Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { PaymentFormInputs, PaymentFormSchema } from "../types";
import Image from "next/image";

const PaymentForm = ({
  setPaymentForm,
}: {
  setPaymentForm: (data: PaymentFormInputs) => void;
}) => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(PaymentFormSchema),
  });

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
    setPaymentForm(data);
    console.log("Hello World");
  };

  return (
    <div>
      <h1 className="text-md font-semibold mb-8">Payment Method</h1>
      <form
        onSubmit={handleSubmit(handlePaymentForm)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500" htmlFor="name">
            Name on Card
          </label>
          <input
            className="text-sm ring-1 ring-gray-200 rounded-md py-2 px-3 placeholder:text-gray-300 caret-primary focus:ring-primary"
            type="text"
            id="cardHolder"
            placeholder="John Doe"
            {...register("cardHolder")}
          />
          {errors.cardHolder && (
            <span className="text-xs text-error">
              {errors.cardHolder.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500" htmlFor="email">
            Card Number
          </label>
          <input
            className="text-sm ring-1 ring-gray-200 rounded-md py-2 px-3 placeholder:text-gray-300 caret-primary focus:ring-primary"
            type="text"
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            {...register("cardNumber")}
          />
          {errors.cardNumber && (
            <span className="text-xs text-error">
              {errors.cardNumber.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500" htmlFor="phone">
            Expiration Date
          </label>
          <input
            className="text-sm ring-1 ring-gray-200 rounded-md py-2 px-3 placeholder:text-gray-300 caret-primary focus:ring-primary"
            type="text"
            id="expDate"
            placeholder="MM/YY"
            {...register("expDate")}
          />
          {errors.expDate && (
            <span className="text-xs text-error">{errors.expDate.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500" htmlFor="phone">
            CVV
          </label>
          <input
            className="text-sm ring-1 ring-gray-200 rounded-md py-2 px-3 placeholder:text-gray-300 caret-primary focus:ring-primary"
            type="text"
            id="cvv"
            placeholder="123"
            {...register("cvv")}
          />
          {errors.cvv && (
            <span className="text-xs text-error">{errors.cvv.message}</span>
          )}
        </div>
        <div className="flex gap-3">
          <Image
            className="cursor-pointer"
            alt="cards"
            src="/cards.png"
            width={50}
            height={100}
          />
          <Image
            className="cursor-pointer"
            alt="klarna"
            src="/klarna.png"
            width={50}
            height={100}
          />
          <Image
            className="cursor-pointer"
            alt="stripe"
            src="/stripe.png"
            width={50}
            height={100}
          />
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

export default PaymentForm;
