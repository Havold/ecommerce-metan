"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const handleChangeSort = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="flex gap-2 justify-end text-sm items-center my-4">
      <span className="text-gray-500">Sort by:</span>
      <select
        className="ring-1 ring-gray-300 p-1 rounded-sm"
        name="sort"
        id="sort"
        onChange={(e) => handleChangeSort(e.target.value)}
        defaultValue="newsest"
      >
        <option value="newsest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
