import { cn } from "../../lib/utils";

const DifficultyBadge = ({
  difficulty,
}: {
  difficulty: "easy" | "medium" | "hard";
}) => {
  return (
    <span className={cn("text-white rounded-md px-2 py-0.5 w-fit block mb-2")}>
      {difficulty}
    </span>
  );
};

export default DifficultyBadge;
