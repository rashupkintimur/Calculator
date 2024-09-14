import { FC, useContext, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { ThemeButton } from "../../ui/ThemeButton";
import { Calculator } from "../../ui/Calculator";

type MainProps = {};

export const Main: FC<MainProps> = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
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
    setPrevValue(currentValue);
    setCurrentValue((prevCurrentValue) => eval(prevCurrentValue));
  };

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-screen flex items-center">
      <div className="container mx-auto bg-slate-200 dark:bg-stone-800 w-2/6 h-4/5 pt-10 rounded-md p-10 font-mono text-5xl duration-150 shadow-2xl shadow-stone-400/100">
        <ThemeButton theme={theme} changeTheme={changeTheme} />
        <Calculator
          prevValue={prevValue}
          currentValue={currentValue}
          setCurrentValue={setCurrentValue}
          handleButton={handleButton}
          cleanInput={cleanInput}
          calculate={calculate}
        />
      </div>
    </div>
  );
};
