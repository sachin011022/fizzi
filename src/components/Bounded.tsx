type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export const Bounded = ({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) => {
  return (
    <Comp className={`md:px-6", px-4 first:pt-10 ${className}`} {...restProps}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </Comp>
  );
};
