import type { ReactNode } from "react";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  icons?: {
    checked: ReactNode;
    unchecked: ReactNode;
  };
};

export default function Switch({ checked, onChange, icons }: Props) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
    >
      {icons && (
        <span
          className={`transition-opacity duration-200 ${checked ? "opacity-30" : "opacity-100"}`}
        >
          {icons.unchecked}
        </span>
      )}
      <span
        className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${checked ? "bg-zinc-700" : "bg-zinc-400"}`}
      >
        <span
          className={`absolute top-1 size-4 rounded-full bg-white transition-all duration-200 ${checked ? "left-6" : "left-1"}`}
        />
      </span>
      {icons && (
        <span
          className={`transition-opacity duration-200 ${checked ? "opacity-100" : "opacity-30"}`}
        >
          {icons.checked}
        </span>
      )}
    </button>
  );
}
