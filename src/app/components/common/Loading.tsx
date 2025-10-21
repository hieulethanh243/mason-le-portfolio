"use client";

function LoadingDots() {
  return (
    <div className="flex justify-center items-center gap-2 py-20">
      <span className="w-3 h-3 rounded-full bg-violet-400 animate-bounce [animation-delay:-0.3s]" />
      <span className="w-3 h-3 rounded-full bg-pink-400 animate-bounce [animation-delay:-0.15s]" />
      <span className="w-3 h-3 rounded-full bg-blue-400 animate-bounce" />
    </div>
  );
}

export default LoadingDots;
