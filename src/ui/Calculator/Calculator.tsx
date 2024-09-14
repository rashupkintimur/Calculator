import React, { FC, SetStateAction } from "react";

type CalculatorProps = {
  prevValue: string;
  currentValue: string;
  setCurrentValue: React.Dispatch<SetStateAction<string>>;
  handleButton: (value: string) => void;
  cleanInput: () => void;
  calculate: () => void;
};

export const Calculator: FC<CalculatorProps> = ({
  prevValue,
  currentValue,
  setCurrentValue,
  handleButton,
  cleanInput,
  calculate,
}) => {
  return (
    <div>
      <h4 className="text-base text-right text-slate-500 dark:text-slate-300 mb-2">
        {prevValue ? prevValue : "0"}
      </h4>
      <input
        value={currentValue}
        type="text"
        onChange={() => setCurrentValue("")}
        disabled
        className="bg-transparent w-full text-right mb-10 dark:text-white text-stone-800"
      />
      <div className="grid grid-cols-4 gap-12">
        <button
          onClick={() => handleButton("1")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          1
        </button>
        <button
          onClick={() => handleButton("2")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          2
        </button>
        <button
          onClick={() => handleButton("3")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          3
        </button>
        <button
          onClick={() => handleButton("+")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          +
        </button>
        <button
          onClick={() => handleButton("4")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          4
        </button>
        <button
          onClick={() => handleButton("5")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          5
        </button>
        <button
          onClick={() => handleButton("6")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          6
        </button>
        <button
          onClick={() => handleButton("-")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          -
        </button>
        <button
          onClick={() => handleButton("7")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          7
        </button>
        <button
          onClick={() => handleButton("8")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          8
        </button>
        <button
          onClick={() => handleButton("9")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          9
        </button>
        <button
          onClick={() => handleButton("*")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          *
        </button>
        <button
          onClick={() => handleButton("0")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          0
        </button>
        <button
          onClick={cleanInput}
          className="text-red-500 dark:hover:text-red-600 active:text-red-700 dark:active:text-red-700 duration-100"
        >
          C
        </button>
        <button
          onClick={calculate}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          =
        </button>
        <button
          onClick={() => handleButton("/")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100"
        >
          /
        </button>
      </div>
    </div>
  );
};
