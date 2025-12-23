import { jsx } from "../core/jsx";
import {
  Text as ReactPdfText,
  type TextProps as ReactPdfTextProperties,
} from "@react-pdf/renderer";

export interface TextPropertiesInterface extends ReactPdfTextProperties {
  children: React.ReactNode;
  a?: "left" | "right" | "center" | "justify";
  ff?: string;
  fw?: number;
  fs?: string;
  s?: "normal" | "italic";
  lh?: string;
  ls?: string;
  c?: string;
}

export function Text(p: TextPropertiesInterface) {
  return (
    <ReactPdfText
      {...p}
      style={{
        textAlign: p.a,
        fontFamily: p.ff,
        fontWeight: p.fw,
        fontSize: p.fs,
        lineHeight: p.lh,
        letterSpacing: p.ls,
        color: p.c,
        fontStyle: p.s,
        ...p.style,
      }}
    />
  );
}
