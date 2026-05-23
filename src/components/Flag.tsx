// Inline SVG flags — flag emoji don't render on Windows, so we draw them.
// Small, simplified marks meant to read at ~18×13px.

export function FlagGB() {
  return (
    <svg viewBox="0 0 30 20" className="flag" aria-hidden="true" focusable="false">
      <clipPath id="gb">
        <rect width="30" height="20" />
      </clipPath>
      <g clipPath="url(#gb)">
        <rect width="30" height="20" fill="#012169" />
        <path d="M0,0 30,20 M30,0 0,20" stroke="#fff" strokeWidth="4" />
        <path d="M0,0 30,20 M30,0 0,20" stroke="#C8102E" strokeWidth="2" />
        <rect x="12" width="6" height="20" fill="#fff" />
        <rect y="7" width="30" height="6" fill="#fff" />
        <rect x="13" width="4" height="20" fill="#C8102E" />
        <rect y="8" width="30" height="4" fill="#C8102E" />
      </g>
    </svg>
  );
}

export function FlagGE() {
  // White field, central red St George cross, four small bolnur-katskhuri crosses.
  const small = (cx: number, cy: number, key: string) => (
    <g key={key} fill="#ff0000">
      <rect x={cx - 0.8} y={cy - 2.3} width="1.6" height="4.6" />
      <rect x={cx - 2.3} y={cy - 0.8} width="4.6" height="1.6" />
    </g>
  );
  return (
    <svg viewBox="0 0 30 20" className="flag" aria-hidden="true" focusable="false">
      <rect width="30" height="20" fill="#fff" />
      <rect x="12.5" width="5" height="20" fill="#ff0000" />
      <rect y="7.5" width="30" height="5" fill="#ff0000" />
      {small(6.25, 3.75, "tl")}
      {small(23.75, 3.75, "tr")}
      {small(6.25, 16.25, "bl")}
      {small(23.75, 16.25, "br")}
    </svg>
  );
}
