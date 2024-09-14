import { FC } from "react";

type UnloadButtonProps = {
  unloadHistory: () => void;
};

export const UnloadButton: FC<UnloadButtonProps> = ({ unloadHistory }) => {
  return (
    <button
      title="unload history"
      onClick={unloadHistory}
      className="focus:outline-none focus:ring focus:ring-red-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="fill-white"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16h-2v-2h2v2zm-4 0h-2v-4h2v4zm4-4h-2v-2h2v2zm-4 2h-2v-2h2v2zm-4-4v6H8v-6h2zm4-4v2H8V6h4v2zm2-4.5L18.5 6H14V3.5z" />
        <text
          x="5"
          y="19"
          fontFamily="Arial"
          fontSize="4"
          className="fill-white"
        >
          CSV
        </text>
      </svg>
    </button>
  );
};
