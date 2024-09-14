import { FC, useContext, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { ThemeButton } from "../../ui/ThemeButton";
import { Calculator } from "../../ui/Calculator";
import { HistoryList } from "../../ui/HistoryList";
import { IHistory } from "../../types/IHistory";

type TCalculatorMode = "calculator" | "history";

type MainProps = {};

export const Main: FC<MainProps> = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [historyList, setHistoryList] = useState<IHistory[]>([]);
  const [calculatorMode, setCalculatorMode] =
    useState<TCalculatorMode>("calculator");
  const themeObject = useContext(ThemeContext);

  if (!themeObject) return;

  const theme = themeObject.theme;
  const setTheme = themeObject.setTheme;

  const handleButton = (value: string) => {
    setCurrentValue((prevCurrentValue) => prevCurrentValue + value);
  };

  const cleanInput = () => {
    setCurrentValue("");
    setPrevValue("");
  };

  const calculate = () => {
    const expression = currentValue;
    const answer = eval(currentValue);

    setPrevValue(currentValue);
    setCurrentValue(answer);

    setHistoryList((prevHistory) => [
      ...prevHistory,
      {
        expression: expression,
        answer: answer,
      },
    ]);
  };

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const changeMode = (value: TCalculatorMode) => {
    setCalculatorMode(value);
  };

  return (
    <div className="h-screen flex items-center">
      <div className="container mx-auto bg-slate-200 dark:bg-stone-800 w-2/6 h-4/5 pt-7 rounded-md p-10 font-mono text-5xl duration-150 shadow-2xl shadow-stone-400/100">
        <div className="w-full flex justify-center mb-2">
          <div className="text-base text-white flex gap-10">
            <button
              className={`${
                calculatorMode === "calculator"
                  ? "dark:hover:text-white dark:hover:text-white hover:text-stone-500 duration-100 text-red-500"
                  : "dark:text-white text-stone-500 dark:hover:text-red-500 hover:text-red-500 duration-100"
              }`}
              onClick={() => changeMode("calculator")}
            >
              Calculator
            </button>
            <button
              className={`${
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
        <ThemeButton theme={theme} changeTheme={changeTheme} />
        {calculatorMode === "calculator" ? (
          <Calculator
            prevValue={prevValue}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
            handleButton={handleButton}
            cleanInput={cleanInput}
            calculate={calculate}
          />
        ) : (
          <HistoryList historyList={historyList} />
        )}
      </div>
    </div>
  );
};
