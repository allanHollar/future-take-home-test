import type { Exercise } from "../exercises/types";

export type Facets = {
  equipment: string[];
  muscleGroups: string[];
  movementPatterns: string[];
};

const splitCSV = (csv?: string | null): string[] =>
  (csv ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

const toUniqueSorted = (values: string[]): string[] => {
  const seen = new Map<string, string>();
  for (const v of values) {
    const key = v.toLowerCase();
    if (!seen.has(key)) seen.set(key, v);
  }
  return Array.from(seen.values()).sort((a, b) => a.localeCompare(b));
};

export const buildFacets = (data: Exercise[]): Facets => {
  const equipmentAll: string[] = [];
  const muscleAll: string[] = [];
  const movementAll: string[] = [];

  for (const ex of data) {
    equipmentAll.push(...splitCSV(ex.equipment_required));
    muscleAll.push(...splitCSV(ex.muscle_groups));
    movementAll.push(...splitCSV(ex.movement_patterns));
  }

  return {
    equipment: toUniqueSorted(equipmentAll),
    muscleGroups: toUniqueSorted(muscleAll),
    movementPatterns: toUniqueSorted(movementAll),
  };
};
