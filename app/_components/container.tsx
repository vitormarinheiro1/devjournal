import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto w-full max-w-4xl px-2">{children}</div>;
};

export default Container;
