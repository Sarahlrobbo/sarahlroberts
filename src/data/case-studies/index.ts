import type { CaseStudy } from "../../lib/case-study";
import { farmiqThrive } from "./farmiq-thrive";
import { designLeadership } from "./design-leadership";
import { keepingKiwisSafe } from "./keeping-kiwis-safe";
import { designingDatapay } from "./designing-datapay";

// Add each new case study here once its content is handed over — the
// template renders whatever's in this list without further code changes.
// designingDatapay (2026-09-14) is a placeholder-copy/blank-asset scaffold —
// see the comment at the top of designing-datapay.ts before treating any of
// its content as final.
export const caseStudies: CaseStudy[] = [farmiqThrive, designLeadership, keepingKiwisSafe, designingDatapay];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
