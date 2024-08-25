import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: ReactNode;
};

export const CustomLink: FC<Props> = (props) => {
  const { to, children } = props;
  return (
    <Link to={to} className="text-blue-500 hover:underline">
      {children}
    </Link>
  );
};
