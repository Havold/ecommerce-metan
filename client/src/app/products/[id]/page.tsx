import ProductInteraction from "@/src/components/ProductInteraction";
import { Color } from "@/src/types";
import Image from "next/image";
import Link from "next/link";

// TEMPORARY
const product = {
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
};

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ size: string; color: string }>;
}) => {
  const { size, color } = await searchParams;
  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = (color as Color) || product.colors[0];
  return (
    <div className="flex flex-col md:flex-row gap-5 my-10">
      {/* LEFT */}
      <div className="relative flex-5/12 aspect-2/3">
        <Image
          className="object-contain"
          src={product.images[selectedColor]}
          alt="image"
          fill
        />
      </div>
      {/* RIGHT */}
      <div className="flex-7/12 flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.description}</p>
        <span className="text-2xl font-semibold">${product.price}</span>
        <ProductInteraction
          product={product}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
        />
        {/* PAYMENT METHODS */}
        <div className="flex gap-2">
          <Image
            className="rounded-sm"
            src={"/klarna.png"}
            alt="klarna"
            width={50}
            height={20}
          />
          <Image
            className="rounded-sm"
            src={"/cards.png"}
            alt="cards"
            width={50}
            height={20}
          />
          <Image
            className="rounded-sm"
            src={"/stripe.png"}
            alt="stripe"
            width={50}
            height={20}
          />
        </div>
        {/* Terms & Conditions */}
        <p className="text-xs text-gray-400">
          By clicking Pay Now, you agree to our{" "}
          <Link className="underline" href="/terms-and-conditions">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link className="underline" href="/private-policy">
            Privacy Policy
          </Link>
          . You authorize us to change your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <Link className="underline" href="/refund-polices">
            Refund Policies
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
