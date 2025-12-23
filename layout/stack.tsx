import { jsx } from "../core";
import { Flex, type FlexPropertiesInterface } from "./flex";

export interface StackPropertiesInterface extends FlexPropertiesInterface {}

export function Stack(p: StackPropertiesInterface) {
  return (
    <Flex
      {...p}
      style={{
        flexDirection: "column",
        ...p.style,
      }}
    />
  );
}
