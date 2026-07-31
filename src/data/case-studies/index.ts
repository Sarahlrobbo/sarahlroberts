import type { CaseStudy } from "../../lib/case-study";
import { farmiqThrive } from "./farmiq-thrive";

// Add each new case study (Datapay, Plan My Walk, FarmIQ Team, ...) here
// once its content is handed over — the template renders whatever's in
// this list without further code changes.
export const caseStudies: CaseStudy[] = [farmiqThrive];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
