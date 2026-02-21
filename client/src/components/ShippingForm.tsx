"use client";

import { ArrowRight } from "lucide-react";
import Button from "./Button";

const ShippingForm = () => {
  return (
    <div>
      <h1 className="text-md font-semibold mb-8">Shipping Address</h1>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500" htmlFor="name">
            Name
          </label>
          <input
            className="text-sm ring-1 ring-gray-200 rounded-md py-2 px-3 placeholder:text-gray-300 caret-primary focus:ring-primary"
            type="text"
            id="name"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500" htmlFor="name">
            Email
          </label>
          <input
            className="text-sm ring-1 ring-gray-200 rounded-md py-2 px-3 placeholder:text-gray-300 caret-primary focus:ring-primary"
            type="text"
            id="email"
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500" htmlFor="name">
            Phone
          </label>
          <input
            className="text-sm ring-1 ring-gray-200 rounded-md py-2 px-3 placeholder:text-gray-300 caret-primary focus:ring-primary"
            type="text"
            name="Phone"
            id="Phone"
            placeholder="1234567890"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500" htmlFor="name">
            Address
          </label>
          <input
            className="text-sm ring-1 ring-gray-200 rounded-md placeholder:text-gray-300 py-2 px-3 caret-primary focus:ring-primary"
            type="text"
            name="address"
            id="address"
            placeholder="123 Main St, Anytown"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-500" htmlFor="name">
            City
          </label>
          <input
            className="text-sm ring-1 ring-gray-200 rounded-md placeholder:text-gray-300 py-2 px-3 caret-primary focus:ring-primary"
            type="text"
            name="city"
            id="city"
            placeholder="Anytown"
          />
        </div>
        <Button href="/cart?step=3">
          {" "}
          Continue
          <ArrowRight size={12} />
        </Button>
      </form>
    </div>
  );
};

export default ShippingForm;
