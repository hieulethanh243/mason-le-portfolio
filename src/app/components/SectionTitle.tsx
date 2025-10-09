import React from "react";

interface Props {
  title: string;
  end?: boolean;
}

export default function SectionTitle({ title, end }: Props) {
  return (
    <div
      className={`flex items-center mb-10 w-[90%] mx-auto ${
        end ? "justify-end" : ""
      }`}
    >
      {end ? (
        <span className="text-violet-500 text-xl font-bold flex items-center gap-1 whitespace-nowrap">
          <span className="text-violet-400 font-extrabold">&lt;/</span>
          <span className="text-white font-bold">{title}</span>
          <span className="text-violet-400 font-extrabold">&gt;</span>
        </span>
      ) : (
        <>
          <span className="text-violet-500 text-xl font-bold flex items-center gap-1 whitespace-nowrap">
            <span className="text-violet-400 font-extrabold">&lt;</span>
            <span className="text-white font-bold">{title}</span>
            <span className="text-violet-400 font-extrabold">&gt;</span>
          </span>
          <div className="flex-1 h-[1.5px] bg-violet-600/60 ml-3" />
        </>
      )}
    </div>
  );
}
