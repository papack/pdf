# @papack/pdf

Minimal PDF rendering wrapper built on React and react-pdf.

This package provides a very small abstraction layer around **React** and **@react-pdf/renderer**.

## Core Idea

- JSX rendered directly to PDF (buffer)
- Built on React + @react-pdf/renderer

This is **PDF rendering only**:  
define document → render → buffer / file.

## What this is

- A thin wrapper
- Some helpers (`<For />`, `<Show />`, `<Repeat />`)
- A custom JSX runtime for controlled usage
- Convenience utilities for layout and styling

## Install

```bash
npm install @papack/pdf
```

## Quick Start

```ts
import { jsx, render } from "@papack/pdf/core";
import { writeFile } from "fs/promises";
import { Document, Page, Text } from "@papack/pdf/layout";

const MyDocument = () => (
  <Document title="Example">
    <Page size="A4">
      <Text>Hello PDF</Text>
    </Page>
  </Document>
);

const buffer = await render(<MyDocument />);
await writeFile("example.pdf", buffer);
```

## Rendering

```ts
import { render } from "@papack/pdf/core";

const buf = await render(<MyDocument />);
```

- Returns a `Buffer`
- Internally calls `@react-pdf/renderer/pdf().toBuffer()`

## JSX Runtime

The package ships with a minimal JSX runtime.

```ts
import { jsx, fragment } from "@papack/pdf/core";
```

- Uses `React.createElement`
- No transforms, no extensions
- Intended for controlled environments (Node.js)

## Components

### `<For />`

```tsx
<For each={items}>{(item, index) => <Text>{item}</Text>}</For>
```

- Simple array iteration
- No keys
- No diffing
- Render-only

### `<Show />`

```tsx
<Show when={loggedIn}>
  <Text>Dashboard</Text>
</Show>
```

- Conditional rendering
- Returns `null` when false

### `<Repeat />`

```tsx
<Repeat n={3}>
  <Text>Line</Text>
</Repeat>
```

- Repeats children `n` times
- Internally uses fragments

## Layout Helpers

The library provides basic layout primitives built on react-pdf:

- `Box`
- `Flex`
- `Stack`
- `Page`
- `Document`
- `Text`

These are thin wrappers with predictable props.

Example:

```tsx
<Page size="A4" p="2cm">
  <Stack g="1cm">
    <Text>Title</Text>
    <Text>Content</Text>
  </Stack>
</Page>
```

## Absolute Positioning

```tsx
import { Absolute } from "@papack/pdf/layout";

<Absolute top="2cm" left="2cm">
  <Text>Overlay</Text>
</Absolute>;
```

- Maps directly to `position: absolute`
- No layout engine involved

## Styling

Shared style constants are provided:

- `font`
- `color`
- `size`
- `space`

Example:

```ts
font.size.lg;
font.weight.bold;
```

## Font Registration

Use static imports (e.g. via bundler `?url`):

```ts
import sourceRegular from "./assets/source-code-pro-regular.ttf?url";
import sourceItalic from "./assets/source-code-pro-italic.ttf?url";
```

### Register Fonts

```ts
import { Font } from "@papack/pdf";

Font.register({
  family: family.mono,
  src: new URL(sourceRegular, import.meta.url).pathname,
  fontWeight: 400,
});

Font.register({
  family: family.mono,
  src: new URL(sourceItalic, import.meta.url).pathname,
  fontWeight: 400,
  fontStyle: "italic",
});
```

- One `Font.register` call per weight/style
- `src` must resolve to a filesystem path
- `fontWeight` and `fontStyle` must match usage exactly

### Usage

```tsx
<Text style={{ fontFamily: family.mono, fontWeight: 400 }}>Code</Text>
```
