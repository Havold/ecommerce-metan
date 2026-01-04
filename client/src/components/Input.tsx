import { Search } from "lucide-react";

const Input = () => {
  return (
    <div className="hidden sm:flex items-center gap-2 px-2 py-1 ring-1 ring-gray-200 rounded-sm shadow-md">
      <Search className="w-4 h-4 text-gray-400" />
      <input
        id="search"
        className="text-sm caret-blue-300"
        placeholder="Search..."
      />
    </div>
  );
};

export default Input;
