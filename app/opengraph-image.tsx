import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// 1200×630 social share image used site-wide (Facebook, LinkedIn, X, iMessage, Slack…).
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/images/alum-corps-logo.jpg"));
  const logoSrc = `data:image/jpeg;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 80px",
          background: "radial-gradient(ellipse at 85% 0%, #2a2109 0%, #030303 55%)",
          color: "#ffffff",
        }}
      >
        <img src={logoSrc} width={340} height={340} alt="" />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 22, letterSpacing: 8, color: "#dead2f", textTransform: "uppercase" }}>{site.name}</div>
          <div style={{ marginTop: 24, fontSize: 50, lineHeight: 1.15 }}>Professional Protection.</div>
          <div style={{ fontSize: 50, lineHeight: 1.15, color: "#f2cc66" }}>Disciplined Service.</div>
          <div style={{ marginTop: 28, fontSize: 21, letterSpacing: 3, color: "#d4d4d4", textTransform: "uppercase" }}>
            Commercial · Residential · Event Security
          </div>
          <div
            style={{
              marginTop: 36,
              display: "flex",
              alignSelf: "flex-start",
              border: "2px solid rgba(222,173,47,0.5)",
              padding: "10px 18px",
              fontSize: 20,
              letterSpacing: 3,
              color: "#dead2f",
            }}
          >
            {site.licenseLabel.toUpperCase()} · {site.phone}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
