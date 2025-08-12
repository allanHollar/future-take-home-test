"use client";

import Header from "@/components/Header";
import ExerciseBrowser from "@/features/exercises/ExerciseBrowser";
import ExerciseDetails from "@/features/exercises/ExerciseDetails";
import type { Exercise } from "@/features/exercises/types";
import { useExercises } from "@/features/exercises/hooks/useExercises";
import { useEffect, useState } from "react";

export default function Home() {
  const { data } = useExercises();
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState<Exercise | null>(null);

  useEffect(() => {
    if (!selected && data.length > 0) {
      setSelected(data[0]);
    }
  }, [data, selected]);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="flex flex-col">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main className="flex flex-1 justify-center">
        <div className="flex w-full max-w-7xl">
          <ExerciseBrowser
            searchTerm={searchTerm}
            onSelect={setSelected}
            selectedId={selected?.id ?? null}
          />
          <ExerciseDetails exercise={selected} />
        </div>
      </main>
    </div>
  );
}
