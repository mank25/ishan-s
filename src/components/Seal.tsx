const CIRCLE_PATH_ID = "seal-text-path";

/**
 * The signature element: a circular ledger seal reading "EST. 1973 · SOUTH ASIA'S
 * EVENT HOUSE ·" around the brand's flourish, echoing the wax-seal stamps used on
 * the old Chache Di Hatti order ledgers.
 */
export default function Seal({ className = "", spin = true }: { className?: string; spin?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Eventiify - Established 1973 seal"
    >
      <defs>
        <path
          id={CIRCLE_PATH_ID}
          d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
        />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.9" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
      <g className={spin ? "animate-[spin_38s_linear_infinite]" : undefined} style={{ transformOrigin: "100px 100px" }}>
        <text fontSize="12.5" letterSpacing="3.5" fill="currentColor" fontFamily="var(--font-utility)">
          <textPath href={`#${CIRCLE_PATH_ID}`} startOffset="0%">
            ESTABLISHED 1973 · WE LISTEN, WE PLAN, WE DELIVER ·
          </textPath>
        </text>
      </g>
      <g fontFamily="var(--font-display)" fill="currentColor" textAnchor="middle">
        <text x="100" y="93" fontSize="15" fontWeight="600">
          EVENTIIFY
        </text>
        <text x="100" y="113" fontSize="9" letterSpacing="1.5" opacity="0.85">
          since 1973
        </text>
      </g>
    </svg>
  );
}
