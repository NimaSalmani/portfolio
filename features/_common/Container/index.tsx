import { IContainer } from "./type";

export const Container = (props: IContainer) => {
  const { children, className } = props;
  return (
    <div
      className={`px-[40px] lg:px-[80px] xl:px-[120px] 2xl:px-[10%] ${className}`}
    >
      {children}
    </div>
  );
};
