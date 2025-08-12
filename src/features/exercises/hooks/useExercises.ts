"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Exercise } from "../types";

const FUTURE_EXERCISES_URL =
  "https://candidate.staging.future.co/sandbox/api/exercises";

type ExerciseResults = {
  data: Exercise[];
  loading: boolean;
  error: string | null;
};

export const useExercises = (): ExerciseResults => {
  const [data, setData] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(FUTURE_EXERCISES_URL);
        if (!res.ok) throw Error(`HTTP Error: ${res.status}`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message || "Failed to fetch exercises");
          setError(error.message || "Failed to fetch exercises");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  return { data, loading, error };
};
