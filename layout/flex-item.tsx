import { jsx } from "../core/jsx";
import { Box, type BoxPropertiesInterface } from "./box";

/**
 * Flex item component properties extending Box with flex layout controls
 * Extends BoxPropertiesInterface with flex-specific properties
 */
export interface FlexItemPropertiesInterface extends BoxPropertiesInterface {
  flx?: string;

  as?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

  flxGrow?: number;
  flxShrink?: number;
  flxBasis?: string;
}

export function FlexItem(p: FlexItemPropertiesInterface) {
  return (
    <Box
      {...p}
      style={{
        flex: p.flx,
        alignSelf: p.as,
        flexGrow: p.flxGrow,
        flexShrink: p.flxShrink,
        flexBasis: p.flxBasis,
        ...p.style,
      }}
    />
  );
}
