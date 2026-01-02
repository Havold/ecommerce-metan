import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 py-8 px-6 bg-secondary-bg text-white items-center justify-around md:items-start text-center md:text-start rounded-lg text-sm">
      {/* ICON AND RIGHTS */}
      <div className="flex flex-col gap-4">
        <Link href="/" className="md:hidden text-3xl text-primary font-bold">
          M
        </Link>
        <Link
          href="/"
          className="hidden md:block text-2xl text-primary font-bold"
        >
          METAN
        </Link>
        <span className="text-gray-500">@ 2025 Metan.</span>
        <span className="text-gray-500">All rights reserved.</span>
      </div>
      {/* LINKS */}
      <div className="flex flex-col gap-4">
        <h1>Links</h1>
        <Link href="/" className="text-gray-500">
          Homepage
        </Link>
        <Link href="/" className="text-gray-500">
          Contact
        </Link>
        <Link href="/" className="text-gray-500">
          Terms of Service
        </Link>
        <Link href="/" className="text-gray-500">
          Privacy Policy
        </Link>
      </div>
      {/* PRODUCTS */}
      <div className="flex flex-col gap-4">
        <h1>Products</h1>
        <Link href="/" className="text-gray-500">
          All Products
        </Link>
        <Link href="/" className="text-gray-500">
          New Arrivals
        </Link>
        <Link href="/" className="text-gray-500">
          Best Sellers
        </Link>
        <Link href="/" className="text-gray-500">
          Sale
        </Link>
      </div>
      {/* COMPANY */}
      <div className="flex flex-col gap-4">
        <h1>Company</h1>
        <Link href="/" className="text-gray-500">
          About
        </Link>
        <Link href="/" className="text-gray-500">
          Contact
        </Link>
        <Link href="/" className="text-gray-500">
          Blog
        </Link>
        <Link href="/" className="text-gray-500">
          Affiliate Program
        </Link>
      </div>
    </div>
  );
};

export default Footer;
