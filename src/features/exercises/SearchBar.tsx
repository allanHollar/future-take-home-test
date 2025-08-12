import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative mb-3.5 w-[300px] md:w-[400px]">
      <MagnifyingGlassIcon className="top-1/2 left-3 absolute w-5 h-5 text-gray-500 -translate-y-1/2 pointer-events-none" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="py-2 pr-3 pl-10 border border-[#d6d7d7] rounded-lg w-full"
        placeholder="Search exercises..."
        name="search"
      />
    </div>
  );
};

export default SearchBar;
