/** FIFIPOKE wordmark, set in the display font and stretched to fill its box */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1546 154"
      preserveAspectRatio="none"
      role="img"
      aria-label="FIFIPOKE"
      className={className}
    >
      <text
        x="0"
        y="132"
        fill="#fff"
        fontSize="170"
        textLength="1546"
        lengthAdjust="spacingAndGlyphs"
        style={{ fontFamily: "var(--font-michroma)" }}
      >
        FIFIPOKE
      </text>
    </svg>
  );
}
