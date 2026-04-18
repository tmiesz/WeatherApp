import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div>
      <div>{children}</div>;
    </div>
  );
}
