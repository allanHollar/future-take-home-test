import { useMemo } from "react";
import { useExercises } from "./hooks/useExercises";
import type { Exercise } from "./types";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

type Props = {
  searchTerm: string;
  onSelect: (exercise: Exercise) => void;
  selectedId?: number | null;
};

const ExerciseBrowser = ({ searchTerm, onSelect, selectedId }: Props) => {
  const { data, loading, error } = useExercises();

  const filtered = useMemo<Exercise[]>(() => {
    const q = searchTerm.trim().toLowerCase();
    console.log(q);
    return q
      ? data.filter((e: Exercise) => e.name.toLowerCase().includes(q))
      : data;
  }, [searchTerm, data]);

  return (
    <div className="bg-gray-50/70 mr-5 py-3 pr-0 pl-4 rounded-lg w-1/3">
      <h3 className="font-bold text-reg tracking-wide">Exercises:</h3>
      {loading && <p className="mt-4 text-gray-500">Loading…</p>}
      {error && <p className="mt-4 text-red-600">Error: {error}</p>}

      <ul className="mt-2.5 max-h-[70vh] overflow-y-scroll">
        {!loading && !error && filtered.length === 0 && <li>No matches.</li>}

        {filtered.map((e) => {
          const isActive = e.id === selectedId;

          return (
            <li key={e.id}>
              <button
                type="button"
                onClick={() => onSelect(e)}
                className={`hover:bg-[#36d5f5] px-3 py-2 w-full text-left text-sm transition-colors cursor-pointer outline-none flex flex-row justify-between items-center ${
                  isActive ? "bg-gray-100" : ""
                }`}
              >
                <span>{e.name}</span>

                {isActive && (
                  <ChevronRightIcon
                    className="flex items-end w-4 h-4 text-gray-500"
                    aria-hidden="true"
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExerciseBrowser;
