import { cn } from "../../lib/utils";

const Badge = ({
  text,
  className,
}: {
  text: string | undefined;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "text-white rounded-md px-2 py-1 w-fit block lowercase text-sm",
        className
      )}
    >
      {text}
    </span>
  );
};

export default Badge;
