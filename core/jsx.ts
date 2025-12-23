import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      key?: React.Key;
    }

    interface ElementChildrenAttribute {
      children: {};
    }
  }
}

export function jsx(type: any, props: any, ...children: any) {
  return React.createElement(type, props, ...children);
}
