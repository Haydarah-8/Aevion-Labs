import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} · Web design and development`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time rather than maintained as a file, so the wordmark and
 * the promise can never fall out of step with the site. Type only: no photo to
 * download, no font to fetch.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fffefb",
          color: "#0b0b0a",
          padding: 72,
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, letterSpacing: 3, textTransform: "uppercase", color: "#6e6d68" }}>
          <span>{SITE.name}</span>
          <span>Web design and development</span>
        </div>

        <div style={{ display: "flex", fontSize: 92, lineHeight: 1.02, letterSpacing: -3, fontWeight: 600, maxWidth: 940 }}>
          {SITE.tagline}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 26, color: "#6e6d68" }}>
          <span>Strategy, design and engineering under one roof.</span>
          <span style={{ color: "#0b0b0a" }}>aevionlabs.com</span>
        </div>
      </div>
    ),
    size
  );
}
