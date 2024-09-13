import { FC } from "react";
import { Main } from "../../pages/Main";
import { ThemeProvider } from "../../providers/ThemeProvider";

type LayoutProps = {};

export const Layout: FC<LayoutProps> = () => {
  return (
    <ThemeProvider>
      <div>
        <main className="bg-slate-50 dark:bg-cyan-900 duration-150">
          <Main />
        </main>
      </div>
    </ThemeProvider>
  );
};
