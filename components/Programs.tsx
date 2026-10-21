"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, GraduationCap, Search, X } from "lucide-react";
import { formatDuration, initials, type Program, type StudyLevel } from "@/lib/programs";
import { wa } from "@/lib/site";
import { useSearch } from "./SearchProvider";

const PAGE_SIZE = 12;

type Level = "All" | StudyLevel;
type View = "programs" | "universities";

const LEVELS: { value: Level; label: string }[] = [
  { value: "All", label: "All Programs" },
  { value: "Bachelor", label: "Bachelor's" },
  { value: "Master", label: "Master's" },
];

interface University {
  university_id: string;
  university_name: string;
  city: string | null;
  province: string | null;
  logo_url: string | null;
  ranking_label: string;
  program_count: number;
  study_levels: StudyLevel[];
}

function feeLabel(p: Program): string {
  if (p.tuition_fee_amount == null || p.tuition_fee_amount === "") return "Contact for fee";
  const currency = p.tuition_fee_currency ? `${p.tuition_fee_currency} ` : "";
  const cycle = p.tuition_billing_cycle === "YEARLY" ? " / year" : "";
  return `${currency}${Number(p.tuition_fee_amount).toLocaleString("en-IN")}${cycle}`;
}

function askAboutProgram(p: Program) {
  const currency = p.tuition_fee_currency ? `${p.tuition_fee_currency} ` : "";
  const fee =
    p.tuition_fee_amount != null
      ? `${currency}${p.tuition_fee_amount}${p.tuition_billing_cycle === "YEARLY" ? " per year" : ""}`
      : "Not specified";
  const message = `Hi MANDARINMALLU, I want to know more about this program:
Program: ${p.major || p.program_name} (${p.study_level})
University: ${p.university_name}
City: ${p.city || "Not specified"}${p.province ? `, ${p.province}` : ""}
Language: ${p.teaching_language || "Not specified"}
Duration: ${formatDuration(p.duration_months)}
Tuition fee: ${fee}
Scholarship: ${p.scholarship_name || "Not specified"}`;
  window.open(wa(message), "_blank", "noopener,noreferrer");
}

/** 1 … (current-1) current (current+1) … last */
function pageItems(total: number, current: number): (number | "ellipsis")[] {
  return Array.from({ length: total }, (_, i) => i + 1)
    .filter((n) => n === 1 || n === total || Math.abs(n - current) <= 1)
    .reduce<(number | "ellipsis")[]>((acc, n, i, arr) => {
      if (i > 0 && n - arr[i - 1] > 1) acc.push("ellipsis");
      acc.push(n);
      return acc;
    }, []);
}

