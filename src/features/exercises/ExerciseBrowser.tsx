import { useMemo, useState } from "react";
import { useExercises } from "./hooks/useExercises";
import { buildFacets } from "@/features/utils/facets";
import Filters, { type FilterState } from "@/features/exercises/Filters";
import type { Exercise } from "./types";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

type Props = {
  searchTerm: string;
  onSelect: (exercise: Exercise) => void;
  selectedId?: number | null;
};

const ExerciseBrowser = ({ searchTerm, onSelect, selectedId }: Props) => {
  const { data, loading, error } = useExercises();

  const { equipment, muscleGroups, movementPatterns } = useMemo(
    () => buildFacets(data),
    [data]
  );

  const [filters, setFilters] = useState<FilterState>({
    equipment: [],
    muscleGroups: [],
    movementPatterns: [],
  });

  const containsAny = (
    csv: string | null | undefined,
    selected: string[]
  ): boolean => {
    if (!selected.length) return true;
    const set = new Set(
      (csv ?? "")
        .split(",")
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean)
    );
    return selected.some((s) => set.has(s.toLowerCase()));
  };

  const filtered = useMemo<Exercise[]>(() => {
    const q = searchTerm.trim().toLowerCase();

    return data.filter((e) => {
      if (q && !e.name.toLowerCase().includes(q)) return false;
      if (!containsAny(e.equipment_required, filters.equipment)) return false;
      if (!containsAny(e.muscle_groups, filters.muscleGroups)) return false;
      if (!containsAny(e.movement_patterns, filters.movementPatterns))
        return false;
      return true;
    });
  }, [data, searchTerm, filters]);

  return (
    <div className="flex flex-col bg-gray-50/70 md:mr-5 mb-0 p-3 rounded-lg w-full md:w-1/3">
      <h3 className="mb-2.5 font-bold text-reg tracking-wide">Exercises:</h3>

      {loading && <p className="mt-4 text-gray-500">Loading…</p>}
      {error && <p className="mt-4 text-red-600">Error: {error}</p>}

      <Filters
        facets={{ equipment, muscleGroups, movementPatterns }}
        value={filters}
        onChange={setFilters}
      />

      <ul className="mt-2.5 max-h-[200px] md:max-h-[70vh] overflow-y-scroll">
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
