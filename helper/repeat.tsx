import { jsx } from "../core/jsx";
import { fragment } from "../core/fragment";
import React from "react";

interface RepeatPropertiesInterface {
  n: number; // repeat n times
  children: React.ReactNode;
}
export const Repeat = ({
  n,
  children,
}: RepeatPropertiesInterface): React.JSX.Element => (
  <>
    {Array.from({ length: n }, (_, index) => (
      <React.Fragment key={index}>{children}</React.Fragment>
    ))}
  </>
);
