export default function Scanlines() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-30 opacity-10"
      style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(14, 247, 95, 0.03) 2px, rgba(14, 247, 95, 0.03) 4px)',
      }}
    />
  );
}
