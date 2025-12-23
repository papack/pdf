import { jsx } from "../core";
import { Stack, type StackPropertiesInterface } from "./stack";

export interface CenterPropertiesInterface extends StackPropertiesInterface {}

export function Center(p: CenterPropertiesInterface) {
  return (
    <Stack
      {...p}
      style={{
        justifyContent: "center",
        alignItems: "center",
        ...p.style,
      }}
    />
  );
}
