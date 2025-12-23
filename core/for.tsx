import { fragment } from "./fragment";
import { jsx } from "./jsx";

interface ForPropertiesInterface<T> {
  each: T[];
  children: (item: T, index: number) => React.ReactNode;
}

export function For<T>({ children, each }: ForPropertiesInterface<T>) {
  //check props
  if (!Array.isArray(each)) {
    throw new TypeError("For Component: The 'each' prop must be an array.");
  }

  //iterate
  return <>{each.map((item, index) => children(item, index))}</>;
}
