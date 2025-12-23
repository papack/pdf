interface ShowPropertiesInterface {
  when: boolean;
  children: React.ReactNode;
}

export const Show = ({ children, when }: ShowPropertiesInterface) =>
  when ? children : null;
