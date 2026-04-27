import { ImageResponse } from "next/og";

import { BrandMark } from "@/components/brand";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = `${siteConfig.name} social preview`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top left, rgba(34,197,94,0.2), transparent 24%), radial-gradient(circle at bottom right, rgba(34,197,94,0.26), transparent 18%), linear-gradient(135deg, #04101f 0%, #071426 44%, #020814 100%)",
          color: "white",
          padding: "56px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 6px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              borderRadius: 999,
              border: "1px solid rgba(34,197,94,0.35)",
              background: "rgba(34,197,94,0.08)",
              padding: "12px 22px",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#86EFAC",
            }}
          >
            3D Solutions. Limitless Possibilities.
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", gap: 32 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 26, maxWidth: 820 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <BrandMark style={{ width: 52, height: 52, color: "#22C55E" }} />
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  {siteConfig.name}
                </span>
              </div>

              <div
                style={{
                  fontSize: 84,
                  lineHeight: 0.95,
                  fontWeight: 800,
                  letterSpacing: "-0.06em",
                  maxWidth: 900,
                }}
              >
                We turn <span style={{ color: "#4ADE80" }}>ideas</span>
                <br />
                into real, <span style={{ color: "#4ADE80" }}>functional</span>
                <br />
                3D solutions<span style={{ color: "#4ADE80" }}>.</span>
              </div>

              <div
                style={{
                  width: 136,
                  height: 4,
                  borderRadius: 999,
                  background: "#22C55E",
                }}
              />

              <div
                style={{
                  fontSize: 28,
                  lineHeight: 1.35,
                  color: "rgba(255,255,255,0.82)",
                  maxWidth: 650,
                }}
              >
                Custom 3D prints for parts, prototypes, and personal or industrial
                needs.
              </div>
            </div>

            <div
              style={{
                position: "relative",
                width: 260,
                height: 420,
                opacity: 0.16,
                color: "#22C55E",
                flexShrink: 0,
              }}
            >
              <svg viewBox="0 0 320 420" style={{ width: "100%", height: "100%" }}>
                <path
                  d="M192 18 303 82l16 118-74 163-126 39-77-94 53-158 97-132Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  d="M220 54 297 98l12 91-58 135-104 30-63-76 43-129 93-95Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  d="M252 98 306 129l8 68-43 101-80 24-48-59 33-96 76-69Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>

          <div style={{ display: "flex", gap: 24 }}>
            {[
              ["Precise", "Every layer. Every detail."],
              ["Custom", "Made for your exact needs."],
              ["Fast Turnaround", "Quick prints. On time."],
              ["Endless Possibilities", "From prototypes to practical parts."],
            ].map(
              (item) => (
                <div
                  key={item[0]}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    width: 245,
                    paddingLeft: 24,
                    borderLeft: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#86EFAC",
                    }}
                  >
                    {item[0]}
                  </div>
                  <div style={{ fontSize: 18, lineHeight: 1.35, color: "rgba(255,255,255,0.78)" }}>
                    {item[1]}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
