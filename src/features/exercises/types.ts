export type Exercise = {
  id: number;
  name: string;
  description?: string | null;
  muscle_groups?: string | null;
  equipment_required?: string | null;
  movement_patterns?: string | null;
  synonyms?: string | null;
  side?: string | null;
  is_alternating?: boolean | null;
  video?: {
    is_flipped?: boolean | null;
    url?: string;
    audio?: { url?: string | null } | null;
  } | null;
};
