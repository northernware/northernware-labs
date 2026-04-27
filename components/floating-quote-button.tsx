import Link from "next/link";

export function FloatingQuoteButton() {
  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 px-4 sm:hidden">
      <Link
        href="#quote"
        className="btn-primary flex w-full justify-center shadow-soft"
      >
        Request a Quote
      </Link>
    </div>
  );
}
