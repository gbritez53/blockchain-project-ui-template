import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
export const Hexagon = (props: ComponentPropsWithRef<"svg">) => {
  const { className } = props;
  return (
    <svg className={twMerge("text-fuchsia-500/10 -rotate-6", className)}>
      <use href="/public/assets/images/sprite.svg#hexagon-outline" />
    </svg>
  );
};
