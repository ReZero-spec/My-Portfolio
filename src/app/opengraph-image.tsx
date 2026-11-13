import { ImageResponse } from "next/og";

export const alt = "Argem C. Pasuquin | Junior Web Developer | IT Graduate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#09090b",
          color: "#fafafa",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#60a5fa" }}>{"</>  portfolio"}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>
            Argem C. Pasuquin
          </div>
          <div style={{ display: "flex", fontSize: 38, color: "#a1a1aa", marginTop: 16 }}>
            Junior Web Developer | IT Graduate
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>Cebu, Philippines</div>
      </div>
    ),
    size,
  );
}
