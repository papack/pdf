import { Box, type BoxPropertiesInterface } from "./box";
import { jsx } from "../core";

export interface AbsolutePropertiesInterface extends BoxPropertiesInterface {
  zIndex?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export function Absolute(p: AbsolutePropertiesInterface) {
  return (
    <Box
      {...p}
      style={{
        position: "absolute",
        zIndex: p.zIndex,
        top: p.top,
        bottom: p.bottom,
        left: p.left,
        right: p.right,
        ...p.style,
      }}
    />
  );
}
