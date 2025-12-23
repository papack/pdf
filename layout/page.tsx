import { jsx } from "../core/jsx";
import { Page as PDFPage, type PageProps } from "@react-pdf/renderer";

export interface PdfPagePropertiesInterface extends PageProps {
  children?: React.ReactNode;

  // Spacing (margin)
  m?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  mx?: string;
  my?: string;

  // Spacing (padding)
  p?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  pt?: string;
  px?: string;
  py?: string;

  bg?: string;

  // Border
  b?: string;
  bt?: string;
  br?: string;
  bb?: string;
  bl?: string;
  bx?: string;
  by?: string;

  // Border radius
  r?: string;
  rt?: string;
  rr?: string;
  rb?: string;
  rl?: string;
  rtr?: string;
  rtl?: string;
  rbr?: string;
  rbl?: string;
}

export function Page(p: PdfPagePropertiesInterface) {
  return (
    <PDFPage
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

        ...p.style,
      }}
    >
      {p.children}
    </PDFPage>
  );
}
