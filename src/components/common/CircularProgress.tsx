import { colorMap } from "../../constants/colors";
import { ColorType } from "../../shared";

type CircularProgressProps = {
  value: number;
  size?: number;
  color?: ColorType;
  pathWidth?: number;
};

const CircularProgress = ({
  value,
  size = 122,
  color = "blue",
  pathWidth = 14,
}: CircularProgressProps) => {
  return (
    <div>
      <div
        className="rounded-full flex justify-center items-center duration-1000 transition-colors"
        style={{
          background: `conic-gradient(${colorMap[color]} ${
            value * 3.6
          }deg, #ddd 0deg)`,
          width: size,
          height: size,
        }}
      >
        <div
          className="absolute rounded-full bg-white/75"
          style={{
            width: `calc(${size}px - ${pathWidth}px)`,
            height: `calc(${size}px - ${pathWidth}px)`,
          }}
        />

        <p
          className="relative m-0 text-center font-semibold flex flex-col gap-1"
          style={{ color: colorMap[color] }}
        >
          <span className="percentage text-xl">{value}%</span>
        </p>
      </div>
    </div>
  );
};

export default CircularProgress;
