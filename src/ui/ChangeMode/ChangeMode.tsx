import { FC } from "react";
import { TCalculatorMode } from "../../types/TCalculatorMode";

type ChangeModeProps = {
  calculatorMode: TCalculatorMode;
  changeMode: (value: TCalculatorMode) => void;
};

export const ChangeMode: FC<ChangeModeProps> = ({
  calculatorMode,
  changeMode,
}) => {
  return (
    <div className="w-full flex justify-center mb-2">
      <div className="text-base text-white flex gap-10">
        <button
          className={`focus:outline-none focus:ring focus:ring-red-500 ${
            calculatorMode === "calculator"
              ? "dark:hover:text-white dark:hover:text-white hover:text-stone-500 duration-100 text-red-500"
              : "dark:text-white text-stone-500 dark:hover:text-red-500 hover:text-red-500 duration-100"
          }`}
          onClick={() => changeMode("calculator")}
        >
          Calculator
        </button>
        <button
          className={`focus:outline-none focus:ring focus:ring-red-500 ${
            calculatorMode === "history"
              ? "dark:hover:text-white dark:hover:text-white hover:text-stone-500 duration-100 text-red-500"
              : "dark:text-white text-stone-500 dark:hover:text-red-500 hover:text-red-500 duration-100"
          }`}
          onClick={() => changeMode("history")}
        >
          History
        </button>
      </div>
    </div>
  );
};
