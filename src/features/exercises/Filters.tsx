import FacetDropdown from "./FacetDropdown";

export type Facets = {
  equipment: string[];
  muscleGroups: string[];
  movementPatterns: string[];
};

export type FilterState = {
  equipment: string[];
  muscleGroups: string[];
  movementPatterns: string[];
};

type FiltersProps = {
  facets: Facets; // <-- use a single facets object
  value: FilterState;
  onChange: (next: FilterState) => void;
};

const Filters = ({ facets, value, onChange }: FiltersProps) => {
  return (
    <div className="space-y-3">
      <FacetDropdown
        title="Equipment Required"
        options={facets.equipment}
        value={value.equipment}
        onChange={(equipment) => onChange({ ...value, equipment })}
      />

      <FacetDropdown
        title="Muscle Groups"
        options={facets.muscleGroups}
        value={value.muscleGroups}
        onChange={(muscleGroups) => onChange({ ...value, muscleGroups })}
      />

      <FacetDropdown
        title="Movement Patterns"
        options={facets.movementPatterns}
        value={value.movementPatterns}
        onChange={(movementPatterns) =>
          onChange({ ...value, movementPatterns })
        }
      />
    </div>
  );
};

export default Filters;
