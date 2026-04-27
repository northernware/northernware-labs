import type { SVGProps } from "react";

type BrandMarkProps = SVGProps<SVGSVGElement>;

type BrandLockupProps = {
  className?: string;
  markClassName?: string;
  nameClassName?: string;
  taglineClassName?: string;
  orientation?: "horizontal" | "stacked";
};

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function BrandMark({ className, ...props }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M32 4 56 18v28L32 60 8 46V18L32 4Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M8 18 32 32 56 18"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M20 30v20"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M40 22v16"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M40 22 48 18"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M32 42 48 52"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrandLockup({
  className,
  markClassName,
  nameClassName,
  taglineClassName,
  orientation = "horizontal",
}: BrandLockupProps) {
  const stacked = orientation === "stacked";

  return (
    <div
      className={joinClasses(
        "flex text-current",
        stacked ? "flex-col items-center gap-4 text-center" : "items-center gap-3",
        className,
      )}
    >
      <BrandMark className={joinClasses("h-12 w-12 shrink-0 text-accent-500", markClassName)} />
      <div className={joinClasses("min-w-0", stacked ? "space-y-2" : "space-y-1")}>
        <p
          className={joinClasses(
            "brand-wordmark text-sm text-ink dark:text-white sm:text-base",
            nameClassName,
          )}
        >
          Northernware
        </p>
        <p
          className={joinClasses(
            "brand-tagline text-accent-700 dark:text-accent-200",
            taglineClassName,
          )}
        >
          3D Solutions. Limitless Possibilities.
        </p>
      </div>
    </div>
  );
}
