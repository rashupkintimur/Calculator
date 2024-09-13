import { FC, useContext, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { ThemeButton } from "../../ui/ThemeButton";

type MainProps = {};

export const Main: FC<MainProps> = () => {
  const [inputValue, setInputValue] = useState("");
  const themeObject = useContext(ThemeContext);

  if (!themeObject) return;

  const theme = themeObject.theme;
  const setTheme = themeObject.setTheme;

  const handleButton = (value: string) => {
    setInputValue((prevInputValue) => prevInputValue + value);
  };

  const cleanInput = () => {
    setInputValue("");
  };

  const calculate = () => {
    setInputValue((prevInputValue) => eval(prevInputValue));
  };

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-screen flex items-center">
      <div className="container mx-auto bg-slate-200 dark:bg-stone-800 w-2/6 h-4/5 pt-10 rounded-md p-10 font-mono text-5xl duration-150 shadow-2xl shadow-stone-400/100">
        <ThemeButton theme={theme} changeTheme={changeTheme} />
        <input
          value={inputValue}
          type="text"
          onChange={() => setInputValue("")}
          disabled
          className="bg-transparent w-full text-right mb-10 dark:text-white text-stone-800"
        />
        <div className="grid grid-cols-4 gap-16">
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
    </div>
  );
};
