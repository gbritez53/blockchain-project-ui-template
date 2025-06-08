import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
export const CutCornerButton = (props: ComponentPropsWithRef<"button">) => {
  const { children, className } = props;
  return (
    <button
      className={twMerge(
        "border-none outline-none  px-4 py-2 font-extrabold uppercase font-heading text-sm tracking-wide relative",
        className
      )}
    >
      <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 diagonal-mask bg-fuchsia-500/20"></div>
      <svg className="absolute right-0 top-0 text-fuchsia-500 size-6">
        <use href="/assets/images/sprite.svg#cut-corner-icon" />
      </svg>
      <span className="leading-6 relative z-20">{children}</span>
    </button>
  );
};
