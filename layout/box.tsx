import { jsx } from "../core";
import { View, type ViewProps } from "@react-pdf/renderer";

export interface BoxPropertiesInterface extends ViewProps {
  children?: React.ReactNode;

  m?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  mx?: string;
  my?: string;

  p?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  pt?: string;
  px?: string;
  py?: string;

  bg?: string;

  b?: string;
  bt?: string;
  br?: string;
  bb?: string;
  bl?: string;
  bx?: string;
  by?: string;

  r?: string;
  rt?: string;
  rr?: string;
  rb?: string;
  rl?: string;
  rtr?: string;
  rtl?: string;
  rbr?: string;
  rbl?: string;

  s?: string;
  h?: string;
  w?: string;
  maxH?: string;
  maxW?: string;
  minH?: string;
  minW?: string;
}

export function Box(p: BoxPropertiesInterface) {
  return (
    <View
      {...p}
      style={{
        marginBottom: p.mb || p.my || p.m,
        marginLeft: p.ml || p.mx || p.m,
        marginRight: p.mr || p.mx || p.m,
        marginTop: p.mt || p.my || p.m,

        paddingBottom: p.pb || p.py || p.p,
        paddingLeft: p.pl || p.px || p.p,
        paddingRight: p.pr || p.px || p.p,
        paddingTop: p.pt || p.py || p.p,

        backgroundColor: p.bg,

        borderTop: p.bt || p.by || p.b,
        borderRight: p.br || p.bx || p.b,
        borderBottom: p.bb || p.by || p.b,
        borderLeft: p.bl || p.bx || p.b,

        borderTopRightRadius: p.rtr || p.rt || p.rr || p.r,
        borderTopLeftRadius: p.rtl || p.rt || p.rl || p.r,
        borderBottomRightRadius: p.rbr || p.rb || p.rr || p.r,
        borderBottomLeftRadius: p.rbl || p.rb || p.rl || p.r,

        maxHeight: p.maxH,
        maxWidth: p.maxW,
        minHeight: p.minH,
        minWidth: p.minW,

        width: p.w || p.s,
        height: p.h || p.s,

        ...p.style,
      }}
    />
  );
}
