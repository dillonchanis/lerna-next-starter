import React, { Children, ReactElement, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type LinkProps = {
  children?: ReactNode;
  activeClassName: string;
  href: string;
  as?: string;
};

export const ActiveLink = ({
  children,
  activeClassName,
  ...props
}: LinkProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children) as ReactElement;
  const childClassName = child?.props?.className || "";

  const className =
    asPath === props?.href || asPath === props?.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};
