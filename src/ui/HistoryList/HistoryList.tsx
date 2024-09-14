import { FC } from "react";
import { IHistory } from "../../types/IHistory";

type HistoryListProps = {
  historyList: IHistory[];
};

export const HistoryList: FC<HistoryListProps> = ({ historyList }) => {
  return (
    <ul className="text-right grid gap-3 w-full h-full overflow-auto h-3/4">
      {historyList.map((historyEl) => (
        <li className="pr-3">
          <h5 className="text-base dark:text-slate-300 mb-1 text-stone-800">
            {historyEl.expression}
          </h5>
          <h3 className="text-5xl dark:text-white text-stone-800">
            {historyEl.answer}
          </h3>
        </li>
      ))}
    </ul>
  );
};
