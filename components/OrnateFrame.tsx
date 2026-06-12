export default function OrnateFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "10px",
        background: "linear-gradient(145deg, #7a5c1e 0%, #c9960c 15%, #f0d060 30%, #e8b923 45%, #b8820a 60%, #f0d060 75%, #c9960c 88%, #7a5c1e 100%)",
        boxShadow: "0 0 0 1px #3d2800, inset 0 0 0 2px #3d2800, inset 0 0 0 4px rgba(255,220,80,0.4), 0 8px 32px rgba(0,0,0,0.4)",
        borderRadius: "2px",
      }}
    >
      {children}
    </div>
  );
}
