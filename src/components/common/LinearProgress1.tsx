type LinearProgressProps = {
  title: string;
  value: number;
  pathWidth?: number;
};

const LinearProgress1 = ({
  title,
  value,
  pathWidth = 6,
}: LinearProgressProps) => {
  return (
    <div>
      <div className="flex justify-between items-center text-sm mb-3 font-semibold ">
        <span>{title}</span>
        <span className="font-semibold">{value}%</span>
      </div>
      <div
        className="w-full rounded-e-sm relative"
        style={{ height: pathWidth, backgroundColor: "rgb(0 0 0 / 25%)" }}
      >
        <div
          className="absolute h-full rounded-e-sm"
          style={{ width: `${value}%`, backgroundColor: "#000" }}
        />
      </div>
    </div>
  );
};

export default LinearProgress1;
