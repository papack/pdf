import { jsx } from "../core/jsx";
import { FlexItem, type FlexItemPropertiesInterface } from "./flex-item";

/**
 * Flex container component properties extending FlexItem with container controls
 * Extends FlexItemPropertiesInterface with flex container properties
 */
export interface FlexPropertiesInterface extends FlexItemPropertiesInterface {
  jc?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

  ai?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";

  ac?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";

  g?: string;

  flxDirection?: "row" | "row-reverse" | "column" | "column-reverse";

  flxWrap?: "nowrap" | "wrap" | "wrap-reverse";

  flxFlow?: number;
}

export function Flex(p: FlexPropertiesInterface) {
  return (
    <FlexItem
      {...p}
      style={{
        display: "flex",
        justifyContent: p.jc,
        flexDirection: p.flxDirection || "row",
        alignItems: p.ai,
        alignContent: p.ac,
        gap: p.g,
        flexWrap: p.flxWrap,
        flexFlow: p.flxFlow,
        ...p.style,
      }}
    />
  );
}
