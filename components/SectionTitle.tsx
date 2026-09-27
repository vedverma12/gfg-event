import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-4xl`}>
      <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className="display-heading section-heading mt-5 text-balance">{title}</h2>
      {children && <div className={`body-copy mt-6 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>{children}</div>}
    </div>
  );
}