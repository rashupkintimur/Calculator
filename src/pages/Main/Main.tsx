import { FC, useContext, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { ThemeButton } from "../../ui/ThemeButton";
import { Calculator } from "../../ui/Calculator";
import { HistoryList } from "../../ui/HistoryList";
import { IHistory } from "../../types/IHistory";
import { UnloadButton } from "../../ui/UnloadButton";
import { ChangeMode } from "../../ui/ChangeMode";
import { TCalculatorMode } from "../../types/TCalculatorMode";
import { evaluate } from "mathjs";

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

  // handle click on calculator buttons
  const handleButton = (value: string) => {
    setCurrentValue(currentValue + value);
  };

  // clean main input
  const cleanInput = () => {
    setCurrentValue("");
    setPrevValue("");
  };

  // backspace
  const backspace = () => {
    setCurrentValue(currentValue.slice(0, -1));
  };

  // calculate expression
  const calculate = () => {
    const expression = currentValue;
    const answer = evaluate(currentValue);

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

  // change theme
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // change mode
  const changeMode = (value: TCalculatorMode) => {
    setCalculatorMode(value);
  };

  // unload txt history file
  const unloadHistory = () => {
    let textContent = "Calculator History:\n\n";

    historyList.forEach((entry) => {
      textContent += `${entry.expression} = ${entry.answer}\n`;
    });

    const blob = new Blob([textContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "calculator_history.txt";
    link.click();
  };

  return (
    <div className="h-screen flex items-center">
      <div className="container mx-auto bg-slate-200 dark:bg-stone-800 w-2/6 h-4/5 pt-7 rounded-md p-10 font-mono text-5xl duration-150 shadow-2xl shadow-stone-400/100">
        <ChangeMode calculatorMode={calculatorMode} changeMode={changeMode} />
        {calculatorMode === "calculator" ? (
          <div className="flex items-center mb-2">
            <ThemeButton theme={theme} changeTheme={changeTheme} />
          </div>
        ) : (
          <div className="flex items-center justify-between mb-5">
            <ThemeButton theme={theme} changeTheme={changeTheme} />
            <UnloadButton unloadHistory={unloadHistory} />
          </div>
        )}
        {calculatorMode === "calculator" ? (
          <Calculator
            prevValue={prevValue}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
            handleButton={handleButton}
            cleanInput={cleanInput}
            backspace={backspace}
            calculate={calculate}
          />
        ) : (
          <HistoryList historyList={historyList} />
        )}
      </div>
    </div>
  );
};
