import SearchBar from "@/features/exercises/SearchBar";

type HeaderProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

const Header = ({ searchTerm, onSearchChange }: HeaderProps) => {
  return (
    <header className="flex justify-center mt-3 md:mb-7 md:p-2">
      <div className="flex md:flex-row flex-col items-center border-[#d6d7d7] border-b w-full max-w-7xl tracking-wide">
        <h1 className="p-4 pt-5 pb-5 font-bold text-2xl">Exercise Library</h1>
        <SearchBar value={searchTerm} onChange={onSearchChange} />
      </div>
    </header>
  );
};

export default Header;
