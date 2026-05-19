import { ImageResponse } from "next/og";

export const alt = "Точка роста — маркетинговое агентство";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #6C47FF 0%, #2F80ED 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 500,
            opacity: 0.85,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6C47FF",
              fontWeight: 800,
              fontSize: 24,
            }}
          >
            Т
          </div>
          <span>Точка роста</span>
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          Маркетинговое агентство
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.85,
            lineHeight: 1.3,
            maxWidth: 900,
          }}
        >
          Регулярные digital-задачи бизнеса: тексты, соцсети, маркетплейсы, репутация.
        </div>
      </div>
    ),
    { ...size },
  );
}
