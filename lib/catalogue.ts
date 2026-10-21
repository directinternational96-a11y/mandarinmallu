import fs from "node:fs";
import path from "node:path";
import {
  normalizeProgram,
  topPartnerUniversities,
  type Partner,
  type Program,
  type RawProgram,
} from "./programs";

/**
 * Build-time loader (server only): reads the bundled dataset and returns the
 * normalized programs plus the partner universities for the marquee.
 */
export function loadCatalogue(): { programs: Program[]; partners: Partner[] } {
  const file = path.join(process.cwd(), "data", "programs.json");
  const json = JSON.parse(fs.readFileSync(file, "utf8"));
  const raw: RawProgram[] = Array.isArray(json.programs) ? json.programs : [];
  return {
    programs: raw.map(normalizeProgram),
    partners: topPartnerUniversities(raw),
  };
}
