import VideoPlayer from "@/components/VideoPlayer";
import type { Exercise } from "./types";

type Props = {
  exercise: Exercise | null;
};

const ExerciseDetails = ({ exercise }: Props) => {
  const formText = (str: string | null | undefined): string => {
    if (!str) return "";
    return str
      .split(",")
      .map((s) => s.trim())
      .join(", ");
  };

  return (
    <div className="flex flex-col p-4 w-full md:w-2/3">
      <div className="mt-4">
        <VideoPlayer url={exercise?.video?.url} />
      </div>

      <div className="bg-gray-100 p-3 pt-5 rounded-lg">
        <h2 className="mb-2 font-bold text-xl tracking-wide">
          {exercise?.name}
        </h2>
        <p className="mb-4 text-sm">{exercise?.description}</p>

        {exercise?.equipment_required && (
          <ul className="mb-2 text-sm">
            <li className="inline font-semibold">Equipment Required: </li>
            <li className="inline">{formText(exercise?.equipment_required)}</li>
          </ul>
        )}

        {exercise?.muscle_groups && (
          <ul className="mb-2 text-sm">
            <li className="inline font-semibold">Muscle Groups: </li>
            <li className="inline">{formText(exercise?.muscle_groups)}</li>
          </ul>
        )}

        {exercise?.movement_patterns && (
          <ul className="mb-2 text-sm">
            <li className="inline font-semibold">Movement Patterns: </li>
            <li className="inline">{formText(exercise?.movement_patterns)}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExerciseDetails;
