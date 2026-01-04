import Image from "next/image";
import Category from "./components/Categories";
import ProductList from "./components/ProductList";
import Link from "next/link";

const HomePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div>
      <div className="relative aspect-3/1 overflow-hidden rounded-md mb-8">
        <Image
          src="/featured.png"
          alt="Picture of product"
          fill
          className="object-cover"
        />
      </div>
      <Category />
      <ProductList category={category} />
      <Link
        className="underline flex justify-end mb-8 text-sm"
        href={category ? `/products?category=${category}` : `/products`}
      >
        View all products
      </Link>
    </div>
  );
};

export default HomePage;
