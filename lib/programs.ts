import { FALLBACK_PARTNERS } from "./content";

export type StudyLevel = "Bachelor" | "Master";

/** Slim, display-ready program record shipped to the client. */
export interface Program {
  program_id: string;
  program_name: string;
  university_id: string | null;
  university_name: string;
  city: string | null;
  province: string | null;
  degree: string | null;
  major: string | null;
  teaching_language: string | null;
  duration_months: number | null;
  scholarship_name: string | null;
  tuition_fee_amount: string | number | null;
  tuition_fee_currency: string | null;
  tuition_billing_cycle: string | null;
  university_logo: string | null;
  ranking_label: string;
  study_level: StudyLevel;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  count: number;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export type RawProgram = Record<string, any>;

interface Ranking {
  type?: string | null;
  value?: string | null;
  university_id?: string | null;
}

/** "SHANGHAI WORLD: 401" — prefers world rankings, mirrors the original site. */
export function rankingLabel(rankingsJson: string | null | undefined): string {
  if (!rankingsJson) return "Not listed";
  try {
    const list: Ranking[] = JSON.parse(rankingsJson);
    const pick =
      list.find((r) => r.type === "SHANGHAI_WORLD") ??
      list.find((r) => r.type === "QS_WORLD") ??
      list.find((r) => r.type === "SHANGHAI_CHINA") ??
      list[0];
    return pick
      ? `${pick.type?.replace(/_/g, " ") ?? "Rank"}: ${pick.value ?? "N/A"}`
      : "Not listed";
  } catch {
    return "Not listed";
  }
}

/** Two-letter initials used for the logo fallback badge. */
export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function formatDuration(months: number | null | undefined): string {
  if (!months || months <= 0) return "Not specified";
  if (months % 12 === 0) {
    const years = months / 12;
    return `${years} ${years === 1 ? "year" : "years"}`;
  }
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [years ? `${years} ${years === 1 ? "year" : "years"}` : "", rest ? `${rest} months` : ""]
    .filter(Boolean)
    .join(" ");
}

/** Handles both the flat and the nested record shapes present in the dataset. */
export function normalizeProgram(e: RawProgram, index: number): Program {
  const uni: RawProgram = e.university ?? {};
  const city = typeof e.city === "object" ? e.city?.name : e.city;
  const province = typeof e.province === "object" ? e.province?.name : e.province;
  const fee: RawProgram = e.tuition_fee ?? {};
  const currency: RawProgram = fee.currency ?? {};
  const rankings = uni.rankings ?? e.university_rankings ?? [];
  const degree = e.degree?.name ?? e.degree ?? null;

  return {
    program_id: String(e.program_id ?? e.id ?? `${e.slug ?? "program"}-${index}`),
    program_name: e.program_name ?? e.name ?? "",
    university_id: e.university_id ?? uni.id ?? rankings?.[0]?.university_id ?? null,
    university_name: e.university_name ?? uni.name ?? "University not specified",
    city: city ?? uni.city?.name ?? null,
    province: province ?? uni.city?.province?.name ?? null,
    degree,
    major: e.major?.name ?? e.major ?? null,
    teaching_language: e.teaching_language ?? null,
    duration_months: e.duration_months ?? null,
    scholarship_name: e.scholarship_name ?? e.scholarship?.name ?? null,
    tuition_fee_amount: e.tuition_fee_amount ?? fee.amount ?? null,
    tuition_fee_currency: e.tuition_fee_currency ?? currency.code ?? null,
    tuition_billing_cycle: e.tuition_billing_cycle ?? fee.billing_cycle ?? null,
    university_logo: e.university_logo ?? uni.logo?.thumbnail ?? uni.logo?.original ?? null,
    ranking_label: rankingLabel(
      typeof rankings === "string" ? rankings : JSON.stringify(rankings),
    ),
    study_level:
      e.study_level === "Master" || String(degree ?? "").toLowerCase().includes("master")
        ? "Master"
        : "Bachelor",
  };
}

/** The seven universities with the most programs, for the partners marquee. */
export function topPartnerUniversities(raw: RawProgram[]): Partner[] {
  if (!raw.length) return FALLBACK_PARTNERS;
  const map = new Map<string, Partner>();
  raw.forEach((p) => {
    const name: string = p.university_name || p.university?.name || "University";
    const id = (p.university_id || name).trim().toLowerCase();
    const logo: string =
      p.university_logo || p.university?.logo?.thumbnail || p.university?.logo?.original || "";
    const existing = map.get(id);
    if (existing) {
      existing.count += 1;
      if (!existing.logo && logo) existing.logo = logo;
    } else {
      map.set(id, { id, name, logo, count: 1 });
    }
  });
  return [...map.values()]
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
    .slice(0, 7);
}
