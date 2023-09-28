import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

export function Main({ children }: MainProps) {
  return <main className="max-w-screen-xl mx-auto p-4">{children}</main>;
}