function scrollToPrograms() {
  document.getElementById("programs")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Pagination({
  total,
  current,
  onChange,
  label,
  keyPrefix,
  withAriaCurrent,
}: {
  total: number;
  current: number;
  onChange: (page: number) => void;
  label: string;
  keyPrefix: string;
  withAriaCurrent?: boolean;
}) {
  return (
    <nav className="program-pagination" aria-label={label}>
      <button
        className="page-nav"
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
      >
        <ChevronLeft size={18} />
        <span>Previous</span>
      </button>
      <div className="page-numbers">
        {pageItems(total, current).map((item, i) =>
          item === "ellipsis" ? (
            <span className="page-ellipsis" key={`${keyPrefix}ellipsis-${i}`}>
              …
            </span>
          ) : (
            <button
              className={`page-number ${item === current ? "active" : ""}`}
              aria-current={withAriaCurrent && item === current ? "page" : undefined}
              onClick={() => {
                onChange(item);
                scrollToPrograms();
              }}
              key={item}
            >
              {item}
            </button>
          ),
        )}
      </div>
      <button
        className="page-nav"
        onClick={() => onChange(Math.min(total, current + 1))}
        disabled={current === total}
      >
        <span>Next</span>
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}

export default function Programs({ programs }: { programs: Program[] }) {
  const { query, clear } = useSearch();
  const [level, setLevel] = useState<Level>("All");
  const [localQuery, setLocalQuery] = useState("");
  const [page, setPage] = useState(1);
  const [view, setView] = useState<View>("programs");
  const [uniPage, setUniPage] = useState(1);

  const terms = useMemo(
    () => [query, localQuery].map((s) => s.trim().toLowerCase()).filter(Boolean),
    [query, localQuery],
  );

  const filtered = useMemo(
    () =>
      programs.filter((p) => {
        const levelOk = level === "All" || p.study_level === level;
        const haystack = [
          p.program_name,
          p.major,
          p.degree,
          p.university_name,
          p.city,
          p.province,
          p.teaching_language,
          p.scholarship_name,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return levelOk && terms.every((t) => haystack.includes(t));
      }),
    [programs, level, terms],
  );

  const universities = useMemo(() => {
    const map = new Map<string, University>();
    programs.forEach((p) => {
      const key = (p.university_id || p.university_name).trim().toLowerCase();
      const existing = map.get(key);
      if (existing) {
        existing.program_count += 1;
        if (!existing.study_levels.includes(p.study_level)) {
          existing.study_levels.push(p.study_level);
        }
        if (!existing.logo_url && p.university_logo) existing.logo_url = p.university_logo;
        if (!existing.city && p.city) existing.city = p.city;
        if (!existing.province && p.province) existing.province = p.province;
      } else {
        map.set(key, {
          university_id: key,
          university_name: p.university_name,
          city: p.city,
          province: p.province,
          logo_url: p.university_logo,
          ranking_label: p.ranking_label,
          program_count: 1,
          study_levels: [p.study_level],
        });
      }
    });
    return [...map.values()].sort((a, b) => a.university_name.localeCompare(b.university_name));
  }, [programs]);

  const filteredUniversities = useMemo(() => {
    const t = [localQuery, query].map((s) => s.trim().toLowerCase()).filter(Boolean);
    return universities.filter((u) => {
      const haystack = [u.university_name, u.city, u.province, ...u.study_levels]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return t.every((term) => haystack.includes(term));
    });
  }, [universities, localQuery, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const uniTotalPages = Math.max(1, Math.ceil(filteredUniversities.length / PAGE_SIZE));
  const uniCurrentPage = Math.min(uniPage, uniTotalPages);
  const visibleUniversities = filteredUniversities.slice(
    (uniCurrentPage - 1) * PAGE_SIZE,
    uniCurrentPage * PAGE_SIZE,
  );

  useEffect(() => {
    setPage(1);
    setUniPage(1);
  }, [level, query, localQuery]);

  const pickLevel = (value: Level) => {
    setLevel(value);
    setPage(1);
    setView("programs");
  };

  const clearAll = () => {
    setLocalQuery("");
    clear();
    setPage(1);
    setUniPage(1);
  };

  return (
    <section className="section" id="programs">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Explore China University Programs</h2>
          <p>Compare courses, tuition fees, scholarships and universities in one place.</p>
        </div>

        <div className="program-view-tabs seg" aria-label="Choose catalogue view">
          <button
            className={view === "programs" ? "active" : ""}
            onClick={() => setView("programs")}
          >
            Programs ({programs.length})
          </button>
          <button
            className={view === "universities" ? "active" : ""}
            onClick={() => setView("universities")}
          >
            All Universities ({universities.length})
          </button>
        </div>

        <div className="programs-toolbar">
          {view === "programs" && (
            <div className="seg program-level-tabs" aria-label="Filter by study level">
              {LEVELS.map((l) => (
                <button
                  className={level === l.value ? "active" : ""}
                  onClick={() => pickLevel(l.value)}
                  key={l.value}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
          <label className="program-search">
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              list="mandarinmallu-search-suggestions"
              placeholder={
                view === "programs"
                  ? "Search course, university or city..."
                  : "Search universities or cities..."
              }
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              aria-label="Search programs or universities"
            />
            {localQuery && (
              <button type="button" onClick={() => setLocalQuery("")} aria-label="Clear search">
                <X size={16} />
              </button>
            )}
          </label>
          {(query || localQuery) && (
            <button className="clear-chip" onClick={clearAll}>
              Clear search <X size={14} />
            </button>
          )}
        </div>

        {view === "programs" && (
          <>
            <div className="programs-results-row">
              <p>{filtered.length} programs found</p>
              <span>
                Showing {filtered.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0}–
                {Math.min(currentPage * PAGE_SIZE, filtered.length)} of {filtered.length}
              </span>
            </div>
            <div className="programs-grid">
              {visible.map((p) => (
                <article className="prog-card program-grid-card" key={p.program_id}>
                  <div className="prog-head">
                    {p.university_logo ? (
                      <img
                        className="uni-logo"
                        src={p.university_logo}
                        alt={`${p.university_name} logo`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="uni-badge">{initials(p.university_name || "University")}</div>
                    )}
                    <div className="program-heading">
                      <span className="program-level-pill">{p.study_level}</span>
                      <h3>{p.major || p.program_name}</h3>
                      <span>{p.university_name}</span>
                    </div>
                  </div>
                  <p className="program-location">
                    {[p.city, p.province].filter(Boolean).join(", ") || "China"}
                  </p>
                  <dl>
                    <div>
                      <dt>World / university rank</dt>
                      <dd>{p.ranking_label}</dd>
                    </div>
                    <div>
                      <dt>Language</dt>
                      <dd>{p.teaching_language || "Not specified"}</dd>
                    </div>
                    <div>
                      <dt>Duration</dt>
                      <dd>{formatDuration(p.duration_months)}</dd>
                    </div>
                    <div>
                      <dt>Tuition fee</dt>
                      <dd className="fee">{feeLabel(p)}</dd>
                    </div>
                    <div>
                      <dt>Scholarship</dt>
                      <dd>{p.scholarship_name || "Not specified"}</dd>
                    </div>
                  </dl>
                  <button className="btn btn-outline block" onClick={() => askAboutProgram(p)}>
                    Ask about this program
                  </button>
                </article>
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="empty programs-empty">
                No programs found. Try a different search or filter, or message us on WhatsApp.
              </p>
            )}
            {filtered.length > PAGE_SIZE && (
              <Pagination
                total={totalPages}
                current={currentPage}
                onChange={setPage}
                label="Program pagination"
                keyPrefix=""
                withAriaCurrent
              />
            )}
          </>
        )}

        {view === "universities" && (
          <>
            <div className="programs-results-row">
              <p>{filteredUniversities.length} universities found</p>
              <span>
                Showing {filteredUniversities.length ? (uniCurrentPage - 1) * PAGE_SIZE + 1 : 0}–
                {Math.min(uniCurrentPage * PAGE_SIZE, filteredUniversities.length)} of{" "}
                {filteredUniversities.length}
              </span>
            </div>
            <div className="programs-grid university-list-grid">
              {visibleUniversities.map((u) => (
                <article className="prog-card university-list-card" key={u.university_id}>
                  <div className="prog-head">
                    {u.logo_url ? (
                      <img
                        className="uni-logo"
                        src={u.logo_url}
                        alt={`${u.university_name} logo`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="uni-badge">{initials(u.university_name)}</div>
                    )}
                    <div className="program-heading">
                      <h3>{u.university_name}</h3>
                      <span>{[u.city, u.province].filter(Boolean).join(", ") || "China"}</span>
                    </div>
                  </div>
                  <p className="university-program-count">
                    <GraduationCap size={16} /> {u.program_count} listed{" "}
                    {u.program_count === 1 ? "program" : "programs"}
                  </p>
                  <p className="university-levels">{u.study_levels.join(" · ")}</p>
                  <p className="university-ranking">{u.ranking_label}</p>
                  <button
                    className="btn btn-outline block"
                    onClick={() => {
                      setView("programs");
                      setLevel("All");
                      setLocalQuery(u.university_name);
                      setPage(1);
                    }}
                  >
                    View programs
                  </button>
                </article>
              ))}
            </div>
            {filteredUniversities.length === 0 && (
              <p className="empty programs-empty">No universities found. Try another search.</p>
            )}
            {filteredUniversities.length > PAGE_SIZE && (
              <Pagination
                total={uniTotalPages}
                current={uniCurrentPage}
                onChange={setUniPage}
                label="University pagination"
                keyPrefix="university-"
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
