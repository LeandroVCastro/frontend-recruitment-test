type BoxComponentProps = {
  children: React.ReactNode;
};

export const BoxComponent = (props: BoxComponentProps) => {
  return <div>{props.children}</div>;
};
