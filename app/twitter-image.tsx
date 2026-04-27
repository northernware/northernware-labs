import { ImageResponse } from "next/og";

import { BrandMark } from "@/components/brand";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = `${siteConfig.name} Twitter preview`;
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top left, rgba(34,197,94,0.2), transparent 24%), radial-gradient(circle at bottom right, rgba(34,197,94,0.24), transparent 20%), linear-gradient(135deg, #04101f 0%, #071426 44%, #020814 100%)",
          color: "white",
          padding: "44px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: 28,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            padding: "34px 36px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              borderRadius: 999,
              border: "1px solid rgba(34,197,94,0.35)",
              background: "rgba(34,197,94,0.08)",
              padding: "10px 18px",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#86EFAC",
            }}
          >
            3D Solutions. Limitless Possibilities.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 820 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <BrandMark style={{ width: 48, height: 48, color: "#22C55E" }} />
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {siteConfig.name}
              </div>
            </div>
            <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 0.98, letterSpacing: "-0.06em" }}>
              We turn <span style={{ color: "#4ADE80" }}>ideas</span> into real,
              <span style={{ color: "#4ADE80" }}> functional</span> 3D solutions
              <span style={{ color: "#4ADE80" }}>.</span>
            </div>
            <div style={{ fontSize: 24, lineHeight: 1.35, color: "rgba(255,255,255,0.82)" }}>
              Custom 3D prints for parts, prototypes, and personal or industrial
              needs.
            </div>
          </div>

          <div style={{ display: "flex", gap: 14 }}>
            {["Precise", "Custom", "Fast Turnaround", "Endless Possibilities"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 16px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.08)",
                  fontSize: 18,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
