import type { FC, SVGProps } from "react";

/**
 * Line icons for the "My Services" grid. 24×24, 1.6 stroke, currentColor —
 * they inherit the teal from their circular badge. Swap freely when re-skinning.
 */
type Icon = FC<SVGProps<SVGSVGElement>>;

const base = (props: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const NeedsAnalysisIcon: Icon = (p) => (
  <svg {...base(p)}>
    <path d="M9 4h6a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2V5a1 1 0 0 1 1-1Z" />
    <path d="M9 6h6" />
    <path d="M8.5 11h3M8.5 14h5M8.5 17h4" />
    <circle cx="16.5" cy="12.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const PolicyReviewIcon: Icon = (p) => (
  <svg {...base(p)}>
    <path d="M7 3h7l4 4v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    <path d="M13 3v5h5" />
    <circle cx="11" cy="13" r="2.6" />
    <path d="m13 15 2 2" />
  </svg>
);

export const LivingBenefitsIcon: Icon = (p) => (
  <svg {...base(p)}>
    <path d="M12 20s-7-4.35-7-9.5A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 7 2.5C19 15.65 12 20 12 20Z" />
    <path d="M6.5 12.5H9l1.4-2.6L13 15l1.3-2.5H18" />
  </svg>
);

export const MortgageIcon: Icon = (p) => (
  <svg {...base(p)}>
    <path d="m4 11 8-6 8 6" />
    <path d="M6 10v9h12v-9" />
    <path d="M10 19v-4a2 2 0 0 1 4 0v4" />
  </svg>
);

export const TermLifeIcon: Icon = (p) => (
  <svg {...base(p)}>
    <path d="M12 3.5 19 6v5.2c0 4.3-2.9 7.4-7 9-4.1-1.6-7-4.7-7-9V6l7-2.5Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const FinalExpenseIcon: Icon = (p) => (
  <svg {...base(p)}>
    <path d="M12 21s-6.5-4-6.5-9A3.2 3.2 0 0 1 12 9.5 3.2 3.2 0 0 1 18.5 12c0 5-6.5 9-6.5 9Z" />
    <path d="M4 21h16" />
  </svg>
);

export const DebtIcon: Icon = (p) => (
  <svg {...base(p)}>
    <path d="M4 19h16" />
    <rect x="6" y="12" width="2.6" height="5" rx="0.6" />
    <rect x="10.7" y="9" width="2.6" height="8" rx="0.6" />
    <rect x="15.4" y="6" width="2.6" height="11" rx="0.6" />
    <path d="m6 9 4-3 3 2 5-4" />
  </svg>
);

export const WillsTrustIcon: Icon = (p) => (
  <svg {...base(p)}>
    <path d="M12 3 5 5.5v4.7c0 4.3 2.9 7.5 7 8.8 4.1-1.3 7-4.5 7-8.8V5.5L12 3Z" />
    <path d="M9.5 9h5M9.5 12h5M9.5 15h3" />
  </svg>
);

export const AnnuityIcon: Icon = (p) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="6.5" rx="6" ry="2.5" />
    <path d="M6 6.5v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5" />
    <path d="M6 11.5v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5" />
  </svg>
);
