import Image from "next/image";
import Category from "./components/Categories";

const HomePage = () => {
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
    </div>
  );
};

export default HomePage;
