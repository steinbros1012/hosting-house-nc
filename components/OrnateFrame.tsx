export default function OrnateFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "relative",
        padding: "14px",
        background: "linear-gradient(145deg, #7a5c1e 0%, #c9960c 18%, #f0d060 32%, #e8b923 45%, #b8820a 58%, #f0d060 72%, #c9960c 85%, #7a5c1e 100%)",
        boxShadow: `
          0 0 0 1px #3d2800,
          inset 0 0 0 1px #3d2800,
          0 8px 32px rgba(0,0,0,0.45),
          0 2px 8px rgba(0,0,0,0.3)
        `,
        borderRadius: "2px",
      }}
    >
      {/* Outer raised ridge */}
      <div
        style={{
          position: "absolute",
          inset: "3px",
          borderRadius: "1px",
          boxShadow: `
            inset 0 2px 4px rgba(255,220,80,0.6),
            inset 0 -2px 4px rgba(60,35,0,0.6),
            inset 2px 0 4px rgba(255,220,80,0.3),
            inset -2px 0 4px rgba(60,35,0,0.3)
          `,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      {/* Inner dark channel */}
      <div
        style={{
          position: "absolute",
          inset: "8px",
          borderRadius: "1px",
          background: "linear-gradient(145deg, #3d2800, #6b4c11, #3d2800)",
          boxShadow: "inset 0 2px 6px rgba(0,0,0,0.7), inset 0 -1px 3px rgba(200,150,0,0.3)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      {/* Inner gold bead */}
      <div
        style={{
          position: "absolute",
          inset: "10px",
          borderRadius: "1px",
          background: "linear-gradient(145deg, #f0d060, #c9960c, #f0d060)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      {/* Photo content */}
      <div style={{ position: "relative", zIndex: 0 }}>
        {children}
      </div>
    </div>
  );
}
