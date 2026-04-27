import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function createIcon(path: React.ReactNode) {
  return function Icon(props: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        {path}
      </svg>
    );
  };
}

export const CubeIcon = createIcon(
  <>
    <path d="M12 3 4.75 7v10L12 21l7.25-4V7L12 3Z" />
    <path d="M12 12 4.75 7" />
    <path d="M12 12l7.25-5" />
    <path d="M12 12v9" />
  </>,
);

export const SparkIcon = createIcon(
  <>
    <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z" />
    <path d="m5 15 .8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Z" />
    <path d="m19 13 .6 1.6L21 15l-1.4.4L19 17l-.6-1.6L17 15l1.4-.4L19 13Z" />
  </>,
);

export const LayersIcon = createIcon(
  <>
    <path d="m12 4 8 4-8 4-8-4 8-4Z" />
    <path d="m4 12 8 4 8-4" />
    <path d="m4 16 8 4 8-4" />
  </>,
);

export const WrenchIcon = createIcon(
  <>
    <path d="M15.5 5.5a4 4 0 0 0-5.2 5.2L4 17v3h3l6.3-6.3a4 4 0 0 0 5.2-5.2l-2.5 2.5-2-2 2.5-2.5Z" />
  </>,
);

export const ArrowRightIcon = createIcon(
  <>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </>,
);

export const CheckIcon = createIcon(
  <>
    <path d="m5 13 4 4L19 7" />
  </>,
);

export const ClockIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </>,
);

export const TargetIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="7.5" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 2v3" />
    <path d="M12 19v3" />
    <path d="M2 12h3" />
    <path d="M19 12h3" />
  </>,
);

export const BoltIcon = createIcon(
  <>
    <path d="M13.5 2 6 13h5l-1 9L18 11h-5l.5-9Z" />
  </>,
);

export const GearIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.8v2.1" />
    <path d="M12 19.1v2.1" />
    <path d="m5.5 5.5 1.5 1.5" />
    <path d="m17 17 1.5 1.5" />
    <path d="M2.8 12h2.1" />
    <path d="M19.1 12h2.1" />
    <path d="m5.5 18.5 1.5-1.5" />
    <path d="M17 7l1.5-1.5" />
    <path d="m8.1 4.4-1 1.8" />
    <path d="m15.9 19.6 1-1.8" />
    <path d="m4.4 8.1 1.8 1" />
    <path d="m19.6 15.9-1.8-1" />
    <path d="m4.4 15.9 1.8-1" />
    <path d="m19.6 8.1-1.8 1" />
    <path d="m8.1 19.6-1-1.8" />
    <path d="m15.9 4.4 1 1.8" />
  </>,
);

export const TruckIcon = createIcon(
  <>
    <path d="M3 7h11v8H3z" />
    <path d="M14 10h3l3 3v2h-6" />
    <circle cx="7.5" cy="17.5" r="1.5" />
    <circle cx="17.5" cy="17.5" r="1.5" />
  </>,
);

export const MessageIcon = createIcon(
  <>
    <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v6A2.5 2.5 0 0 1 16.5 16H10l-4 3v-3.4A2.5 2.5 0 0 1 5 13.5v-6Z" />
  </>,
);

export const PhoneIcon = createIcon(
  <>
    <path d="M6.2 4h2.9l1.1 4.1-1.8 1.8a16 16 0 0 0 5.6 5.6l1.8-1.8L20 14.8v2.9A1.9 1.9 0 0 1 18.1 20C10.3 20 4 13.7 4 5.9A1.9 1.9 0 0 1 6.2 4Z" />
  </>,
);

export const MailIcon = createIcon(
  <>
    <path d="M4 6.5h16v11H4z" />
    <path d="m5 7 7 6 7-6" />
  </>,
);

export const PinIcon = createIcon(
  <>
    <path d="M12 20s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10Z" />
    <circle cx="12" cy="10" r="2.3" />
  </>,
);

export const UploadIcon = createIcon(
  <>
    <path d="M12 15V5" />
    <path d="m8.5 8.5 3.5-3.5 3.5 3.5" />
    <path d="M5 16.5v1A1.5 1.5 0 0 0 6.5 19h11a1.5 1.5 0 0 0 1.5-1.5v-1" />
  </>,
);

export const MoonIcon = createIcon(
  <>
    <path d="M20 14.2A7.8 7.8 0 0 1 9.8 4 8.5 8.5 0 1 0 20 14.2Z" />
  </>,
);

export const SunIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2.2" />
    <path d="M12 19.3v2.2" />
    <path d="m4.9 4.9 1.6 1.6" />
    <path d="m17.5 17.5 1.6 1.6" />
    <path d="M2.5 12h2.2" />
    <path d="M19.3 12h2.2" />
    <path d="m4.9 19.1 1.6-1.6" />
    <path d="m17.5 6.5 1.6-1.6" />
  </>,
);
