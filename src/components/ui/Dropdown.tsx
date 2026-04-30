import ArrowDown from "/src/assets/arrow-down.svg?react";
import ArrowUp from "/src/assets/arrow-up.svg?react";
import { useState } from "react";

export interface DropdownProps {
  buttonLabel: string;
  items: {
    title: string;
    action?: () => void;
  }[];
}

export default function Dropdown({ buttonLabel, items }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="z-1001 relative">
      <button
        type="button"
        className="inline-flex w-40 items-center justify-between rounded-md text-sm border border-zinc-900 h-10 px-4 py-2"
        onClick={handleToggle}
      >
        <span>{buttonLabel}</span>
        <span>
          {open ? (
            <ArrowUp className="size-8 invert" />
          ) : (
            <ArrowDown className="size-8 invert" />
          )}
        </span>
      </button>
      {open && (
        <div className="absolute top-12 z-1002">
          <ul className="w-56 h-auto shadow-md rounded-md p-1 bg-zinc-900">
            {items.map((item, index) => (
              <li
                key={index}
                className={`relative flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-500 rounded-md`}
              >
                <button
                  className="w-full text-left"
                  onClick={() => {
                    item.action?.();
                    setOpen(false);
                  }}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
