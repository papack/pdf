import { jsx } from "../core/jsx";
import { Box, type BoxPropertiesInterface } from "./box";

export interface RelativePropertiesInterface extends BoxPropertiesInterface {
  zIndex?: string;
}

export function Relative(p: RelativePropertiesInterface) {
  return (
    <Box
      {...p}
      style={{
        position: "relative",
        zIndex: p.zIndex,
        ...p.style,
      }}
    />
  );
}
