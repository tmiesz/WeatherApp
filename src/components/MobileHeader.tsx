import type { Dispatch, SetStateAction } from "react";
import Hamburger from "/src/assets/hamburger.svg?react";

type Props = {
  setIsSidePanelOpen: Dispatch<SetStateAction<boolean>>;
};
export default function MobileHeader({ setIsSidePanelOpen }: Props) {
  return (
    <div className="w-full h-16 p-4 bg-(--sidebar-bg) border-b border-(--border) sticky top-0 md:hidden flex justify-end z-1001">
      <button onClick={() => setIsSidePanelOpen(true)} className="sd: block">
        <Hamburger className="size-8 lg:hidden" />
      </button>
    </div>
  );
}
