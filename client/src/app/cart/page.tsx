import Button from "@/src/components/Button";
import CartItem from "@/src/components/CartItem";
import PaymentForm from "@/src/components/PaymentForm";
import ShippingForm from "@/src/components/ShippingForm";
import Step from "@/src/components/Step";
import { CartItems } from "@/src/types";
import { ArrowRight } from "lucide-react";

const listSteps = [
  {
    id: 1,
    name: "Shopping Cart",
  },
  {
    id: 2,
    name: "Shipping Address",
  },
  {
    id: 3,
    name: "Payment Method",
  },
];

const cartItems: CartItems = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    selectedColor: "gray",
    selectedSize: "l",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedColor: "gray",
    selectedSize: "m",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 1,
    selectedColor: "green",
    selectedSize: "s",
  },
];

const CartPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ step: string }>;
}) => {
  const activeStep = (await searchParams).step ?? "1";
  const discountValue = 10;
  const shippingFee = 10;
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const continueBtnElm = (
    <>
      Continue
      <ArrowRight size={12} />
    </>
  );
  return (
    <div className="flex flex-col items-center gap-8 my-12">
      <h1 className="text-2xl font-semibold">Your Shopping Cart</h1>
      {/* STEPS */}
      <div className="flex gap-12">
        {listSteps.map((step) => {
          return <Step key={step.id} id={step.id} name={step.name} />;
        })}
      </div>
      {/* BODY */}
      <div className="flex w-full flex-col lg:flex-row gap-16">
        {/* LEFT */}
        <div className="w-full lg:w-7/12 shadow-lg rounded-lg p-8 border border-gray-100">
          {activeStep === "1" ? (
            <>
              {" "}
              <h1 className="text-md font-semibold">Cart Items</h1>
              {/* <CartList cartItems={cartItems} />{" "} */}
              <div className="flex flex-col gap-4 mt-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>
            </>
          ) : activeStep === "2" ? (
            <ShippingForm />
          ) : (
            <PaymentForm />
          )}
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-5/12 h-fit shadow-lg rounded-lg p-8 border border-gray-100">
          <h1 className="font-semibold mb-4 text-md">Cart Details</h1>
          {/* DETAILS */}
          <div className="flex flex-col gap-2 my-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold">${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Discount (10%)</span>
              <span className="font-semibold text-red-500">
                -${discountValue}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Shipping Fee</span>
              <span className="font-semibold">${shippingFee}</span>
            </div>
            <div className="w-full h-px bg-gray-200 rounded-full"></div>
          </div>
          {/* TOTALS */}
          <div className="flex justify-between items-center text-md my-4">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">
              ${(subTotal - discountValue + shippingFee).toFixed(2)}
            </span>
          </div>
          {/* BUTTON */}
          {/* <button
            onClick={handleClick}
            className="text-sm flex gap-2 justify-center items-center w-full bg-secondary-bg text-white p-3 rounded-md cursor-pointer hover:opacity-95 hover:scale-98 transition-all ease-in"
          >
            Continue
            <ArrowRight size={12} />
          </button> */}
          {activeStep === "1" ? (
            <Button
              content={continueBtnElm}
              typeOfClickEvent="navigate"
              href="/cart?step=2"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
