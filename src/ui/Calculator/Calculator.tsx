import React, { FC, SetStateAction } from "react";

type CalculatorProps = {
  prevValue: string;
  currentValue: string;
  setCurrentValue: React.Dispatch<SetStateAction<string>>;
  handleButton: (value: string) => void;
  cleanInput: () => void;
  backspace: () => void;
  calculate: () => void;
};

export const Calculator: FC<CalculatorProps> = ({
  prevValue,
  currentValue,
  setCurrentValue,
  handleButton,
  cleanInput,
  backspace,
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
      <div className="grid grid-cols-4 gap-5 text-4xl">
        <button
          onClick={() => handleButton("(")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          (
        </button>
        <button
          onClick={() => handleButton(")")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          )
        </button>
        <button
          onClick={() => handleButton("sqrt(")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          √
        </button>
        <button
          onClick={backspace}
          className="focus:outline-none focus:ring focus:ring-red-500 flex justify-center duration-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            className="dark:hover:fill-red-500 hover:fill-red-500 fill-stone-800 dark:fill-white active:text-fill-700 dark:active:fill-red-700 duration-100 fill-white duration-100"
          >
            <path d="M15.41 7.41L9.83 13 15.41 18.59 14 20l-7-7 7-7 1.41 1.41z" />
          </svg>
        </button>
        <button
          onClick={() => handleButton("sin(")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          sin
        </button>
        <button
          onClick={() => handleButton("cos(")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          cos
        </button>
        <button
          onClick={() => handleButton("ln(")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500 text-4xl"
        >
          ln
        </button>
        <button
          onClick={() => handleButton("log")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500 text-4xl"
        >
          log
        </button>
        <button
          onClick={() => handleButton("1")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          1
        </button>
        <button
          onClick={() => handleButton("2")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          2
        </button>
        <button
          onClick={() => handleButton("3")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          3
        </button>
        <button
          onClick={() => handleButton("+")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          +
        </button>
        <button
          onClick={() => handleButton("4")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          4
        </button>
        <button
          onClick={() => handleButton("5")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          5
        </button>
        <button
          onClick={() => handleButton("6")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          6
        </button>
        <button
          onClick={() => handleButton("-")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          -
        </button>
        <button
          onClick={() => handleButton("7")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          7
        </button>
        <button
          onClick={() => handleButton("8")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          8
        </button>
        <button
          onClick={() => handleButton("9")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          9
        </button>
        <button
          onClick={() => handleButton("*")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          *
        </button>
        <button
          onClick={() => handleButton("0")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          0
        </button>
        <button
          onClick={cleanInput}
          className="text-red-500 dark:hover:text-red-600 active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          C
        </button>
        <button
          onClick={calculate}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          =
        </button>
        <button
          onClick={() => handleButton("/")}
          className="dark:hover:text-red-500 hover:text-red-500 text-stone-800 dark:text-white active:text-red-700 dark:active:text-red-700 duration-100 focus:outline-none focus:ring focus:ring-red-500"
        >
          /
        </button>
      </div>
    </div>
  );
};
