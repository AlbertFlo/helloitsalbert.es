import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./Link.module.css";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

type LinkProps = {
  href: string;
  size?: keyof typeof sizes;
  theme?: "default" | "secondary";
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({ href, size = "md", theme = "default", children, icon, className = "", ...props }: LinkProps) {
  const themeClass =
    theme === "secondary"
      ? "bg-secondary text-black hover:border-border hover:bg-background hover:text-primary"
      : "bg-primary hover:bg-muted/80 hover:text-primary";

  return (
    <a
      href={href}
      className={[
        styles.link,
        icon ? styles.withIcon : "",
        "relative inline-flex items-center rounded-md font-semibold transition-all duration-300 cursor-pointer border border-transparent",
        themeClass,
        sizes[size],
        className,
      ].join(" ")}
      {...props}
    >
      <span className={styles.label}>{children}</span>
      {icon}
    </a>
  );
}