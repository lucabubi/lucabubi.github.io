// LB lettermark v2 — solid forms cut by negative space.
//
// Concept: a machined, grid-built monogram (12px module).
// - L: solid stem + short foot, sharp 90° geometry.
// - B: solid spine with TWO mismatched counters knocked out in true
//   transparency (fill-rule="evenodd"): a CIRCLE on top, a SQUARE below.
//   Round vs. square = intuition vs. logic; the void is the detail.
// - The 12px negative channel between L's foot and B's spine is the
//   letterspacing — the letters never touch.
//
// Because the counters are real knockouts (not painted), the page
// atmosphere (halo glow) shows through them and they invert cleanly
// in dark mode via currentColor.
export default function LogoMark() {
  return (
    <svg
      className="logo-mark"
      viewBox="0 0 120 88"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {/* L — stem 16–28, foot 16–40 */}
      <path d="M16 12 H28 V64 H40 V76 H16 Z" />

      {/* B upper bowl — stadium silhouette, circular counter */}
      <path
        fillRule="evenodd"
        d="M52 12 H88 A16 16 0 0 1 88 44 H52 Z
           M81 28 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0 Z"
      />

      {/* B lower bowl — squared silhouette, square counter */}
      <path
        fillRule="evenodd"
        d="M52 44 H104 V76 H52 Z
           M64 53 H93 V67 H64 Z"
      />
    </svg>
  );
}
