import { Dispatch, SetStateAction } from "react";

interface SwitchProps {
  isOn: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

const Switch: React.FC<SwitchProps> = ({ isOn, setState }) => {
  return (
    <div
      className={`relative inline-flex items-center h-6 w-12 cursor-pointer ${
        isOn ? "bg-blue-500" : "bg-gray-300"
      } rounded-full transition-colors duration-300`}
      onClick={() => setState((p) => !p)}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      ></span>
    </div>
  );
};

export default Switch;
